import { dotEnvLoadSync } from '../deps.ts';

import { Component } from './types.ts';

const base = 'https://mattermost.atlassian.net';

export class JiraClient {
  private token: string | undefined;
  private email: string | undefined;

  constructor(token?: string, email?: string) {
    if (token) {
      this.token = token;
    } else {
      console.warn(
        'no token provided, fetching from Jira as an anonymous user',
      );
    }
    if (email) {
      this.email = email;
    } else {
      throw new Error('no email provided. add `EMAIL=youremail@example.com` in the .env file');
    }
  }

  private _auth(r: Request): Request {
    const req = new Request(r);
    if (this.token) {
      const encoder = new TextEncoder();
      const data = encoder.encode(`${this.email}:${this.token}`);
      const base64 = btoa(String.fromCharCode(...new Uint8Array(data)));
      req.headers.set('Authorization', `Basic ${base64}`);
      req.headers.set('Accept-Language', 'en-US');
    }
    return req;
  }

  private async _doRequest(r: Request): Promise<Response> {
    r = this._auth(r);
    const res = await fetch(r);
    return res;
  }

  // Get project components
  // https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-components/#api-rest-api-3-project-projectidorkey-components-get
  // GET /rest/api/3/project/{projectIdOrKey}/components
  async getComponents(
    projectIdOrKey: string,
    maxResults = 100,
  ): Promise<GetComponentsResponse> {
    const result = await (await this._doRequest(
      new Request(
        `${base}/rest/api/3/project/${projectIdOrKey}/components?maxResults=${maxResults}`,
      ),
    ))
      .json();

    if (result.errorMessages) {
      return result;
    }

    return result.map((data) => {
      return {
        id: parseInt(data.id, 10),
        name: data.name,
        description: data.description,
      };
    });
  }
}

export function makeJiraClient() {
  dotEnvLoadSync({ export: true });
  const JIRA_PAT = Deno.env.get('JIRA_PAT');
  const EMAIL = Deno.env.get('EMAIL');

  return new JiraClient(JIRA_PAT, EMAIL);
}

type GetComponentsResponse = Component[] & {
  errorMessages?: string;
};
