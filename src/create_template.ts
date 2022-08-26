// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/create.ts

import { dotEnvConfig } from './deps.ts';
import {
  dataFolderPath,
  projectKey,
  testCasesFolderFullPath,
  testCasesFolderRootPath,
} from './util/constant.ts';
import { readFile, writeFile } from './util/file.ts';
import { getFolderByPath, sanitizeForSlug } from './util/helper.ts';
import { testCaseToMarkdown } from './util/markdown.ts';
import { getDefaultCreateTestCase } from './util/test_case.ts';
import { Folder, Priority, Status } from './util/types.ts';
import { makeZephyrClient } from './util/zephyr.ts';

const { ZEPHYR_TOKEN } = await dotEnvConfig();

const folders: Folder[] = [];

if (ZEPHYR_TOKEN) {
  const zephyr = await makeZephyrClient();
  const foldersFromZephyr = await zephyr.getAllFolders(
    projectKey,
    'TEST_CASE',
    0,
    100,
  ) as Folder[];
  foldersFromZephyr.forEach((f) => folders.push(f));
} else {
  const foldersFromFile = readFile(`${dataFolderPath}/folders.json`) as Folder[];
  foldersFromFile.forEach((f) => folders.push(f));
}

const title = promptWithRetry('Title', 'Test title? \n=');
const { existingFolder, folderPath } = promptFolderPath(
  'Folder path',
  `\nWhich relative folder to save? \n(ex. "${testCasesFolderRootPath}/activity-and-insights" or "${testCasesFolderRootPath}" (default) if not provided) \n=`,
  testCasesFolderRootPath,
);

let newFolderName;
let createNewFolder = false;
if (folderPath === testCasesFolderRootPath) {
  createNewFolder = true;
  newFolderName = promptWithRetry(
    'Folder name',
    'Name of a root test folder to be created in Zephyr? \n=',
  );
} else {
  createNewFolder = confirm('Create subfolder in Zephyr?');
  if (createNewFolder) {
    newFolderName = promptWithRetry('Folder name', 'Folder name? \n=');
  }
}

const folder: Folder = { name: '' };

if (existingFolder) {
  folder.name = existingFolder.name;
  folder.id = existingFolder.id;
  folder.parentId = existingFolder.parentId;
  folder.fullNames = existingFolder.fullNames;
  folder.fullPath = existingFolder.fullPath;
} else {
  folder.parentId = null;
}

if (createNewFolder && newFolderName) {
  folder.name = newFolderName;

  if (folder.id) {
    folder.parentId = folder.id;
    delete folder.id;
  }

  if (folder.fullNames) {
    folder.fullNames.push(newFolderName);
  } else {
    folder.fullNames = [newFolderName];
  }

  folder.fullPath = folder.fullNames.map((name) => sanitizeForSlug(name)).join('/');
}

const priorities = readFile(`${dataFolderPath}/priorities.json`) as Priority[];
const priority = priorities.filter((p) => p.default)[0];

const statuses = readFile(`${dataFolderPath}/statuses.json`) as Status[];
const status = statuses.filter((s) => s.default)[0];

const testCase = getDefaultCreateTestCase(title, folder, priority, status);
const testCaseFullPath = `${testCasesFolderFullPath}/${folder.fullPath}/${testCase.key}`;

// Save test case to json and md files
console.log(writeFile(`${testCaseFullPath}.json`, JSON.stringify(testCase)));
console.log(
  writeFile(`${testCaseFullPath}.md`, testCaseToMarkdown(testCase, `${testCaseFullPath}.json`)),
);

function promptWithRetry(field: string, question: string, defaultInput?: string): string {
  const retryMax = 3;
  let retryCount = 0;

  let input = prompt(question);
  if (!input && defaultInput) {
    input = defaultInput;
  }

  while (!input) {
    if (retryCount > retryMax) {
      throw new Error('Reached maximum retry.');
    }
    retryCount++;

    // Log retry count
    console.log(`Retry ${retryCount}`);
    input = prompt(question);
  }

  // Log field input
  console.log(field, ':', input);

  return input;
}

function promptFolderPath(field: string, question: string, defaultInput?: string) {
  const retryMax = 3;
  let retryCount = 0;

  let input = promptWithRetry(field, question, defaultInput);
  let existingFolder = getFolderByPath(folders, input.replace(`${defaultInput}/`, ''));

  while (!existingFolder && input !== defaultInput) {
    if (retryCount > retryMax) {
      throw new Error('Reached maximum retry.');
    }
    retryCount++;

    // Log retry count
    console.log(`Folder not found. Try again: ${retryCount}`);
    input = promptWithRetry(field, question, defaultInput);
    existingFolder = getFolderByPath(folders, input.replace(`${defaultInput}/`, ''));
  }

  return { existingFolder, folderPath: input };
}
