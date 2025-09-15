import { sortBy } from '@std/collections';
import { format as formatDate } from '@std/datetime';
import { loadSync as dotEnvLoadSync } from '@std/dotenv';

import { datetimeFormat, projectId, projectKey, waitTime } from './constant.ts';
import { getParentFolderById, sliceIntoChunks, wait } from './helper.ts';
import {
  Environment,
  Folder,
  FolderType,
  Priority,
  Status,
  StatusType,
  TestCase,
  TestCaseCustomFields,
  TestStep,
  TestStepMode,
} from './types.ts';

const base = 'https://api.zephyrscale.smartbear.com/v2';

export class ZephyrClient {
  private token: string | undefined;

  constructor(token?: string) {
    if (token) {
      this.token = token;
    } else {
      console.warn(
        'no token provided, fetching from Zephyr as an anonymous user',
      );
    }
  }

  private _auth(r: Request): Request {
    const req = new Request(r);
    if (this.token) {
      req.headers.set('Authorization', `Bearer ${this.token}`);
      req.headers.set('Accept-Language', 'en-US');
      req.headers.set('Content-Type', 'application/json');
    }

    return req;
  }

  private async _doRequest(r: Request): Promise<Response> {
    r = this._auth(r);
    const requestClone = r.clone();
    const res = await fetch(r);

    if (!res.ok) {
      console.error('Request body:', await requestClone.text());
      const error = await res.json();
      console.error('Error:', error);
      throw new Error(`Zephyr API request failed: ${error.message}`);
    }

    return res;
  }

  // Create test case
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Test-Cases/operation/createTestCase
  // POST /testcases
  async createTestCase(testCase: TestCase): Promise<CreateResponse> {
    const body: TestCaseInput = {
      projectKey,
      name: testCase.name,
      objective: testCase.objective,
      precondition: testCase.precondition,
      estimatedTime: testCase.estimatedTime,
      componentId: testCase.component?.id,
      priorityName: testCase.priorityName,
      statusName: testCase.statusName,
      folderId: testCase.folder?.id,
      labels: testCase.labels,
      customFields: {
        ...testCase.customFields,
        'Last Updated': formatDate(new Date(), datetimeFormat),
      },
    };

    const result = await (await this._doRequest(
      new Request(
        `${base}/testcases`,
        {
          method: 'POST',
          body: JSON.stringify(body),
        },
      ),
    ))
      .json() as CreateResponse;

    return result;
  }

  // Get test case
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Test-Cases/operation/getTestCase
  // GET /testcases/{testCaseKey}
  async getTestCase(testCaseKey: string): Promise<TestCase> {
    const result = await (await this._doRequest(
      new Request(
        `${base}/testcases/${testCaseKey}`,
      ),
    ))
      .json() as TestCase;

    return result;
  }

  // Update test case
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Test-Cases/operation/updateTestCase
  // PUT /testcases/{testCaseKey}
  async updateTestCase(testCase: TestCase) {
    const body: TestCaseUpdate = {
      id: testCase.id,
      key: testCase.key,
      name: testCase.name,
      project: { id: projectId },
      createdOn: testCase.createdOn,
      objective: testCase.objective,
      precondition: testCase.precondition,
      estimatedTime: testCase.estimatedTime,
      labels: testCase.labels,
      component: testCase.component,
      priority: { id: testCase.priority.id },
      status: { id: testCase.status.id },
      folder: { id: testCase.folder.id },
      customFields: {
        ...testCase.customFields,
        'Last Updated': formatDate(new Date(), datetimeFormat),
      },
    };

    const result = await (await this._doRequest(
      new Request(
        `${base}/testcases/${testCase.key}`,
        {
          method: 'PUT',
          body: JSON.stringify(body),
        },
      ),
    ));

    return result.ok;
  }

