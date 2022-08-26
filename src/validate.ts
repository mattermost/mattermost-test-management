// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/validate.ts

import { dataFolderPath, testCasesFolderFullPath } from './util/constant.ts';
import { readFile, writeFile } from './util/file.ts';
import {
  getCliArgs,
  getFiles,
  getHashes,
  isFolderPathValid,
  newLineRe,
  sanitizeName,
} from './util/helper.ts';
import { isValidTestCase } from './util/test_case.ts';
import { Component, Folder, Priority, Status, TestCase } from './util/types.ts';

const args = getCliArgs();

const files = getFiles(testCasesFolderFullPath);

const withChanges: Record<string, TestCase> = {};
files.forEach((file) => {
  const testCase = readFile(file) as TestCase;

  if (args.all) {
    withChanges[file] = testCase;
  } else {
    const [caseHashed, stepsHashed] = getHashes(testCase);
    if (testCase.caseHashed !== caseHashed || testCase.stepsHashed !== stepsHashed) {
      withChanges[file] = testCase;
    }
  }
});

if (!Object.entries(withChanges).length) {
  console.log('No file change found');
  Deno.exit(0);
}

// Get stale records from file
const components = readFile(`${dataFolderPath}/components.json`) as Component[];
const priorities = readFile(`${dataFolderPath}/priorities.json`) as Priority[];
const statuses = readFile(`${dataFolderPath}/statuses.json`) as Status[];
const folders = readFile(`${dataFolderPath}/folders.json`) as Folder[];

const invalidFiles: string[] = [];
const invalidTestNames: string[] = [];
const testByFolder: Record<string, string[]> = {};

Object.entries(withChanges).forEach(([file, testCase], index) => {
  const action = testCase.action ? ` (${testCase.action}) ` : '';

  // Log for info
  console.log(`${index + 1}. ${action}${file}`);

  const validFolder = isFolderPathValid(file, testCase.folder.fullPath);
  const validTestCase = isValidTestCase(testCase, { components, folders, priorities, statuses });

  const testName = sanitizeName(testCase.name);

  if (testCase.folder.fullPath) {
    const { fullPath } = testCase.folder;
    if (testByFolder[fullPath]) {
      testByFolder[fullPath].push(testName);
    } else {
      testByFolder[fullPath] = [testName];
    }

    if (testByFolder[fullPath].filter((name) => name === testCase.name).length !== 1) {
      invalidTestNames.push(
        `(duplicate) ${testCase.name} (${testCase.key} at '${testCase.folder.name}' folder)`,
      );
    }

    if (newLineRe.test(testCase.name)) {
      invalidTestNames.push(
        `(with new line) ${testCase.name} (${testCase.key} at '${testCase.folder.name}' folder)`,
      );
    }
  } else {
    throw new Error(`Full path does not exist: ${testCase.key}`);
  }

  // Log for info
  if (validTestCase && validFolder) {
    console.log('(OK) Changes are valid');
  } else {
    invalidFiles.push(file);
  }
});

if (args.all) {
  // Save data
  console.log(
    writeFile(`${dataFolderPath}/test-by-folder.json`, JSON.stringify(testByFolder)),
  );
  console.log(
    invalidTestNames.length,
    writeFile(`${dataFolderPath}/invalid-test-names.json`, JSON.stringify(invalidTestNames)),
  );

  // Log empty folder which could be candidate for deletion
  Object.entries(testByFolder).forEach(([folder, values]) => {
    if (!values.length) {
      console.log(`Found empty folder: "${folder}"`);
    }
  });
}
