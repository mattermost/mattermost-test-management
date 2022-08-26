// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/to_markdown.ts

import { dataFolderPath, testCasesFolderFullPath } from './util/constant.ts';
import { readFile, writeFile } from './util/file.ts';
import { getFiles } from './util/helper.ts';
import { testCaseToMarkdown } from './util/markdown.ts';
import { TestCase } from './util/types.ts';

const files = getFiles(testCasesFolderFullPath);

// Save files to file
console.log(
  files.length,
  writeFile(`${dataFolderPath}/files.json`, JSON.stringify(files)),
);

files.forEach((file) => {
  const testCase = readFile(file) as TestCase;

  // Save each markdown to file
  console.log(
    writeFile(file.replace('.json', '.md'), testCaseToMarkdown(testCase, file)),
  );
});
