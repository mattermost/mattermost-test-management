# Mattermost Test Management - Open Tests Initiative

This project is created to increase the quality of Mattermost products by having highly effective, well-thought and well-maintained living test cases through high-collaboration and based on industry accepted best practices.

## Contributing
Still in active development from [QA Core Team](https://github.com/orgs/mattermost/teams/qa-core-team) and not yet ready for community contribution. However, feel free to file an issue if you find anything that needs our attention. We will update this section and will announce in our channels once we are all set to accept contributions. Keep on watching!

## Project status and Roadmap
This project is actively maintained and owned by [QA Core Team](https://github.com/orgs/mattermost/teams/qa-core-team).

Phases:
1. Open test data and work with test organization.
2. Open up test contribution from core staff using pull request flow and GitHub approval.
3. Open up test contributions to the community, especially from the QA Community.
4. Build web applications for ease of viewing, creation, editing and reporting.
5. Iterate and improve the Open Test Initiative.

If you're interested in shaping this project, please reach out to our community channel at https://community.mattermost.com/core/channels/quality-assurance. Say hi and let us know what you think!

## Folder Structure
1. __`/data` folder__: Main folder of the repo where written test cases are primarily located. Test cases can be found at `/data/test-cases`.

> Note: We're still in the process of restructuring the folder at `/data/test-cases`. Primary goal is to align with our Multi-Product Architecture. Rough structure would be `Product > Feature > Client > Test Cases`.

2. __`/src` folder__: Scripts that are used for integrating with our third-party Test Management System either for getting or syncing information.

## Getting started
We're using [Deno](https://deno.land/) to run scripts at the `/src` folder. See https://deno.land/#installation for installation.

## Getting started if you'd like to contribute with test cases
1. Checkout this repo and make sure that `Deno` is installed in your local machine.
2. See test cases at `/data/test-cases` and either create or update a test case.
3. Each JSON file at `/data/test-cases` represents the source of truth of its corresponding markdown file. Therefore when updating a test case:
    - Modify the values of the JSON file
    - Run `deno task watch` to take effect changes into its markdown file.
    - Once change is final, run `deno task validate` and see if all changes are valid. Fix error as flagged in the terminal.
4. When creating a test case:
    - Create a template by running `deno task create-template`. Enter basic information like "Test title", "folder" and/or "folder name".
    - Run `deno task watch` to take effect changes into its markdown file.
    - Once change is final, run `deno task validate` and see if all changes are valid. Fix error as flagged in the terminal.
5. Always run `deno task check` to ensure formatting is correct and no lint error. 
6. Create a branch and submit changes as pull requests.


## Getting started if you'd like to contribute with integration
1. Checkout this repo and make sure that `Deno` is installed in your local machine.
2. Scripts can be found at `/src` folder.
3. Integrating Jira and Zephyr Scale requires its tokens. You may set via environment variables or via `.env` file setting values for `ZEPHYR_TOKEN` and `JIRA_PAT`. See their docs on how to get tokens:
- [Jira Personal Access Token](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html)
- [Zephyr Scale API Access Token](https://support.smartbear.com/zephyr-scale-cloud/docs/rest-api/generating-api-access-tokens.html)
4. See list of tasks that are available at [deno.jsonc]([here](https://github.com/mattermost/mattermost-test-management/blob/main/deno.jsonc)).
5. Always run `deno task check` to ensure formatting is correct and no lint error.
6. Create a branch and submit changes as pull requests.

## License
Licensed under Apache License 2.0. Read full text [here](https://github.com/mattermost/mattermost-test-management/blob/main/LICENSE.txt).
