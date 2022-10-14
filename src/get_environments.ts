// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/get_environments.ts

import { dataFolderPath, projectKey } from './util/constant.ts';
import { writeFile } from './util/file.ts';
import { makeZephyrClient } from './util/zephyr.ts';

const zephyr = makeZephyrClient();

const data = await zephyr.getAllEnvironments(projectKey, 0, 100);

// Save environments to file
console.log(
  data.length,
  writeFile(`${dataFolderPath}/environments.json`, JSON.stringify(data)),
);