  // Get test cases
  // Retrieves all test cases. Query parameters can be used to filter the results.
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Test-Cases
  // GET /testcases
  async getTestCases(
    projectKey: string,
    startAt = 0,
    maxResults = 10,
    folderId?: number,
  ): Promise<GetResponse<TestCase[]>> {
    const folderQuery = folderId && folderId > 0 ? `&folderId=${folderId}` : '';

    const result = await (await this._doRequest(
      new Request(
        `${base}/testcases?projectKey=${projectKey}&startAt=${startAt}&maxResults=${maxResults}${folderQuery}`,
      ),
    ))
      .json() as GetResponse<TestCase[]>;

    return result;
  }

  async getAllTestCases(projectKey: string, startAt = 0, maxResults = 10) {
    const testCases: TestCase[] = [];
    let total = 0;
    let start = startAt;

    while (total === 0 || (total > 0 && testCases.length !== total)) {
      const out = await this.getTestCases(projectKey, start, maxResults);

      if (!total) {
        total = out?.total;
      }

      console.log(
        `List test cases, startAt=${out?.startAt}, total=${out?.total}, next=${out?.next}`,
      );

      testCases.push(...out.values);

      if (out?.isLast) {
        // Log for info
        console.log('Reached last page of test cases');
        break;
      }

      start += maxResults;
    }

    return testCases;
  }

  // Create test steps
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Test-Cases/operation/createTestCaseTestSteps
  // POST /testcases/{testCaseKey}/teststeps
  async createTestSteps(testCaseKey: string, body: TestStepInput): Promise<CreateResponse> {
    const result = await (await this._doRequest(
      new Request(
        `${base}/testcases/${testCaseKey}/teststeps`,
        {
          method: 'POST',
          body: JSON.stringify(body),
        },
      ),
    ))
      .json() as CreateResponse;

    return result;
  }

  // Get test steps
  // Retrieves all test cases. Query parameters can be used to filter the results.
  // Returns the test steps for the given test case. Provides a paged response, with 100 items per page.
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Test-Cases/operation/createTestCaseTestSteps
  // GET /testcases/{testCaseKey}/teststeps
  async getTestSteps(
    testCaseKey: string,
    startAt = 0,
    maxResults = 50,
  ): Promise<TestStep[]> {
    const result = await (await this._doRequest(
      new Request(
        `${base}/testcases/${testCaseKey}/teststeps?startAt=${startAt}&maxResults=${maxResults}`,
      ),
    ))
      .json() as GetResponse<TestStep[]>;

    return result.values;
  }

  getBatchTestSteps(testCases: TestCase[]): Promise<GetTestStepsResponse[]> {
    const promises = testCases.map((testCase) => {
      return this.getTestSteps(testCase.key).then((data) => {
        return { key: testCase.key, steps: data };
      });
    });

    return Promise.all(promises);
  }

  async loopGetTestSteps(testCases: TestCase[]): Promise<GetTestStepsResponse[]> {
    const chunkSize = 100;
    const chunks = sliceIntoChunks(testCases, chunkSize);

    const all: GetTestStepsResponse[][] = [];

    // Log for info
    console.log('Start: getting test steps');

    for (let index = 0; index < chunks.length; index++) {
      const chunk = chunks[index];

      // Log for info
      console.log(
        `Getting test steps, index=${index}, chunk=${chunk.length}`,
        chunk.length === chunkSize ? `-- then wait ${waitTime}ms` : '',
      );

      const batch = await this.getBatchTestSteps(chunk) as GetTestStepsResponse[];
      all.push(batch);

      // Log for info
      console.log(batch.length, 'loopGetTestSteps batch');

      if (chunk.length !== chunkSize) {
        await wait(waitTime);
      }
    }

    return all.flat();
  }

  // Create folder
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Folders/operation/createFolder
  // POST /folders
  async createFolder(body: FolderInput): Promise<CreateResponse> {
    const result = await (await this._doRequest(
      new Request(`${base}/folders`, {
        method: 'POST',
        body: JSON.stringify(body),
      }),
    ))
      .json() as CreateResponse;
    return result;
  }

