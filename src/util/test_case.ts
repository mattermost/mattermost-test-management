import { findSingle } from '@std/collections';
import { format as formatDate } from '@std/datetime';
import { red } from '@std/fmt/colors';

import { changeRequired, dataFolderPath, datetimeFormat } from './constant.ts';
import { writeFile } from './file.ts';
import { htmlToMarkdown, markdownToHtml } from './markdown.ts';
import { newLineRe } from './helper.ts';
import {
  Component,
  Folder,
  Priority,
  Status,
  TestCase,
  TestCaseCustomFields,
  TestStep,
  TestSteps,
} from './types.ts';

export function getDefaultCreateTestCase(
  name: string,
  priorityName: string,
  statusName: string,
  folderName?: string,
): TestCase {
  return {
    id: null,
    key: `MM-TMP${Date.now()}`,
    name,
    createdOn: null,
    objective: null,
    precondition: null,
    estimatedTime: null,
    componentName: null,
    priorityName,
    statusName,
    folderName,
    labels: [],
    customFields: defaultCreateCustomFields(),
    steps: defaultCreateTestSteps(),
    caseHashed: null,
    stepsHashed: null,
  };
}

function defaultCreateTestSteps() {
  return [
    {
      inline: {
        description: changeRequired,
        testData: null,
        expectedResult: changeRequired,
      },
      testCase: null,
    },
  ];
}

function defaultCreateCustomFields(): TestCaseCustomFields {
  const values = customFieldsValues();

  return {
    'Rainforest': values['Rainforest'].default,
    'Team Ownership': values['Team Ownership'].default,
    'Manual Test Environments': values['Manual Test Environments'].default,
    'Tags': values['Tags'].default,
    'Playwright': values['Playwright'].default,
    'Priority P1 to P4': values['Priority P1 to P4'].default,
    'Update notes': values['Update notes'].default,
    'Detox': values['Detox'].default,
    'Cypress': values['Cypress'].default,
    'MMCTL': values['MMCTL'].default,
    'Location': values['Location'].default,
    'Authors': values['Authors'].default,
    'Last Updated': formatDate(new Date(), datetimeFormat),
  };
}

export function validateCustomFields(fieldsToValidate: TestCaseCustomFields) {
  const errorMessage: string[] = [];

  const fieldsBase = customFieldsValues();

  // Should have same length
  if (Object.entries(fieldsToValidate).length !== Object.entries(fieldsBase).length) {
    errorMessage.push(
      `"customFields" length: expect "${Object.entries(fieldsBase).length}", actual "${
        Object.entries(fieldsToValidate).length
      }"`,
    );
  }

  // Log whenever not the
  Object.keys(fieldsToValidate).forEach((fieldKey) => {
    if (!Object.keys(fieldsBase).includes(fieldKey)) {
      errorMessage.push(
        `"customFields" key unexpected: expect "${fieldKey}"`,
      );
    }
  });

  Object.keys(fieldsBase).forEach((baseKey) => {
    if (!Object.keys(fieldsToValidate).includes(baseKey)) {
      errorMessage.push(
        `"customFields" key missing: expect "${baseKey}"`,
      );
    }
  });

  Object.entries(fieldsBase).forEach(([baseKey, baseValue]) => {
    // Should have match all field keys
    // deno-lint-ignore no-prototype-builtins
    if (!fieldsToValidate.hasOwnProperty(baseKey.toString())) {
      errorMessage.push(
        `"customFields" key missing: expect "${baseKey}"`,
      );
    }

    const [_, fieldValue] = Object.entries(fieldsToValidate).filter(([key]) => key === baseKey)[0];

    // Should match boolean type
    if (
      typeof baseValue.default === 'boolean' && typeof baseValue.default !== typeof fieldValue
    ) {
      errorMessage.push(
        `"customFields" type mismatch: expect "${typeof baseValue.default}" for "${baseKey}"`,
      );
    }

    // Should match array values if with options
    if (
      Array.isArray(baseValue.default) &&
      Array.isArray(baseValue.options) &&
      baseValue.options.length
    ) {
      if (Array.isArray(fieldValue)) {
        fieldValue.map((value) => {
          if (baseValue.options && !baseValue?.options.includes(value)) {
            errorMessage.push(
              `"customFields.${baseKey}" with unexpected value of ${
                JSON.stringify(value)
              }. Choose one or more of the following, comma-separated: ${
                baseValue.options.map((b) => String(b)).join(' | ')
              }`,
            );
          }
        });
      } else {
        errorMessage.push(
          `"customFields" type mismatch: expect array values for "${baseKey}"`,
        );
      }
    }

    // Should match individual string or null if with options
    if (fieldValue === null || typeof fieldValue === 'string') {
      if (baseValue.options.length && !baseValue?.options.includes(fieldValue)) {
        errorMessage.push(
          `"customFields.${baseKey}" unexpected value of "${fieldValue}". Choose one of the following: ${
            baseValue.options.map((b) => `"${String(b)}"`).join(' | ')
          }`,
        );
      }
    }
  });

  return errorMessage;
}

