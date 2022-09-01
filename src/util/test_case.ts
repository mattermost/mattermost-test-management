import { formatDate } from '../deps.ts';
import { dataFolderPath, datetimeFormat, testCasesNoneFolder } from './constant.ts';
import { writeFile } from './file.ts';
// import { newLineRe } from './helper.ts';
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
  folder: Folder,
  priority: Priority,
  status: Status,
): TestCase {
  return {
    key: `MM-TMP${Date.now()}`,
    name,
    createdOn: null,
    objective: null,
    precondition: null,
    estimatedTime: null,
    component: null,
    priority: {
      id: priority.id,
      name: priority.name,
    },
    status: {
      id: status.id,
      name: status.name,
    },
    folder: {
      id: folder.id,
      name: folder.name,
      parentId: folder.parentId,
      fullPath: folder.fullPath,
      fullNames: folder.fullNames,
    },
    labels: [],
    customFields: defaultCreateCustomFields(),
    steps: defaultCreateTestSteps(),
  };
}

function defaultCreateTestSteps() {
  return [
    {
      inline: {
        description: '[change_me_required]',
        testData: null,
        expectedResult: '[change_me_required]',
        customFields: {
          'Fix Versions': [],
          'Related ticket(s)': '',
          'Important notes about this step': '',
        },
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
              `"customFields" unexpected value of "${value}" for "${baseKey}". Choose one or more of the following, comma-separated: ${
                baseValue.options.join(' | ')
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
          `"customFields" unexpected value of "${fieldValue}" for "${baseKey}". Choose one of the following: ${
            baseValue.options.join(' | ')
          }`,
        );
      }
    }
  });

  // Log for info
  errorMessage.forEach((message) => console.log('  !(error)', message));

  return errorMessage.length === 0;
}

export function isValidTestSteps(testSteps: TestSteps) {
  const errorMessage: string[] = [];

  testSteps.forEach((testStep) => {
    if (testStep.testCase && !testStep.testCase.testCaseKey) {
      errorMessage.push('Invalid "testCaseKey"');
    }
  });

  // Log for info
  errorMessage.forEach((message) => console.log('  !(error)', message));

  return errorMessage.length === 0;
}

function customFieldsValues() {
  const teamOptions = {
    default: ['QA Platform'],
    options: [
      'Boards',
      'Calls',
      'Channels',
      'Data Eng',
      'Desktop Platform',
      'Growth',
      'Integration Frameworks',
      'Mobile Platform',
      'Playbooks',
      'QA Platform',
      'Self-Serve',
      'Suite Users',
      'Server Platform',
      'Web Platform',
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
      default: ['Evaluating'],
      options: [
        ...toolOptions,
        'Webapp',
        'Mobile',
        'Cloud',
        'in Production — Desktop',
        'Temporarily Disabled',
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
        'RN: iOS',
        'RN: Android',
        'Desktop: Linux',
        'Desktop: macOS',
        'Desktop: Win',
        'WebApp and Desktop',
        'CLI',
        'Portal',
      ],
    },
    'Tags': { default: [], options: ['Cloud N/A', 'Smoke test', 'Never tested'] },
    'Priority P1 to P4': {
      default: 'P2 - Core Functions (Do core functions work?)',
      options: [
        null,
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
    'Authors': { default: '@change_to_my_github_handle', options: [] },
    'Last Updated': { default: '', options: [] },
  };
}

type GenericVF = {
  id?: number;
  name?: string;
  parentId?: number | null;
  fullNames?: string[];
};

export function isValidTestCase(
  testCase: TestCase,
  records: {
    components: Component[];
    folders: Folder[];
    priorities: Priority[];
    statuses: Status[];
  },
): boolean {
  const errorMessage: string[] = [];
  if (!testCase.name) {
    errorMessage.push(`"name" field required: ${testCase?.name}`);
  }

  // TODO(@saturn): uncomment once all test names are updated without newline
  // if (!newLineRe.test(testCase.name)) {
  //   errorMessage.push(`"name" should not have "newline": ${testCase.name}`);
  // }

  // Log for info
  errorMessage.forEach((message) => console.log('  !(error)', message));
  const validTestCase = errorMessage.length === 0;

  const validCustomFields = validateCustomFields(testCase.customFields);

  const validComponent = testCase.component == null || isValidField<Component>(
    records.components,
    testCase.component,
    'components.json',
  );

  const validPriority = isValidField<Priority>(
    records.priorities,
    testCase.priority,
    'priorities.json',
  );

  const validStatus = isValidField<Status>(records.statuses, testCase.status, 'statuses.json');

  const validFolder = testCase.folder.name === testCasesNoneFolder ||
    isValidField<Folder>(records.folders, testCase.folder, 'folders.json');

  return validTestCase && validCustomFields && validPriority &&
    validStatus && validFolder && validComponent;
}

function isValidField<VF extends GenericVF>(
  baseValues: VF[],
  valueToValidate: VF,
  field: string,
) {
  const errorMessage: string[] = [];

  if (valueToValidate.parentId) {
    if (!baseValues.filter((b) => b.id === valueToValidate.parentId)[0]) {
      errorMessage.push(
        `Parent not found from "${field}: ${JSON.stringify(valueToValidate)}"`,
      );
    }
  }

  if (field === 'folders.json' && (!valueToValidate.parentId || !valueToValidate.id)) {
    // New folder found
    if (valueToValidate?.fullNames?.length) {
      console.log(`New folder to be created in Zephyr: "${valueToValidate.fullNames.join(' > ')}"`);
    }

    // Log for info
    errorMessage.forEach((message) => console.log('  !(error)', message));
    return errorMessage.length === 0;
  }

  const found =
    baseValues.filter((b) => b.id === valueToValidate.id && b.name === valueToValidate.name)[0];

  if (!found) {
    errorMessage.push(
      `Not found from "${field}: ${JSON.stringify(valueToValidate)}"`,
    );
  } else if (!valueToValidate.name) {
    errorMessage.push(
      `"name" not found from ${JSON.stringify(valueToValidate)}"`,
    );
  } else if (valueToValidate?.parentId !== found?.parentId) {
    errorMessage.push(
      `"parentId" not match from "${field}: expect "${valueToValidate.parentId}", actual "${found.parentId}"}"`,
    );
  }

  // Log for info
  errorMessage.forEach((message) => console.log('  !(error)', message));

  return errorMessage.length === 0;
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
  delete testCase.priority?.self;
  delete testCase.status?.self;
  delete testCase.folder?.self;
  delete testCase.component?.self;

  return testCase;
}

export function sanitizeTestSteps(steps?: TestStep[]) {
  return steps?.map((step) => {
    if (step.testCase?.self) {
      delete step.testCase.self;
    }

    return step;
  });
}
