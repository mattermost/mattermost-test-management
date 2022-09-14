import { findSingle, green, red, sortBy, yellow } from '../deps.ts';

import { dataFolderPath, testCasesFolderFullPath } from './constant.ts';
import { readFile, writeFile } from './file.ts';
import {
  getFiles,
  getFolderFullPath,
  getHashes,
  newLineRe,
  sanitizeForSlug,
  sanitizeName,
} from './helper.ts';
import { markdownToTestCase } from './markdown.ts';
import { validTestCase } from './test_case.ts';
import { Component, Folder, Priority, Status, TestCase, TestSteps } from './types.ts';

export function validate(all = false) {
  // Log info
  console.log(all ? 'Validating all markdown files...' : 'Validating changes...');

  const markdownFiles = getFiles(testCasesFolderFullPath, 'md');

  const filesToVerify: Record<string, TestCase> = {};
  markdownFiles.forEach((markdownFile) => {
    const testCase = markdownToTestCase(markdownFile);
    const [caseHashed, stepsHashed] = getHashes(testCase);

    if (all) {
      filesToVerify[markdownFile] = testCase;
    } else {
      if (testCase.caseHashed !== caseHashed || testCase.stepsHashed !== stepsHashed) {
        filesToVerify[markdownFile] = testCase;
      }
    }
  });

  if (!Object.entries(filesToVerify).length) {
    // Log info
    console.log(yellow('No file change found.'));
    Deno.exit(0);
  }

  const { testCaseToCreate, testCaseToModify, testStepToModify } = getTestChanged(markdownFiles);

  if (Object.entries(testCaseToCreate).length) {
    // Log info
    console.log('\nNew test case to be created:');
    Object.entries(testCaseToCreate).forEach(([file, tc], i) =>
      console.log(`${i + 1}. "${file}": "${tc.name}"`)
    );
  }

  if (Object.entries(testCaseToModify).length) {
    // Log info
    console.log('\nExisting test case to be modified:');
    Object.entries(testCaseToModify).forEach(([file, tc], i) =>
      console.log(`${i + 1}.  "${file}": "${tc.name}"`)
    );
  }

  if (Object.entries(testStepToModify).length) {
    // Log info
    console.log('\nTest step/s for existing test case to be modified:');
    Object.entries(testStepToModify).forEach(([testCaseKey, testSteps], i) => {
      console.log(`${i + 1}.  "${testCaseKey}": ${testSteps?.length} step/s`);
    });
  }

  const folders = readFile(`${dataFolderPath}/folders.json`) as Folder[];
  const newFolderByFilePath: Record<string, Folder> = {};
  Object.entries(testCaseToCreate).forEach(([filePath, tc]) => {
    const parts = filePath.replace(`${testCasesFolderFullPath}/`, '').split('/');
    parts.pop(); // pop filename
    const fileFolderPath = parts.join('/');
    const folderFound = findSingle(folders, (it) => it.fullPath === fileFolderPath);
    if (folderFound) {
      if (folderFound.name !== tc.folderName) {
        // Log info
        console.log(
          red('-> (error)'),
          red(
            `Folder name mismatched: actual = "${folderFound.name}", expected = "${tc.folderName}"`,
          ),
        );
      }
    } else {
      const parentParts = fileFolderPath.split('/');
      const folderSlug = parentParts.pop(); // get folder slug and move one folder up
      const fileParentFolderPath = parentParts.join('/');
      const parentFolderFound = findSingle(folders, (it) => it.fullPath === fileParentFolderPath);

      if (tc.folderName && folderSlug !== sanitizeForSlug(tc.folderName)) {
        // Log info
        console.log(
          red('-> (error)'),
          red(
            `Folder name "${tc.folderName}" mismatched with actual folder file path: actual = "${fileFolderPath}", expected = "${fileParentFolderPath}/${
              sanitizeForSlug(tc.folderName)
            }"`,
          ),
        );
      }

      const newFolder: Folder = {
        name: tc?.folderName,
        fullPath: fileFolderPath,
        parentId: parentFolderFound?.id,
      };

      newFolderByFilePath[fileFolderPath] = newFolder;
    }
  });

  if (Object.entries(newFolderByFilePath).length) {
    // Log info
    console.log('\nNew folders to be created:');
    Object.entries(newFolderByFilePath).forEach(([fullPath, folder], i) => {
      console.log(`${i + 1}.  "${fullPath}": "${folder.name}"`);
    });
  }

  // Get stale records from file
  const components = readFile(`${dataFolderPath}/components.json`) as Component[];
  const priorities = readFile(`${dataFolderPath}/priorities.json`) as Priority[];
  const statuses = readFile(`${dataFolderPath}/statuses.json`) as Status[];

  type InvalidFile = { file: string; error: string[] };

  const invalidFiles: InvalidFile[] = [];
  const invalidTestNames: string[] = [];
  const testByFolder: Record<string, string[]> = {};

  Object.entries(filesToVerify).forEach(([file, testCase]) => {
    testCase.folderFullPath = getFolderFullPath(file);
    const testCaseError = validTestCase(testCase, {
      components,
      folders: folders.concat(Object.values(newFolderByFilePath)),
      priorities,
      statuses,
    });
    const testName = sanitizeName(testCase.name);

    if (testCase?.folderFullPath) {
      const { folderFullPath, folderName } = testCase;
      if (!folderFullPath) {
        if (testByFolder['root']) {
          testByFolder['root'].push(testName);
        } else {
          testByFolder['root'] = [testName];
        }
      }

      if (testByFolder[folderFullPath]) {
        testByFolder[folderFullPath].push(testName);
      } else {
        testByFolder[folderFullPath] = [testName];
      }

      if (testByFolder[folderFullPath].filter((name) => name === testCase.name).length !== 1) {
        invalidTestNames.push(
          `(duplicate) ${testCase.name} (${testCase.key} at '${folderName}' folder)`,
        );
      }

      if (newLineRe.test(testCase.name)) {
        invalidTestNames.push(
          `(with new line) ${testCase.name} (${testCase.key} at '${folderName}' folder)`,
        );
      }
    } else {
      console.log(`Full path does not exist: ${testCase.key}`);
    }

    if (testCaseError.length) {
      invalidFiles.push({ file, error: testCaseError });
    }
  });

  if (all) {
    const sortedTestByFolder = sortBy(
      Object.entries(testByFolder).map(([folder, tests]) => {
        return { folder, tests };
      }),
      (it) => it.folder,
    );

    // Save data
    console.log(
      writeFile(`${dataFolderPath}/test-by-folder.json`, JSON.stringify(sortedTestByFolder)),
    );
    console.log(
      invalidTestNames.length,
      writeFile(
        `${dataFolderPath}/invalid-test-names.json`,
        JSON.stringify(sortBy(invalidTestNames, (it) => it)),
      ),
    );

    // Log empty folder which could be candidate for deletion
    Object.entries(testByFolder).forEach(([folder, values]) => {
      if (!values.length) {
        console.log(`Found empty folder: "${folder}"`);
      }
    });
  }

  // Log info
  if (!invalidFiles.length) {
    console.log(green('-> All changes are valid.'));
  } else {
    invalidFiles.forEach(({ file, error }) => {
      console.log(`\n${file}`);
      error.forEach((err) => console.log(red('-> (error)'), red(err)));
    });
    throw new Error('With invalid test case!');
  }

  return {
    foldersToCreate: sortBy(Object.values(newFolderByFilePath), (it) => it.fullPath),
    testCaseToCreate,
    testCaseToModify,
    testStepToModify,
  };
}

function getTestChanged(markdownFiles: string[]) {
  const testCaseToCreate: Record<string, TestCase> = {};
  const testCaseToModify: Record<string, TestCase> = {};
  const testStepToModify: Record<string, TestSteps | undefined> = {};
  markdownFiles.forEach((markdownFile) => {
    const testCase = markdownToTestCase(markdownFile);

    if (testCase.id) {
      const [caseHashed, stepsHashed] = getHashes(testCase);

      if (testCase.caseHashed !== caseHashed) {
        testCaseToModify[markdownFile] = testCase;
      }

      if (testCase.stepsHashed !== stepsHashed) {
        testStepToModify[testCase.key] = testCase.steps;
      }
    } else {
      testCaseToCreate[markdownFile] = testCase;
    }
  });

  return {
    testCaseToCreate,
    testCaseToModify,
    testStepToModify,
  };
}