export function isValidTestSteps(testSteps: TestSteps) {
  const errorMessage: string[] = [];

  testSteps.forEach((testStep) => {
    if (testStep.testCase && !testStep.testCase.testCaseKey) {
      errorMessage.push('Invalid "testCaseKey"');
    }
  });

  // Log for info
  errorMessage.forEach((message) => console.log(red('-> (error)'), red(message)));

  return errorMessage.length === 0;
}

function customFieldsValues() {
  const teamOptions = {
    default: [changeRequired],
    options: [
      'ABC',
      'Boards',
      'Calls',
      'Channels',
      'Core Features',
      'Deployment Eng',
      'Growth',
      'Core Features',
      'ICU',
      'Information Control',
      'Integration Frameworks',
      'MS Teams',
      'Playbooks',
      'QA Platform',
      'Self-Serve',
      'Server Platform',
      'Suite Users',
      'Web Platform',
      'Workflows',
      'XYZ',
    ],
  };

  const toolOptions = [
    null,
    'N/A',
    'in Production',
    'Evaluating',
    'Ticket Open',
    'To Do',
    'Update',
  ];

  return {
    'Rainforest': {
      default: [],
      options: [
        ...toolOptions,
        'Webapp',
        'Mobile v1',
        'Mobile V2 Android',
        'Mobile V2 iOS',
        'Cloud',
        'in Production — Desktop',
        'Temporarily Disabled',
        'Draft',
      ],
    },
    'Team Ownership': teamOptions,
    'Manual Test Environments': {
      default: [],
      options: [
        'Automated - No manual tests needed',
        'Webapp',
        'Mobile',
        'Desktop',
        'Cloud',
        'RN - iOS',
        'RN - Android',
        'Desktop - Linux',
        'Desktop - macOS',
        'Desktop - Win',
        'WebApp and Desktop',
        'CLI',
        'Portal',
      ],
    },
    'Tags': { default: [], options: ['Cloud N/A', 'Smoke test', 'Never tested'] },
    'Priority P1 to P4': {
      default: 'P2 - Core Functions (Do core functions work?)',
      options: [
        'P1 - Smoke Tests (App testable?)',
        'P2 - Core Functions (Do core functions work?)',
        'P3 - Deep Functions (Do extensive scenarios work?)',
        'P4 - Low-Impact (Edge or unsuitable to repeat?)',
      ],
    },
    'Update notes': { default: '', options: [] },
    'Cypress': { default: null, options: toolOptions },
    'Detox': { default: null, options: toolOptions },
    'Playwright': { default: null, options: toolOptions },
    'MMCTL': { default: null, options: toolOptions },
    'Location': { default: null, options: [] },
    'Authors': { default: '@' + changeRequired, options: [] },
    'Tested By Contributor': { default: null, options: [] },
    'Last Updated': { default: '', options: [] },
  };
}

type GenericVF = {
  name?: string;
};

export function validTestCase(
  testCase: TestCase,
  records: {
    components: Component[];
    folders: Folder[];
    priorities: Priority[];
    statuses: Status[];
  },
) {
  const errorMessage: string[] = [];
  if (!testCase.name) {
    errorMessage.push(`"name" field required: ${testCase?.name}`);
  }

  if (newLineRe.test(testCase.name)) {
    errorMessage.push(`"name" should not have "new line": ${testCase.name}`);
  }

  const validCustomFields = validateCustomFields(testCase.customFields);
  const validComponent = testCase.componentName === null ? [] : isValidField<Component>(
    'components.json',
    records.components,
    testCase.componentName,
  );
  const validPriority = isValidField<Priority>(
    'priorities.json',
    records.priorities,
    testCase.priorityName,
  );
  const validStatus = isValidField<Status>('statuses.json', records.statuses, testCase.statusName);
  const validFolder = isValidFolder('folders.json', records.folders, testCase.folderFullPath);

  return errorMessage.concat(validCustomFields).concat(validPriority).concat(validStatus).concat(
    validFolder,
  ).concat(validComponent);
}

function isValidField<VF extends GenericVF>(
  filename: string,
  baseValues: VF[],
  name?: string | null,
) {
  if (!name) {
    return [];
  }

  const errorMessage: string[] = [];
  const found = findSingle(baseValues, (it) => it.name === name);

  if (!found) {
    errorMessage.push(
      `"${name}" not found from "${filename}". Choose one of the following: ${
        baseValues.map((b) => `"${String(b.name)}"`).join(' | ')
      }`,
    );
  }

  return errorMessage;
}

function isValidFolder(
  filename: string,
  baseValues: Folder[],
  fullPath?: string | null,
) {
  if (!fullPath) {
    return [];
  }

  const errorMessage: string[] = [];

  const found = findSingle(baseValues, (it) => it.fullPath === fullPath);

  if (!found) {
    errorMessage.push(
      `"${fullPath}" not found from "${filename}"`,
    );
  }

  return errorMessage;
}

