// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/update.ts

import { findSingle, green, red, yellow } from './deps.ts';

import { projectKey, testCasesFolderFullPath } from './util/constant.ts';
import { readFile } from './util/file.ts';
import { getFiles, getHashes } from './util/helper.ts';
import { makeJiraClient } from './util/jira.ts';
import { isValidTestCase } from './util/test_case.ts';
import { Component, Folder, Priority, Status, TestCase, TestSteps } from './util/types.ts';
import { makeZephyrClient } from './util/zephyr.ts';

const jira = await makeJiraClient();
const zephyr = await makeZephyrClient();

const files = getFiles(testCasesFolderFullPath);

const newTests: TestCase[] = [];
const modifiedTests: TestCase[] = [];
const modifiedTestStepsByKey: Record<string, TestSteps | undefined> = {};
files.forEach((file) => {
  const testCase = readFile(file) as TestCase;

  if (testCase.id) {
    const [caseHashed, stepsHashed] = getHashes(testCase);

    if (testCase.caseHashed !== caseHashed) {
      modifiedTests.push(testCase);
    }

    if (testCase.stepsHashed !== stepsHashed) {
      modifiedTestStepsByKey[testCase.key] = testCase.steps;
    }
  } else {
    newTests.push(testCase);
  }
});

if (!(newTests.length || modifiedTests.length || Object.entries(modifiedTestStepsByKey).length)) {
  console.log(yellow('No change found. Nothing to create nor update.'));
  Deno.exit(0);
}

// Get up-to-date records from the service
const testCases = await zephyr.getAllTestCases(projectKey, 0, 1000);
const folders = await zephyr.getAllFolders(projectKey, 'TEST_CASE', 0, 100) as Folder[];
const components = await jira.getComponents(projectKey, 100) as Component[];
const priorities = await zephyr.getAllPriorities(projectKey, 0, 100) as Priority[];
const statuses = await zephyr.getAllStatuses(projectKey, 'TEST_CASE', 0, 100) as Status[];

if (!newTests.length) {
  console.log(yellow('No test to create'));
} else {
  console.log(yellow('New test to be created:'));
  newTests.forEach((tc, index) => console.log(`  ${index + 1}. ${tc.key}: ${tc.name}`));

  for (let i = 0; i < newTests.length; i++) {
    const testCase = newTests[i];

    // create folder if needed
    const folder = await createFolderIfNeeded(testCase, folders);

    // use folder
    testCase.folder = folder;

    throwIfNotFound('Priority', priorities, testCase.key, testCase.priority?.id);
    throwIfNotFound('Status', statuses, testCase.key, testCase.status?.id);
    throwIfNotFound('Component', components, testCase.key, testCase.component?.id);

    const validTestCase = isValidTestCase(testCase, { components, folders, priorities, statuses });

    // Log for info
    if (validTestCase) {
      console.log('(OK) Changes are valid');
    } else {
      // Should not continue when test case is not valid
      throw new Error('Test case not valid!');
    }

    const found = testCases.filter((it) => it.name === testCase.name);
    if (found.length > 0) {
      console.warn(
        red(
          `! Did not create a test case. Same "${testCase.name}" title is present at "${testCase.folder?.fullPath}".`,
        ),
      );
      continue;
    }

    const res = await zephyr.createTestCase(testCase);
    const createdTestCase = { ...testCase, id: res.id };
    testCases.push(createdTestCase);

    // Save test steps
    if (!createdTestCase.key) {
      throw new Error('! Failed to create test case. Verify the status and run again.');
    }

    if (testCase.steps) {
      await zephyr.createTestSteps(createdTestCase.key, {
        mode: 'OVERWRITE',
        items: testCase.steps,
      });
    }

    console.log(green(`(OK) Test case created for ${createdTestCase.key}`));
  }
}

if (!modifiedTests.length) {
  console.log(yellow('No test info to update'));
} else {
  console.log(yellow('Test info to be updated:'));
  modifiedTests.forEach((tc, index) => console.log(`  ${index + 1}. ${tc.key}: ${tc.name}`));

  for (let i = 0; i < modifiedTests.length; i++) {
    const testCase = modifiedTests[i];

    // create folder if needed
    const folder = await createFolderIfNeeded(testCase, folders);

    // use folder
    testCase.folder = folder;

    throwIfNotFound('Test Case', testCases, testCase.key, testCase.id);
    throwIfNotFound('Priority', priorities, testCase.key, testCase.priority?.id);
    throwIfNotFound('Status', statuses, testCase.key, testCase.status?.id);
    throwIfNotFound('Component', components, testCase.key, testCase.component?.id);

    const validTestCase = isValidTestCase(testCase, { components, folders, priorities, statuses });

    // Log for info
    if (validTestCase) {
      console.log(green('(OK) Changes are valid'));
    } else {
      // Should not continue when test case is not valid
      throw new Error('Test case not valid!');
    }

    const success = await zephyr.updateTestCase(testCase);
    if (success) {
      console.info(green(`(OK) Test case updated for ${testCase.key}`));
    } else {
      console.warn(red(`! Test case not updated for ${testCase.key}`));
    }
  }
}

if (!Object.entries(modifiedTestStepsByKey).length) {
  console.log(yellow('No test step to update'));
} else {
  console.log(yellow('Test step to be updated:'));
  Object.entries(modifiedTestStepsByKey).forEach(([key, _steps]) => console.log(`  - ${key}`));

  const modifiedSteps = Object.entries(modifiedTestStepsByKey);
  for (let i = 0; i < modifiedSteps.length; i++) {
    const [key, steps] = modifiedSteps[i];

    if (steps) {
      const success = await zephyr.createTestSteps(key, {
        mode: 'OVERWRITE',
        items: steps,
      });

      if (success) {
        console.info(green(`(OK) Test steps updated for ${key}`));
      } else {
        console.warn(red(`! Test steps not updated for ${key}`));
      }
    }
  }
}

function throwIfNotFound<T extends { id?: string | number | null }>(
  type: string,
  records: T[],
  key: string,
  idToCheck?: string | number | null,
): T | null {
  if (idToCheck) {
    const found = findSingle(records, (it) => it.id === idToCheck);

    if (!found) {
      throw new Error(
        `  ${key}: ${type} not found with id="${idToCheck}".`,
      );
    }

    return found;
  }

  return null;
}

async function createFolderIfNeeded(testCase: TestCase, folders: Folder[]): Promise<Folder> {
  let folder: Folder | null | undefined;
  if (testCase.folder?.id) {
    folder = throwIfNotFound('Folder', folders, testCase.key, testCase.folder?.id);
  }

  if (!folder && testCase.folder?.fullPath) {
    folder = findSingle(folders, (it) => it.fullPath === testCase.folder.fullPath);
  }

  if (folder) {
    return folder;
  }

  // validate folder info: name
  if (!testCase.folder?.name) {
    throw new Error(`  ${testCase.key}: Folder name required.`);
  }

  // validate parent folder
  throwIfNotFound('Parent folder', folders, testCase.key, testCase.folder?.parentId);

  // create folder
  const res = await zephyr.createFolder({
    name: testCase.folder.name,
    projectKey,
    folderType: 'TEST_CASE',
    parentId: testCase.folder.parentId,
  });
  return { ...testCase.folder, id: res.id };
}
