// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/get_folders.ts

import { findSingle } from './deps.ts';
import { dataFolderPath, projectKey } from './util/constant.ts';
import { writeFile } from './util/file.ts';
import { Folder } from './util/types.ts';
import { makeZephyrClient } from './util/zephyr.ts';

const zephyr = makeZephyrClient();

const folders = await zephyr.getAllFolders(projectKey, 'TEST_CASE', 0, 100) as Folder[];

folders.forEach((f) => {
  const folder = findSingle(folders, (it) => it.fullPath === f.fullPath);
  if (!folder) {
    // Log info
    console.log(`Found duplicate subfolders: "${f.name}" at "${f.fullPath}".`);
  }
});

// Save folders to file
console.log(
  folders.length,
  writeFile(`${dataFolderPath}/folders.json`, JSON.stringify(folders)),
);

const invalidFolderNames: string[] = [];

const folderByParentFolder = folders.reduce<Record<string, string[]>>((acc, folder) => {
  if (!folder.name) {
    return acc;
  }

  const parts = folder.fullPath?.split('/');
  const parent = parts?.length === 1 ? 'root' : parts?.slice(0, parts.length - 1).join('/');

  if (!parent) {
    throw new Error(`No parent folder found!`);
  }

  if (acc[parent]) {
    acc[parent].push(folder.name);
  } else {
    acc[parent] = [folder.name];
  }

  if (acc[parent].filter((name) => name === folder.name).length !== 1) {
    invalidFolderNames.push(
      `(duplicate) '${folder.name}' at '${parent}' parent folder`,
    );
  }

  return acc;
}, { root: [] });

if (invalidFolderNames.length) {
  console.log('With invalid folder names:');
  invalidFolderNames.forEach((invalidName) => console.log(`  - ${invalidName}`));
}

// Save data
console.log(
  writeFile(`${dataFolderPath}/folder-by-parent.json`, JSON.stringify(folderByParentFolder)),
);
console.log(
  invalidFolderNames.length,
  writeFile(`${dataFolderPath}/invalid-folder-names.json`, JSON.stringify(invalidFolderNames)),
);
