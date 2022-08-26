// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/watch.ts

import { dataFolderPath } from './util/constant.ts';
import { readFile, writeFile } from './util/file.ts';
import { getHex, isFolderPathValid } from './util/helper.ts';
import { testCaseToMarkdown } from './util/markdown.ts';
import { isValidTestCase } from './util/test_case.ts';
import { Component, Folder, Priority, Status, TestCase } from './util/types.ts';

const watched: Record<string, string> = {};
const watcher = Deno.watchFs('.');

// Log to console
console.log('Watching file changes ...');

// Get stale records from file
const components = readFile(`${dataFolderPath}/components.json`) as Component[];
const priorities = readFile(`${dataFolderPath}/priorities.json`) as Priority[];
const statuses = readFile(`${dataFolderPath}/statuses.json`) as Status[];
const folders = readFile(`${dataFolderPath}/folders.json`) as Folder[];

for await (const event of watcher) {
  event.paths.forEach((file) => {
    const relativeFile = file.replace(`${Deno.cwd()}/`, '') as string;
    if (/data\/test-cases\/.*.json$/.test(relativeFile)) {
      const testCase = readFile(relativeFile) as TestCase;

      const hashed = getHex(JSON.stringify(testCase));

      if (watched[relativeFile] !== hashed) {
        // Log file to console
        console.log(relativeFile);

        watched[relativeFile] = hashed;

        const validFolder = isFolderPathValid(relativeFile, testCase.folder.fullPath);
        const validTestCase = isValidTestCase(testCase, {
          components,
          folders,
          priorities,
          statuses,
        });

        // Log for info
        if (validTestCase && validFolder) {
          console.log('(OK) Changes are valid');
        }

        // Save markdown to file
        writeFile(
          relativeFile.replace('.json', '.md'),
          testCaseToMarkdown(testCase, relativeFile),
        ),
          // Log to console
          console.log('\nWatching file changes ...');
      }
    }
  });
}
