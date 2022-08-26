// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/get_statuses.ts

import { dataFolderPath, projectKey } from './util/constant.ts';
import { writeFile } from './util/file.ts';
import { makeZephyrClient } from './util/zephyr.ts';

const zephyr = await makeZephyrClient();

const data = await zephyr.getAllStatuses(projectKey, 'TEST_CASE', 0, 100);

// Save statuses to file
console.log(
  data.length,
  writeFile(`${dataFolderPath}/statuses.json`, JSON.stringify(data)),
);
