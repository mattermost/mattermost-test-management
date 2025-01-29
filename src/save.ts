// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/save.ts

import { findSingle } from '@std/collections';
import { green, red, yellow } from '@std/fmt/colors';

import { projectKey } from './util/constant.ts';
import { getFolderFullPath } from './util/helper.ts';
import { makeJiraClient } from './util/jira.ts';
import { validTestCase } from './util/test_case.ts';
import { Component, Folder, Priority, Status, TestSteps } from './util/types.ts';
import { validate } from './util/validate.ts';
import { makeZephyrClient, ZephyrClient } from './util/zephyr.ts';

const jira = makeJiraClient();
const zephyr = makeZephyrClient();

const folders = await zephyr.getAllFolders(projectKey, 'TEST_CASE', 0, 100) as Folder[];

const {
  foldersToCreate,
  testCaseToCreate,
  testCaseToModify,
  testStepToModify,
} = validate();

if (foldersToCreate.length) {
  // Log info
  console.log(yellow('Creating new folder in Zephyr...'));

  for (let i = 0; i < foldersToCreate.length; i++) {
    const folderToCreate = foldersToCreate[i];

    // Log info
    console.log(`${i + 1}.  "${folderToCreate.fullPath}": "${folderToCreate.name}"`);

    const found = findSingle(folders, (it) => it.fullPath === folderToCreate.fullPath);
    if (found) {
      // Log info
      console.log(yellow('-> Folder already existed.'));
      continue;
    }

    if (folderToCreate.parentId === undefined) {
      const parentFolder = findSingle(folders, (it) => {
        const parts = folderToCreate.fullPath.split('/');
        parts.pop();

        return it.fullPath === parts.join('/');
      });

      folderToCreate.parentId = parentFolder?.id;
    }

    if (folderToCreate.name) {
      const res = await zephyr.createFolder({
        name: folderToCreate.name,
        projectKey,
        folderType: 'TEST_CASE',
        parentId: folderToCreate.parentId,
      });
      // Log info
      console.log(green('-> Folder successfully created!'));

      folders.push({ ...folderToCreate, id: res.id });
    }
  }
}

// Get up-to-date records from the service
const testCases = await zephyr.getAllTestCases(projectKey, 0, 1000);
const components = await jira.getComponents(projectKey, 100) as Component[];
const priorities = await zephyr.getAllPriorities(projectKey, 0, 100) as Priority[];
const statuses = await zephyr.getAllStatuses(projectKey, 'TEST_CASE', 0, 100) as Status[];

const fileAndTestCaseToCreate = Object.entries(testCaseToCreate);
if (fileAndTestCaseToCreate.length) {
  // Log info
  console.log(yellow('Saving new test case to Zephyr...'));

  for (let i = 0; i < fileAndTestCaseToCreate.length; i++) {
    const [file, testCase] = fileAndTestCaseToCreate[i];
    // Log info
    console.log(`${i + 1}. "${file}": "${testCase.name}"`);

    testCase.folderFullPath = getFolderFullPath(file);
    const testCaseError = validTestCase(testCase, { components, folders, priorities, statuses });

    // Log for info
    if (!testCaseError.length) {
      console.log(green('-> Changes are valid.'));
    } else {
      // Should not continue when test case is not valid
      throw new Error('Test case not valid!');
    }

    const testCaseFound = findSingle(testCases, (it) => it.name === testCase.name);
    if (testCaseFound) {
      const folderFound = findSingle(folders, (it) => it.id === testCaseFound.folder?.id);
      if (folderFound?.fullPath === testCase.folderFullPath) {
        console.warn(
          red(
            `! Did not create a test case. Same "${testCase.name}" title is present at "${testCase.folderFullPath}".`,
          ),
        );
        continue;
      }
    }

    const folder = findSingle(folders, (it) => it.fullPath === testCase.folderFullPath);
    const res = await zephyr.createTestCase({ ...testCase, folder });
    const createdTestCase = { ...testCase, id: res.id, key: res.key };
    testCases.push(createdTestCase);

    // Save test steps
    if (!createdTestCase.key) {
      throw new Error('! Failed to create test case. Verify the status and run again.');
    }

    if (testCase.steps) {
      await saveTestSteps(zephyr, createdTestCase.key, testCase.steps, 'created');
    }

    // Log info
    console.log(green(`-> Test case created: ${createdTestCase.key}`));
  }
}

const fileAndTestCaseToModify = Object.entries(testCaseToModify);
if (fileAndTestCaseToModify.length) {
  // Log info
  console.log(yellow('Updating test case in Zephyr...'));

  for (let i = 0; i < fileAndTestCaseToModify.length; i++) {
    const [file, testCase] = fileAndTestCaseToModify[i];
    // Log info
    console.log(`${i + 1}. "${file}": "${testCase.name}"`);

    testCase.folderFullPath = getFolderFullPath(file);
    const testCaseError = validTestCase(testCase, { components, folders, priorities, statuses });

    // Log for info
    if (!testCaseError.length) {
      console.log(green('-> Changes are valid.'));
    } else {
      testCaseError.forEach((err) => console.log(red('-> (error)'), red(err)));

      // Should not continue when test case is not valid
      throw new Error('Test case not valid!');
    }

    const component = findSingle(components, (it) => it.name === testCase.componentName);
    const folder = findSingle(
      folders,
      (it) => it.name === testCase.folderName && it.fullPath === testCase.folderFullPath,
    );
    const priority = findSingle(priorities, (it) => it.name === testCase.priorityName);
    const status = findSingle(statuses, (it) => it.name === testCase.statusName);

    const success = await zephyr.updateTestCase({
      ...testCase,
      component,
      folder,
      priority,
      status,
    });

    // Log info
    if (success) {
      console.info(i + 1, green(`-> Test case updated for ${testCase.key}`));
    } else {
      console.warn(i + 1, red(`! Test case not updated for ${testCase.key}`));
    }
  }
}

const fileAndTestStepToModify = Object.entries(testStepToModify);
if (fileAndTestStepToModify.length) {
  // Log info
  console.log(yellow('Updating steps of a test case in Zephyr...'));

  for (let i = 0; i < fileAndTestStepToModify.length; i++) {
    const [key, steps] = fileAndTestStepToModify[i];
    // Log info
    console.log(`${i + 1}. "${key}": with ${steps?.length} step/s`);

    if (steps) {
      await saveTestSteps(zephyr, key, steps, 'updated');
    }
  }
}

async function saveTestSteps(
  zephyr: ZephyrClient,
  testKey: string,
  steps: TestSteps,
  message: string,
) {
  const success = await zephyr.createTestSteps(testKey, {
    mode: 'OVERWRITE',
    items: steps,
  });

  // Log info
  if (success) {
    console.info(green(`-> Test steps ${message} for ${testKey}`));
  } else {
    console.warn(red(`! Test steps not ${message} for ${testKey}`));
  }
}
