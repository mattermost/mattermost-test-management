// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/get_components.ts

import { dataFolderPath, projectKey } from './util/constant.ts';
import { writeFile } from './util/file.ts';
import { makeJiraClient } from './util/jira.ts';

const jira = makeJiraClient();

const data = await jira.getComponents(projectKey, 100);

// Save components to file
console.log(
  data.length,
  writeFile(`${dataFolderPath}/components.json`, JSON.stringify(data)),
);