  // Get folder
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Folders/operation/getFolder
  // GET /folders/{folderId}
  async getFolder(folderId: number): Promise<Folder> {
    const result = await (await this._doRequest(
      new Request(
        `${base}/folders/${folderId}`,
      ),
    ))
      .json() as Folder;

    return result;
  }

  // Get folders
  // Returns all folders.
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Folders/operation/listFolders
  // GET /folders
  async getFolders(
    projectKey: string,
    folderType: FolderType,
    startAt = 0,
    maxResults = 10,
  ): Promise<GetResponse<Folder[]>> {
    const result = await (await this._doRequest(
      new Request(
        `${base}/folders?projectKey=${projectKey}&folderType=${folderType}&startAt=${startAt}&maxResults=${maxResults}`,
      ),
    ))
      .json() as GetResponse<Folder[]>;

    return result;
  }

  async getAllFolders(
    projectKey: string,
    folderType: FolderType,
    startAt = 0,
    maxResults = 10,
  ) {
    const folders: Folder[] = [];
    let total = 0;
    let start = startAt;

    while (total === 0 || (total > 0 && folders.length !== total)) {
      const out = await this.getFolders(projectKey, folderType, start, maxResults);
      folders.push(...out.values);

      if (!total) {
        total = out?.total;
      }

      // Log for info
      console.log(
        `List folders, folderType=${folderType}, startAt=${out?.startAt}, total=${out?.total}, next=${out?.next}`,
      );

      if (out?.isLast) {
        // Log for info
        console.log('Reached last page of folders');
        break;
      }

      start += maxResults;
    }

    return sortBy(
      folders.map((folder, _, arr) => {
        delete folder?.project;

        const withParentFolder = getParentFolderById(arr, folder?.id);
        if (withParentFolder) {
          return {
            ...folder,
            fullNames: withParentFolder.fullNames,
            fullPath: withParentFolder.fullPath,
          };
        }

        return folder;
      }),
      (it) => it.fullPath,
    );
  }

  // Get statuses
  // Returns all statuses.
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Statuses/operation/listStatuses
  // GET /statuses
  async getStatuses(
    projectKey: string,
    statusType: StatusType,
    startAt = 0,
    maxResults = 10,
  ): Promise<GetResponse<Status[]>> {
    const result = await (await this._doRequest(
      new Request(
        `${base}/statuses?projectKey=${projectKey}&statusType=${statusType}&startAt=${startAt}&maxResults=${maxResults}`,
      ),
    ))
      .json() as GetResponse<Status[]>;

    return result;
  }

  async getAllStatuses(
    projectKey: string,
    statusType: StatusType,
    startAt = 0,
    maxResults = 10,
  ) {
    const statuses: Status[] = [];
    let total = 0;
    let start = startAt;

    while (total === 0 || (total > 0 && statuses.length !== total)) {
      const out = await this.getStatuses(projectKey, statusType, start, maxResults);
      statuses.push(...out.values);

      if (!total) {
        total = out?.total;
      }

      // Log for info
      console.log(
        `List statuses, statusType=${statusType}, startAt=${out?.startAt}, total=${out?.total}, next=${out?.next}`,
      );

      if (out?.isLast) {
        // Log for info
        console.log('Reached last page of statuses');
        break;
      }

      start += maxResults;
    }

    return statuses.filter((s) => !s.archived).map((s) => {
      return {
        id: s.id,
        name: s.name,
        description: s.description,
        color: s.color,
        default: s.default,
      };
    });
  }

  // Get priorities
  // Returns all priorities.
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Priorities/operation/listPriorities
  // GET /priorities
  async getPriorities(
    projectKey: string,
    startAt = 0,
    maxResults = 10,
  ): Promise<GetResponse<Priority[]>> {
    const result = await (await this._doRequest(
      new Request(
        `${base}/priorities?projectKey=${projectKey}&startAt=${startAt}&maxResults=${maxResults}`,
      ),
    ))
      .json() as GetResponse<Priority[]>;

    return result;
  }

