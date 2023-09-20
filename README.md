# Mattermost Test Management - Open Tests Initiative

This project was created to increase the quality of Mattermost products by having highly effective, well-thought and well-maintained living test cases through high collaboration and based on industry-accepted best practices.

## Contributing
1. Create or update test cases.
2. Mark test cases as tested by you.
3. Enhance GitHub and Zephyr Scale integration.
4. Improve the web application for test cases.
4. Assist with the Open Test Initiative.

## Project status and Roadmap
This project is actively maintained and owned by the [QA Core Team](https://github.com/orgs/mattermost/teams/qa-core-team).

Phases:
1. Open test data and work with test organization.
2. Open up test contributions from core staff using pull request flow and GitHub approval.
3. Open up test contributions to the community, especially from the QA Community.
4. Build web applications for ease of viewing, creation, editing and reporting.
5. Iterate and improve the Open Test Initiative.

If you're interested in shaping this project, please reach out to our [community channel](https://community.mattermost.com/core/channels/quality-assurance). Say hi, and let us know what you think!

## Folder Structure
1. __`/data` folder__: Main folder of the repo where written test cases live primarily. Test cases can be found at `/data/test-cases`.
    > *Note*: We're still in the process of restructuring the folder at `/data/test-cases`. The primary goal is to align with our Multi-Product Architecture. The rough structure would be `Product > Feature > Client > Test Cases`.

2. __`/src` folder__: Scripts used for integrating with our third-party Test Management System. These scripts retrieve or sync information.

## Getting started
There are three ways to get started in contributing to this project.
1. It is highly recommended to [![open in Gitpod](https://img.shields.io/badge/open%20in-Gitpod-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/mattermost/mattermost-test-management) for it provides a fully initialized and readily available environment. After opening it, make and submit changes using your forked repository like this:
    ```bash
    # Add your forked repository as remote
    git remote add fork https://github.com/<username>/mattermost-test-management.git

    # Create branch
    git checkout -b <branch_name>

    # Once ready, push the current branch to your fork
    git push fork

    # Finally, create a PR directly from GitHub
    ```
    > *Note*: In Gitpod, if you forget to do the above, pushing a change or branch to the origin will result in a permission error, like this one:
    ```bash
    remote: Permission to mattermost/mattermost-test-management.git denied to <github_handlename>.
    fatal: unable to access 'https://github.com/mattermost/mattermost-test-management.git/': The requested URL returned error: 403
    ```
2. You can also work on your local machine by checking out this repo. Make sure you have [Deno](https://deno.land/) installed on your machine to run scripts in the /src folder. See the [Deno installation docs](https://deno.land/#installation) for more information.
3. If you're contributing test cases only where they are written in Markdown files, you may do so directly via this GitHub repo. See the GitHub docs on [creating new files and submitting pull requests](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files).

### Getting started - adding or updating test cases
1. View test cases at `/data/test-cases`. Each test case is written in a Markdown file with two main sections:
    - `Frontmatter`: for the metadata of a test case where each field is grouped into the categories "required", "optional", and "do not change".
    - `Content`: for the description and steps information.
2. When creating a test case:
    - Copy the basic template at [data/TEST_CASE_TEMPLATE.md](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/TEST_CASE_TEMPLATE.md).
    - Update the required information in the `Frontmatter` section, such as:
        - `name` - the name of the test case
        - `status` - with the default value of `Approved`
        - `priority` - with the default value of `Normal`
        - `folder` - the name of a folder. It should follow the exact name of an existing folder (e.g. `Channels` for `data/test-cases/channels`) or a slug equivalent of a new folder (e.g. `2236 Shiny Feature` for `data/test-cases/channels/2236-shiny-feature`). 
            > *Note*: `2236` is in the format of `YYWW` (shortened year and week) and refers to when a feature is introduced.
        - `authors` - the author's GitHub handle (e.g. `@original`)
        - `team_ownership` - (array) the team name; who owns a feature or test case.
        - `priority_p1_to_p4` - has the default value of `P2 - Core Functions (Do core functions work?)`
    - Update/populate the content section fields, such as:
        - `Objective` (optional)
        - `Precondition` (optional)
        - `Step` (array, required)
            - `Description` (required)
            - `Test Data` (optional)
            - `Expected` (optional)
3. When updating a test case:
    - In addition to the same process when creating a new test case, the submitter should append his/her GitHub handle to `authors` field, comma-separated (e.g. `authors: @original, @updater`).
    - To indicate that a test case has been tested by a contributor, the submitter should append his/her GitHub handle and date tested (mm-dd-yyy) to optional `tested_by_contributor` field, comma-separated (e.g. `tested_by_contributor: @qa_contributor|08-20-2023, @qa_contributor|10-15-2023`).
4. Once changes have been made, run `deno task validate` and see if all changes are valid. Fix errors that get flagged in the terminal.
5. Always run `deno task check` to ensure all formatting is correct and there are no lint errors. 
6. Create a branch and submit changes as a pull request(s).
    > *Note*: It's highly recommended to follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for the `title` of the pull request.

### Getting started - marking tests as tested by you as a contributor:
1. Find test cases at `/data/test-cases`.
2. Update a test case by adding your GitHub handle and the date (mm-dd-yyyy) when you tested it:
  ```diff
  - tested_by_contributor: null
  + tested_by_contributor: @qa_contributor|08-20-2023
  ```
  - or use commas for multiple testing contributions:
  ```diff
  - tested_by_contributor: @qa_contributor|08-20-2023
  + tested_by_contributor: @qa_contributor|08-20-2023,@qa_contributor|10-15-2023
  ```

### Getting started - working with integrations
1. Checkout this repo and make sure that `Deno` is installed on your local machine or [![open in Gitpod](https://img.shields.io/badge/open%20in-Gitpod-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/mattermost/mattermost-test-management).
2. Scripts can be found in the `/src` folder and are all written in Typescript.
3. Integrating Zephyr Scale and Jira requires access tokens. You may set these via environment variables or through an `.env` config file with values for `ZEPHYR_TOKEN` and `JIRA_PAT`. See these docs on how to get the access tokens:
    - [Zephyr Scale API Access Token](https://support.smartbear.com/zephyr-scale-cloud/docs/rest-api/generating-api-access-tokens.html)
    - [Jira Personal Access Token](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html)
4. See a list of tasks that are available at [deno.jsonc](https://github.com/mattermost/mattermost-test-management/blob/main/deno.jsonc). You can also list these tasks using the `deno task` command at the root of the repository.
    - To start up Silver Bullet (SB), run `deno task silverbullet`, then navigate to http://localhost:3333.
    - To start the test management site, navigate into the `www` folder (`cd www`), run `deno task start`, then navigate to http://localhost:8000/.
        - The search bar in the left-hand-side (LHS) of the Test Cases page requires Elasticsearch to be running and accessible at http://localhost:9200. You can start this by entering the command `docker compose up` in the `www` folder.
5. Always run `deno task check` to ensure all formatting is correct and there are no lint errors.
6. Create a branch and submit changes as a pull request(s).
    > *Note*: It's highly recommended to follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for the `title` of the pull request.

## pre-commit hook
1. GitHub Actions runs [codespell](https://github.com/codespell-project/codespell) over your `data/` folder and will point out any common spelling mistakes in the Pull Request.
2. Locally there is .pre-commit-config.yml. You can configure as explained here, [precommit](https://pre-commit.com/)
3. If you want to skip precommit locally, export PRE_COMMIT_ALLOW_NO_CONFIG=1, before running git commit.

## License
Licensed under Apache License 2.0. Read the full text [here](https://github.com/mattermost/mattermost-test-management/blob/main/LICENSE).
