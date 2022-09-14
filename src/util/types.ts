export type FolderType = 'TEST_CASE' | 'TEST_PLAN' | 'TEST_CYCLE';
export type StatusType = 'TEST_CASE' | 'TEST_PLAN' | 'TEST_CYCLE';
export type TestStepMode = 'APPEND' | 'OVERWRITE';

export type TestCaseCustomFields = {
  'Rainforest': string[];
  'Team Ownership': string[];
  'Manual Test Environments': string[];
  'Tags': string[];
  'Playwright': string | null;
  'Priority P1 to P4': string | null;
  'Update notes': string | null;
  'Detox': string | null;
  'Cypress': string | null;
  'MMCTL': string | null;
  'Location': string | null;
  'Authors': string | null; // Github handle, comma-separated
  'Last Updated': string | null;
};

export type TestCase = {
  id?: number | null;
  key: string;
  name: string;
  createdOn: string | null;
  objective: string | null;
  precondition: string | null;
  estimatedTime?: number | null;
  labels: string[];
  component?: Component | null;
  componentName?: string | null;
  priority?: Priority;
  priorityName?: string | null;
  status?: Status;
  statusName?: string | null;
  folder?: Folder;
  folderName?: string | null;
  folderFullPath?: string | null;
  steps?: TestSteps;
  customFields: TestCaseCustomFields;
  project?: Record<string, string>;
  owner?: Record<string, string>;
  testScript?: Record<string, string>;
  links?: Record<string, string>;
  caseHashed?: string | null;
  stepsHashed?: string | null;
};

export type KeyPathId = { key: string; path?: string | null; id: number };

export type TestStep = {
  inline: {
    description: string | null;
    testData: string | null;
    expectedResult: string | null;
  } | null;
  testCase: {
    testCaseKey: string;
    self?: string;
  } | null;
};

export type TestSteps = TestStep[];

export type Component = {
  id: number;
  name?: string;
  description?: string;
  self?: string;
};

export type Folder = {
  id?: number;
  parentId?: number | null;
  name?: string | null;
  folderType?: string;
  index?: number;
  project?: {
    id: number;
    self: string;
  };
  fullPath: string;
  fullNames?: string[];
  self?: string;
};

export type Status = {
  id: number;
  project?: {
    id: number;
    self?: string;
  };
  name?: string;
  description?: string | null;
  index?: number;
  color?: string;
  archived?: boolean;
  default?: boolean;
  self?: string;
};

export type Priority = {
  id: number;
  project?: {
    id: number;
    self?: string;
  };
  name?: string;
  description?: string;
  index?: number;
  default?: boolean;
  self?: string;
};

export type Environment = {
  id: number;
  project?: {
    id: number;
    self: string;
  };
  name: string;
  description: string;
  index?: number;
  archived?: boolean;
};

export type HashedRecord = {
  test_key: string;
  test_case: string;
  test_steps: string | null;
};
