import { readFile } from './file.ts';
import { sanitizeName } from './helper.ts';
import { TestCase, TestSteps } from './types.ts';

export function testCaseToMarkdown(testCase: TestCase, file: string) {
  const header = `---
key: ${testCase.key}
title: ${sanitizeName(testCase.name)}
---

## ${testCase.key}: ${sanitizeName(testCase.name)}
`;

  const objective = testCase.objective
    ? `
**Objective**

> <article>${testCase.objective}</article>
`
    : '';

  const precondition = testCase.precondition
    ? `
**Precondition**

> <article>${testCase.precondition}</article>
`
    : '';

  const details = `
### Details
| Name | Value |
| :--- | :---  |
${
    getDetails({
      Priority: testCase.priority?.name,
      Status: testCase.status?.name,
      Folder: testCase.folder?.fullNames?.join(' / '),
      Component: testCase.component?.name,
      Labels: testCase.labels?.join(','),
      Created: testCase.createdOn,
    }).join('\n')
  }
`;

  const steps = `
### Steps

<hr/>

${testCase.steps ? getSteps(testCase.steps, file).join('\n') : ''}
`;

  const moreInfoDetails = getDetails(testCase.customFields);
  const moreInfo = moreInfoDetails.length
    ? `
### More Info
| Name | Value |
| :--- | :---  |
${moreInfoDetails.join('\n')}
`
    : '';

  return header + objective + precondition + details + steps + moreInfo;
}

// deno-lint-ignore no-explicit-any
function getDetails(details: Record<string, any>) {
  if (!details) {
    return [];
  }

  return Object.entries(details).filter(([_, value]) => {
    if (Array.isArray(value)) {
      return value.length !== 0;
    }

    if (typeof value === 'string') {
      return value.trim().length;
    }

    return value !== null && value !== undefined;
  }).map(([key, value]) => {
    return `| ${key} | ${value} |`;
  });
}

function getSteps(steps: TestSteps, file: string, callingIndex?: number): string[] {
  if (!steps) {
    return [];
  }

  return steps.map(({ inline, testCase }, index) => {
    if (!inline) {
      if (testCase?.testCaseKey && file) {
        // Get test steps of the called test case
        const parts = file.split('/');
        parts.splice(parts.length - 1, 1, `${testCase.testCaseKey}.json`);
        const callToTestCaseFile = parts.join('/');
        const callToTestCase: TestCase = readFile(callToTestCaseFile);
        return callToTestCase.steps ? getSteps(callToTestCase.steps, '', index + 1).join('') : '';
      }

      return '';
    }

    const withCallingIndex = callingIndex ? `${callingIndex}.` : '';

    const description = `
**Step ${withCallingIndex}${index + 1}**

> <article>${inline.description}</article>
`;

    const testData = inline.testData
      ? `
**Test Data**

> <article>${inline.testData}</article>
`
      : '';

    const expectedResult = inline.expectedResult
      ? `
**Expected**

> <article>${inline.expectedResult}</article>
`
      : '';

    const stepInfoDetails = getDetails(inline.customFields);
    const stepInfo = stepInfoDetails.length
      ? `
**Step Info**
| Name | Value |
| :--- | :---  |
${stepInfoDetails.join('\n')}
`
      : '';

    const hr = `
<hr/>
`;

    return description + testData + expectedResult + stepInfo + hr;
  });
}
