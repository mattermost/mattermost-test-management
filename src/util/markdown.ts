import {
  findSingle,
  gfm,
  gfmHtml,
  grayMatter,
  micromark,
  rehypeParse,
  rehypeRemark,
  remarkGfm,
  remarkStringify,
  unified,
} from '../deps.ts';

import { separator, testCasesFolderFullPath, tmpDataFolderPath } from './constant.ts';
import { readFile } from './file.ts';
import { getFolderFullPath, newLineRe, sanitizeName } from './helper.ts';
import { KeyPathId, TestCase, TestStep, TestSteps } from './types.ts';

export function testCaseToMarkdown(
  testCase: TestCase,
  options: { keyPathIds: KeyPathId[]; fromTmp: boolean },
) {
  const header = `${separator}
# (Required) Ensure all values are filled up
name: ${renderString(testCase.name.replaceAll('"', "'"))}
status: ${testCase.statusName}
priority: ${testCase.priorityName}
folder: ${testCase.folderName}
authors: ${renderString(testCase.customFields.Authors)}
team_ownership: ${renderArray(testCase.customFields['Team Ownership'])}
priority_p1_to_p4: ${testCase.customFields['Priority P1 to P4']}

# (Optional)
location: ${testCase.customFields.Location}
component: ${testCase.componentName}
tags: ${renderArray(testCase.customFields.Tags)}
labels: ${renderArray(testCase.labels)}
tested_by_contributor: ${renderString(testCase.customFields['Tested By Contributor'])}

# (Optional) Test type and tools
cypress: ${testCase.customFields.Cypress}
detox: ${testCase.customFields.Detox}
mmctl: ${testCase.customFields.MMCTL}
playwright: ${testCase.customFields.Playwright}
rainforest: ${renderArray(testCase.customFields.Rainforest)}
manual_test_environments: ${renderArray(testCase.customFields['Manual Test Environments'])}

# Do not change
id: ${testCase.id || null}
key: ${testCase.key || null}
created_on: ${renderString(testCase.createdOn)}
last_updated: ${renderString(testCase.customFields['Last Updated'])}
case_hashed: ${testCase.caseHashed}
steps_hashed: ${testCase.stepsHashed}
${separator}

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## ${testCase.key}: ${sanitizeName(testCase.name)}
`;

  const objective = trim(testCase.objective)
    ? `
**Objective**

${htmlToMarkdown(testCase.objective)}`
    : '';

  const precondition = trim(testCase.precondition)
    ? `
**Precondition**

${htmlToMarkdown(testCase.precondition)}`
    : '';

  const steps = testCase.steps
    ? `
${separator}
${getSteps(testCase.steps, options).join(`\n${separator}\n`)}`
    : '';

  return header + objective + precondition + steps;
}

function getSteps(
  steps: TestSteps,
  options: { keyPathIds: KeyPathId[]; fromTmp: boolean },
  callingIndex?: string,
): string[] {
  if (!steps) {
    return [];
  }

  return steps.map((step, index) => {
    const withCallingIndex = callingIndex ? `${callingIndex}.` : '';
    const emStep = callingIndex ? '_' : '';

    if (!step.inline) {
      if (step.testCase?.testCaseKey) {
        // Get test steps of the called test case
        const calledTestCase = findSingle(
          options.keyPathIds,
          (it: KeyPathId) => it.key === step?.testCase?.testCaseKey,
        );

        // todo: read from markdown if not from tmp
        const calledTestCaseFilename = options.fromTmp
          ? `${tmpDataFolderPath}/${step.testCase.testCaseKey}.json`
          : `${testCasesFolderFullPath}/${calledTestCase?.path}/${step.testCase.testCaseKey}.json`;

        const callToTestCase: TestCase = readFile(calledTestCaseFilename);
        const callToTestCaseSteps = callToTestCase.steps;
        const stepsRef = callToTestCaseSteps?.length && callToTestCaseSteps.length > 1
          ? `Steps ${withCallingIndex}${index + 1}.1 to ${withCallingIndex}${
            index + 1
          }.${callToTestCaseSteps.length}`
          : `Step ${withCallingIndex}${index + 1}.1`;

        return callToTestCase.steps
          ? `
${emStep}**Step ${withCallingIndex}${
            index + 1
          } from ${callToTestCase.key}: ${callToTestCase.name}**${emStep}

<!-- (Auto-generated) Note: ${stepsRef} should not be updated here. Instead, modify directly to the referenced ${step.testCase.testCaseKey} test case. -->
${getSteps(callToTestCase.steps, options, `${withCallingIndex}${index + 1}`).join('')}`
          : '';
      }

      return '';
    }

    const inlineDescription = trim(step.inline.description);

    const description = `
${emStep}**Step ${withCallingIndex}${index + 1}**${emStep}

${htmlToMarkdown(inlineDescription)}`;

    const testData = trim(step.inline.testData)
      ? `
${emStep}**Test Data**${emStep}

${htmlToMarkdown(step.inline.testData)}`
      : '';

    const expectedResult = trim(step.inline.expectedResult)
      ? `
${emStep}**Expected**${emStep}

${htmlToMarkdown(step.inline.expectedResult)}`
      : '';

    return description + testData + expectedResult;
  });
}

