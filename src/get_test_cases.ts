// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/get_test_cases.ts

import { findSingle } from './deps.ts';
import {
  dataFolderPath,
  defaultNoneFolder,
  projectKey,
  testCasesFolderFullPath,
} from './util/constant.ts';
import { readFile, writeFile } from './util/file.ts';
import { getHex, getParentFolderById } from './util/helper.ts';
import { sanitizeTestCase, sanitizeTestSteps } from './util/test_case.ts';
import { Component, Folder, Priority, Status } from './util/types.ts';
import { makeZephyrClient } from './util/zephyr.ts';

const components = readFile(`${dataFolderPath}/components.json`) as Component[];
const folders = readFile(`${dataFolderPath}/folders.json`) as Folder[];
const priorities = readFile(`${dataFolderPath}/priorities.json`) as Priority[];
const statuses = readFile(`${dataFolderPath}/statuses.json`) as Status[];

const zephyr = await makeZephyrClient();

const testCases = await zephyr.getAllTestCases(projectKey, 0, 1000);
testCases.forEach((testCase) => {
  const sanitizedTestCase = sanitizeTestCase(testCase);

  if (sanitizedTestCase.component?.id) {
    const component = components.find((c) => c.id === sanitizedTestCase.component?.id);
    sanitizedTestCase.component.name = component?.name;
  }

  if (sanitizedTestCase.priority?.id) {
    const priority = priorities.find((p) => p.id === sanitizedTestCase.priority.id);
    sanitizedTestCase.priority.name = priority?.name;
  }

  if (sanitizedTestCase.status?.id) {
    const status = statuses.find((s) => s.id === sanitizedTestCase.status.id);
    sanitizedTestCase.status.name = status?.name;
  }

  const folder = getParentFolderById(folders, sanitizedTestCase.folder?.id) || defaultNoneFolder;
  sanitizedTestCase.folder = folder;
});

const testStepsResponse = await zephyr.loopGetTestSteps(testCases);

for (let i = 0; i < testCases.length; i++) {
  const testCase = testCases[i];
  const stepsResponse = findSingle(testStepsResponse, (it) => it.key === testCase.key);
  const steps = sanitizeTestSteps(stepsResponse?.steps);

  if (!steps) {
    // Log test case for info
    console.log(testCase, '! Attention: steps missing that requires fixing.');
  }

  const caseHashed = getHex(JSON.stringify(testCase));
  const stepsHashed = steps ? getHex(JSON.stringify(steps)) : null;

  // Save each test case to json file
  console.log(
    writeFile(
      `${testCasesFolderFullPath}/${testCase.folder.fullPath}/${testCase.key}.json`,
      JSON.stringify({ ...testCase, steps, caseHashed, stepsHashed }),
    ),
  );
}
