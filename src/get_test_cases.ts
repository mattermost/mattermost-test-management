// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/get_test_cases.ts
import { findSingle, sortBy } from '@std/collections';

import {
  dataFolderPath,
  projectKey,
  testCasesFolderFullPath,
  tmpDataFolderPath,
} from './util/constant.ts';
import { readFile, writeFile } from './util/file.ts';
import { getFolderNameAndFullPathById, getHashes } from './util/helper.ts';
import { testCaseToMarkdown } from './util/markdown.ts';
import { sanitizeTestCase, sanitizeTestSteps } from './util/test_case.ts';
import { Component, Folder, KeyPathId, Priority, Status } from './util/types.ts';
import { makeZephyrClient } from './util/zephyr.ts';

const components = readFile(`${dataFolderPath}/components.json`) as Component[];
const folders = readFile(`${dataFolderPath}/folders.json`) as Folder[];
const priorities = readFile(`${dataFolderPath}/priorities.json`) as Priority[];
const statuses = readFile(`${dataFolderPath}/statuses.json`) as Status[];

const zephyr = makeZephyrClient();

const testCases = await zephyr.getAllTestCases(projectKey, 0, 1000);
testCases.forEach((testCase) => {
  const sanitizedTestCase = sanitizeTestCase(testCase);

  if (sanitizedTestCase.component?.id) {
    const component = components.find((c) => c.id === sanitizedTestCase.component?.id);
    sanitizedTestCase.componentName = component?.name;
    delete sanitizedTestCase.component;
  } else if (sanitizedTestCase.component === null) {
    sanitizedTestCase.componentName = null;
    delete sanitizedTestCase.component;
  }

  if (sanitizedTestCase.priority?.id) {
    const priority = priorities.find((p) => p.id === sanitizedTestCase.priority?.id);
    sanitizedTestCase.priorityName = priority?.name;
    delete sanitizedTestCase.priority;
  }

  if (sanitizedTestCase.status?.id) {
    const status = statuses.find((s) => s.id === sanitizedTestCase.status?.id);
    sanitizedTestCase.statusName = status?.name;
    delete sanitizedTestCase.status;
  }

  const { name, fullPath } = getFolderNameAndFullPathById(folders, sanitizedTestCase.folder?.id);
  sanitizedTestCase.folderName = name;
  sanitizedTestCase.folderFullPath = fullPath;
  delete sanitizedTestCase.folder;
});

const testCaseKeyAndPath = testCases.map<KeyPathId>((tc) => ({
  key: tc.key,
  path: tc.folderFullPath,
  id: tc.id || 0,
}));
const sortedById = sortBy(testCaseKeyAndPath, (it: KeyPathId) => it.id);

// Save collections of key and path
console.log(
  writeFile(
    `${dataFolderPath}/key-and-path.json`,
    JSON.stringify(sortedById),
  ),
);

const testStepsResponse = await zephyr.loopGetTestSteps(testCases);

for (let i = 0; i < testCases.length; i++) {
  const testCase = testCases[i];
  const stepsResponse = findSingle(testStepsResponse, (it) => it.key === testCase.key);
  testCase.steps = sanitizeTestSteps(stepsResponse?.steps);

  if (!testCase.steps) {
    // Log test case for info
    console.log(testCase, '! Attention: steps missing that requires fixing.');
  }

  const [caseHashed, stepsHashed] = getHashes(testCase);

  testCase.caseHashed = caseHashed;
  testCase.stepsHashed = stepsHashed;

  // Save test case to temporary folder
  console.log(
    writeFile(
      `${tmpDataFolderPath}/${testCase.key}.json`,
      JSON.stringify(testCase),
    ),
  );
}

testCases.forEach((testCase) => {
  // Save test case to markdown file
  console.log(
    writeFile(
      `${testCasesFolderFullPath}/${testCase.folderFullPath}/${testCase.key}.md`,
      testCaseToMarkdown(testCase, { keyPathIds: testCaseKeyAndPath, fromTmp: true }),
    ),
  );

  if (testCase.customFields['Update notes']) {
    // Save update notes to json file
    console.log(
      writeFile(
        `${testCasesFolderFullPath}/${testCase.folderFullPath}/${testCase.key}.json`,
        JSON.stringify({ updateNotes: testCase.customFields['Update notes'] }),
      ),
    );
  }
});