function trim(text: string | null) {
  return text && text.trim();
}

export function htmlToMarkdown(inHtml: string | null) {
  if (!inHtml) return '';

  const outMd = unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkGfm)
    .use(remarkStringify, {
      bullet: '-',
      emphasis: '_',
      fences: true,
      listItemIndent: 'one',
    })
    .processSync(inHtml.replaceAll('&nbsp;', ' ').trim());

  return String(outMd);
}

export function markdownToHtml(inMd: string | null) {
  if (!inMd) return '';

  const outHtml = micromark(inMd.trim(), {
    allowDangerousHtml: true,
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()],
  });

  return String(outHtml).replaceAll(newLineRe, '');
}

export function getTestFieldsFromContent(
  doc: string,
): { objective: string | null; precondition: string | null; steps: TestSteps } {
  const objectiveHeader = '**Objective';
  const preconditionHeader = '**Precondition';
  const stepHeader = '**Step';
  const testDataHeader = '**Test Data';
  const expectedHeader = '**Expected';
  const reTestID = /(MM-T\d+)/;

  const sections: string[][] = [];
  let header = '';
  let content: string[] = [];

  const lines = doc.split('\n');
  lines.forEach((line, i) => {
    const newSection = [
      objectiveHeader,
      preconditionHeader,
      stepHeader,
      testDataHeader,
      expectedHeader,
    ].filter((s) => line.startsWith(s));
    if (newSection.length === 1) {
      if (header && content.length) {
        sections.push([header, markdownToHtml(content.join('\n'))]);
      }
      header = line;
      content = [];
    }

    if (header && header !== line && line !== separator) {
      content.push(line);
    }

    if (lines.length === i + 1) {
      sections.push([header, markdownToHtml(content.join('\n'))]);
    }
  });

  let objective = null;
  let precondition = null;
  const steps: TestSteps = [];

  let step: TestStep = newTestStep();
  for (let i = 0; i < sections.length; i++) {
    const [header, content] = sections[i];

    if (header.startsWith(objectiveHeader)) {
      objective = content;
    }

    if (header.startsWith(preconditionHeader)) {
      precondition = content;
    }

    if (header.startsWith(stepHeader)) {
      if (step.inline?.description || step.testCase?.testCaseKey) {
        steps.push(step);
        step = newTestStep();
      }

      const callToTestID = header.match(reTestID);
      if (callToTestID?.length) {
        step.inline = null;
        step.testCase = { 'testCaseKey': callToTestID[0] };
      } else if (step.inline) {
        step.inline.description = content;
      }
    }

    if (header.startsWith(testDataHeader) && step.inline) {
      step.inline.testData = content;
    }

    if (header.startsWith(expectedHeader) && step.inline) {
      step.inline.expectedResult = content;
    }

    if (sections.length === i + 1) {
      steps.push(step);
    }
  }

  return { objective, precondition, steps };
}

function newTestStep(): TestStep {
  return {
    inline: {
      description: '',
      testData: null,
      expectedResult: '',
    },
    testCase: null,
  };
}

function renderString(text?: string | null) {
  if (text === null || text === undefined) {
    // return the same as null
    return null;
  }

  // wrap in quotes to maintain empty string or escaped characters
  return `"${text}"`;
}

function renderArray(text: string[] | null) {
  if (text === null) {
    // return the same as null
    return null;
  }

  if (!text.length) {
    // return as string of open and close square brackets
    return `[]`;
  }

  // wrap in quotes to maintain empty string or escaped characters
  const ymlArr = text.map((t) => `- ${t}`).join('\n');
  return '\n' + ymlArr;
}

export function markdownToTestCase(file: string): TestCase {
  const { content, data } = grayMatter.read(file);
  const { objective, precondition, steps } = getTestFieldsFromContent(content);
  const testCase: TestCase = {
    id: data.id,
    key: data.key,
    name: data.name,
    createdOn: data.created_on,
    objective: objective,
    precondition: precondition,
    estimatedTime: null,
    labels: data.labels,
    componentName: data.component,
    priorityName: data.priority,
    statusName: data.status,
    folderName: data.folder,
    folderFullPath: getFolderFullPath(file),
    steps,
    customFields: {
      'Rainforest': data.rainforest,
      'Team Ownership': data.team_ownership,
      'Manual Test Environments': data.manual_test_environments,
      'Tags': data.tags,
      'Playwright': data.playwright,
      'Priority P1 to P4': data.priority_p1_to_p4,
      'Update notes': '',
      'Detox': data.detox,
      'Cypress': data.cypress,
      'MMCTL': data.mmctl,
      'Location': data.location,
      'Authors': data.authors,
      'Tested By Contributor': data.tested_by_contributor,
      'Last Updated': data.last_updated,
    },
    caseHashed: data.case_hashed,
    stepsHashed: data.steps_hashed,
  };

  const otherFields = readFile(file.replace('.md', '.json'), true) as { updateNotes: string };
  if (otherFields?.updateNotes) {
    testCase.customFields['Update notes'] = otherFields.updateNotes;
  }

  return testCase;
}
