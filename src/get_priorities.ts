// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/get_priorities.ts

import { dataFolderPath, projectKey } from './util/constant.ts';
import { writeFile } from './util/file.ts';
import { makeZephyrClient } from './util/zephyr.ts';

const zephyr = await makeZephyrClient();

const data = await zephyr.getAllPriorities(projectKey, 0, 100);

// Save priorities to file
console.log(
  data.length,
  writeFile(`${dataFolderPath}/priorities.json`, JSON.stringify(data)),
);
