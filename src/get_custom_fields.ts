// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/get_custom_fields.ts

import { distinct } from '@std/collections';

import { projectKey } from './util/constant.ts';
import { saveTestCaseCustomFieldsToFile } from './util/test_case.ts';
import { TestCaseCustomFields } from './util/types.ts';
import { makeZephyrClient } from './util/zephyr.ts';

const zephyr = makeZephyrClient();

const testCases = await zephyr.getAllTestCases(projectKey, 0, 1000);

// deno-lint-ignore no-explicit-any
const customFields = testCases.reduce<Record<string, any>>((acc, testCase) => {
  Object.entries(testCase.customFields).forEach(([k, v]) => {
    const isArray = Array.isArray(v);
    if (acc[k]) {
      if (isArray) {
        acc[k].push(...v);
      } else {
        acc[k].push(v);
      }
    } else {
      if (isArray) {
        acc[k] = v;
      } else {
        acc[k] = [v];
      }
    }

    acc[k] = distinct(acc[k]);
  });

  return acc;
}, {});

// Save custom_fields to file
saveTestCaseCustomFieldsToFile(customFields as TestCaseCustomFields);