export function saveTestCaseCustomFieldsToFile(customFields: TestCaseCustomFields) {
  console.log(
    writeFile(
      `${dataFolderPath}/test-case-custom-field-options.json`,
      JSON.stringify({
        'Priority P1 to P4': customFields['Priority P1 to P4'],
        'Team Ownership': customFields['Team Ownership'],
        'Tags': customFields['Tags'],
        'Manual Test Environments': customFields['Manual Test Environments'],
        'Cypress': customFields['Cypress'],
        'Detox': customFields['Detox'],
        'Playwright': customFields['Playwright'],
        'Rainforest': customFields['Rainforest'],
        'MMCTL': customFields['MMCTL'],
      }),
    ),
  );
}

export function sanitizeTestCase(testCase: TestCase) {
  delete testCase.project;
  delete testCase.owner;
  delete testCase.testScript;
  delete testCase.links;

  return testCase;
}

export function sanitizeTestSteps(steps?: TestStep[]) {
  return steps?.map((step) => {
    if (step.testCase?.self) {
      delete step.testCase.self;
    }

    return step;
  }).map((step) => {
    if (!step.inline) {
      return step;
    }

    return {
      inline: {
        ...step.inline,
        description: cycleHtmlMarkdownConversion(step.inline.description),
        testData: cycleHtmlMarkdownConversion(step.inline.testData),
        expectedResult: cycleHtmlMarkdownConversion(step.inline.expectedResult),
      },
      testCase: step.testCase,
    };
  });
}

function cycleHtmlMarkdownConversion(doc: string | null) {
  return doc ? markdownToHtml(htmlToMarkdown(doc)) : doc;
}

export function compareTestCase(a: TestCase, b: TestCase) {
  // Logs for info only
  if (a.id !== b.id) {
    throw new Error(`${a.id} !== ${b.id}`);
  }
  if (a.key !== b.key) {
    throw new Error(`${a.key} !== ${b.key}`);
  }
  if (a.name !== b.name) {
    throw new Error(`${a.name} !== ${b.name}`);
  }
  if (a.objective !== b.objective) {
    console.log(red(`${a.key} Objective`));
    console.log(`"${a.objective}"`, a.objective?.length);
    console.log(`"${b.objective}"`, b.objective?.length);
  }
  if (a.precondition !== b.precondition) {
    console.log(red(`${a.key} Precondition`));
    console.log(`"${a.precondition}"`, a.precondition?.length);
    console.log(`"${b.precondition}"`, b.precondition?.length);
  }
  if (a.estimatedTime !== b.estimatedTime) {
    throw new Error(`${a.estimatedTime} !== ${b.estimatedTime}`);
  }
  if (a.labels?.length !== b.labels?.length) {
    throw new Error(`${a.labels} !== ${b.labels}`);
  }
  if (a.componentName !== b.componentName) {
    throw new Error(`${a.componentName} !== ${b.componentName}`);
  }
  if (a.priorityName !== b.priorityName) {
    throw new Error(`${a.priorityName} !== ${b.priorityName}`);
  }
  if (a.statusName !== b.statusName) {
    throw new Error(`${a.statusName} !== ${b.statusName}`);
  }
  if (a.folderName !== b.folderName) {
    throw new Error(`${a.folderName} !== ${b.folderName}`);
  }
  if (a.folderFullPath !== b.folderFullPath) {
    throw new Error(`${a.folderFullPath} !== ${b.folderFullPath}`);
  }
  if (a.caseHashed !== b.caseHashed) {
    throw new Error(`${a.caseHashed} !== ${b.caseHashed}`);
  }
  if (a.stepsHashed !== b.stepsHashed) {
    throw new Error(`${a.stepsHashed} !== ${b.stepsHashed}`);
  }

  const aSteps = a.steps;
  const bSteps = b.steps;

  if (aSteps && bSteps && aSteps.length === bSteps.length) {
    for (let i = 0; i < aSteps.length; i++) {
      const aStep = aSteps[i];
      const bStep = bSteps[i];

      if (aStep.inline === null && aStep.inline !== bStep.inline) {
        throw new Error(`${aStep.inline} !== ${bStep.inline}`);
      }
      if (aStep.inline?.description !== bStep.inline?.description) {
        console.log(red(`${a.key} Description`));
        console.log(`"${aStep.inline?.description}"`, aStep.inline?.description?.length);
        console.log(`"${bStep.inline?.description}"`, bStep.inline?.description?.length);
      }
      if (aStep.inline?.testData !== bStep.inline?.testData) {
        console.log(red(`${a.key} Test Data`));
        console.log(`"${aStep.inline?.testData}"`);
        console.log(`"${bStep.inline?.testData}"`);
      }
      if (aStep.inline?.expectedResult !== bStep.inline?.expectedResult) {
        console.log(red(`${a.key} Expected`));
        console.log(`"${aStep.inline?.expectedResult}"`);
        console.log(`"${bStep.inline?.expectedResult}"`);
      }
    }
  }
}
