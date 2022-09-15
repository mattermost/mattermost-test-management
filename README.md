# Mattermost Test Management - Open Tests Initiative

This project is created to increase the quality of Mattermost products by having highly effective, well-thought and well-maintained living test cases through high-collaboration and based on industry accepted best practices.

## Contributing
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mattermost/mattermost-test-management)

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
There are three ways to get started in contributing to this project.
1. Highly recommended to [![open in Gitpod](https://img.shields.io/badge/open%20in-Gitpod-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/mattermost/mattermost-test-management) for it provides a fully initialized and readily available environment.
2. With your local machine upon checking out this repo. You should have [Deno](https://deno.land/) installed in your machine so you could run scripts at the `/src` folder. See https://deno.land/#installation for installation.
3. If you're contributing for test cases only where it's written in markdown file, you may do so directly via this GiHub repo. See GitHub docs on how to [create new files and submit pull request](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files).

## Getting started if you're contributing to add or update test cases
1. See test cases at `/data/test-cases`. Each test case is written in a markdown file in two main sections:\
a. `Frontmatter` for metadata of a test case where each field is group into required, optional and do not change.\
b. `Content` for description and steps information.
2. When creating a test case:\
a. Copy the basic template at [data/TEST_CASE_TEMPLATE.md](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/TEST_CASE_TEMPLATE.md).
b. Update the required information from the `Frontmatter` section such as:
    - `name` - name of the test case
    - `status` - with default value of `Approved`
    - `priority` - with default value of `Normal`
    - `folder` - name of a folder. It should follow the same name of existing folder (e.g. `Channels` for `data/test-cases/channels`) or a slug equivalent of new folder (e.g. `2236 Shiny Feature` for `data/test-cases/channels/2236-shiny-feature`). Note: `2236` is in the format of `YYWW` or a shortened year and week when a feature is introduced.
    - `authors` - author's GitHub handle (e.g. `@original`)
    - `team_ownership` - (array) Team name who owns a feature or test case.
c. Update the content section such as:
    - `Objective` (optional)
    - `Precondition` (optional)
    - `Step` (array, required)
      - description (required)
      - `Test Data` (optional)
      - `Expected` (optional)
3. When updating a test case:\
In addition to the same process when creating a new test case, the submitter should append his/her GitHub handle to `authors` field, comma-separated (e.g. `authors: @original,@updater`).
4. Once change is final, run `deno task validate` and see if all changes are valid. Fix error as flagged in the terminal.
5. Always run `deno task check` to ensure formatting is correct and no lint error. 
6. Create a branch and submit changes as pull requests.

> Note: It's highly recommended to follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for the `title` of the pull request.

## Getting started if you'd like to contribute with integration
1. Checkout this repo and make sure that `Deno` is installed in your local machine or [![open in Gitpod](https://img.shields.io/badge/open%20in-Gitpod-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/mattermost/mattermost-test-management).
2. Scripts can be found at `/src` folder and are all written in Typescript.
3. Integrating Zephyr Scale and Jira requires its tokens. You may set via environment variables or via `.env` config with values for `ZEPHYR_TOKEN` and `JIRA_PAT`. See their docs on how to get tokens:
- [Zephyr Scale API Access Token](https://support.smartbear.com/zephyr-scale-cloud/docs/rest-api/generating-api-access-tokens.html)
- [Jira Personal Access Token](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html)
4. See list of tasks that are available at [deno.jsonc]([here](https://github.com/mattermost/mattermost-test-management/blob/main/deno.jsonc)).
5. Always run `deno task check` to ensure formatting is correct and no lint error.
6. Create a branch and submit changes as pull requests.

> Note: It's highly recommended to follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for the `title` of the pull request.

## License
Licensed under Apache License 2.0. Read full text [here](https://github.com/mattermost/mattermost-test-management/blob/main/LICENSE).