  async getAllPriorities(projectKey: string, startAt = 0, maxResults = 10) {
    const priorities: Priority[] = [];
    let total = 0;
    let start = startAt;

    while (total === 0 || (total > 0 && priorities.length !== total)) {
      const out = await this.getPriorities(projectKey, start, maxResults);
      priorities.push(...out.values);

      if (!total) {
        total = out?.total;
      }

      // Log for info
      console.log(
        `List priorities, startAt=${out?.startAt}, total=${out?.total}, next=${out?.next}`,
      );

      if (out?.isLast) {
        // Log for info
        console.log('Reached last page of priorities');
        break;
      }

      start += maxResults;
    }

    return priorities.map((p) => {
      return {
        id: p.id,
        name: p.name,
        description: p.description,
        default: p.default,
      };
    });
  }

  // Get environment
  // Returns all environments.
  // https://support.smartbear.com/zephyr-scale-cloud/api-docs/#tag/Environments/operation/listEnvironments
  // GET /environment
  async getEnvironments(
    projectKey: string,
    startAt = 0,
    maxResults = 10,
  ): Promise<GetResponse<Environment[]>> {
    const result = await (await this._doRequest(
      new Request(
        `${base}/environments?projectKey=${projectKey}&startAt=${startAt}&maxResults=${maxResults}`,
      ),
    ))
      .json() as GetResponse<Environment[]>;

    return result;
  }

  async getAllEnvironments(projectKey: string, startAt = 0, maxResults = 10) {
    const environments: Environment[] = [];
    let total = 0;
    let start = startAt;

    while (total === 0 || (total > 0 && environments.length !== total)) {
      const out = await this.getEnvironments(projectKey, start, maxResults);
      environments.push(...out.values);

      if (!total) {
        total = out?.total;
      }

      // Log for info
      console.log(
        `List environments, startAt=${out?.startAt}, total=${out?.total}, next=${out?.next}`,
      );

      if (out?.isLast) {
        // Log for info
        console.log('Reached last page of environments');
        break;
      }

      start += maxResults;
    }

    return environments.filter((e) => !e.archived).map((e) => {
      return {
        id: e.id,
        name: e.name,
        description: e.description,
      };
    });
  }
}

export function makeZephyrClient() {
  dotEnvLoadSync({ export: true });
  const ZEPHYR_TOKEN = Deno.env.get('ZEPHYR_TOKEN');

  return new ZephyrClient(ZEPHYR_TOKEN);
}

type GetResponse<T> = {
  next: string;
  startAt: number;
  maxResults: number;
  total: number;
  isLast: boolean;
  values: T;
};

export type TestCaseInput = {
  projectKey: string;
  name: string;
  objective?: string | null;
  precondition?: string | null;
  estimatedTime?: number | null;
  componentId?: number | null;
  priorityName?: string;
  statusName?: string;
  folderId?: number;
  labels?: string[];
  customFields?: TestCaseCustomFields;
};

export type TestCaseUpdate = {
  id?: number;
  key: string;
  name: string;
  project: { id: number };
  createdOn?: string | null;
  objective?: string | null;
  precondition?: string | null;
  estimatedTime?: number | null;
  labels: string[];
  component?: { id: number } | null;
  priority: { id: number };
  status: { id: number };
  folder: { id?: number };
  testScript?: { self: string };
  customFields?: TestCaseCustomFields;
};

export type TestStepInput = {
  mode: TestStepMode;
  items: TestStep[];
};

export type FolderInput = {
  name: string;
  projectKey: string;
  folderType: FolderType;
  parentId?: number | null;
};

export type CreateResponse = {
  id: number;
  self: string;
  key: string;
};

export type GetTestStepsResponse = {
  key: string;
  steps: TestStep[];
};
