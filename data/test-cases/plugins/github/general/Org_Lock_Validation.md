---
# (Required) Ensure all values are filled up
name: 'Validation of repository and issue listing when Org Lock contains invalid organizations'
status: Active
priority: Normal
folder: General
authors: ''
team_ownership: []
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---


**Step 1**

1. Setup `GitHub` with Mattermost.
2. Configure valid organizations in the Org Lock setting from the plugin configuration page.
3. Post a message in any channel, DM, or GM.
4. Open the message actions menu for the posted message.
5. Click `Attach to GitHub Issue`.
In the pop-up modal, select a repository from the dropdown and choose an issue.

**Expected**

The post should be successfully attached to the selected issue. Only issues from repositories under valid organizations should be listed.

**Step 2**

1. Setup `GitHub` with Mattermost.
2. Configure valid organizations in the Org Lock setting from the plugin configuration page.
3. Post a message in any channel, DM, or GM.
4. Open the message actions menu for the posted message.
5. Click `Create GitHub Issue`.
6. In the modal, select a repository from the dropdown, enter the issue title and summary, then submit.

**Expected**

The issue should be successfully created in the selected repository. The repository dropdown should list only repositories from the valid organizations.

**Step 3**

1. Setup `GitHub` with Mattermost.
2. Configure Org Lock with a mix of valid organizations and one invalid organization.
3. Post a message in any channel, DM, or GM.
4. Open the message actions menu for the posted message.
5. Click `Attach to GitHub Issue`.
6. Select a repository from the dropdown and choose an issue.

**Expected**

The post should be successfully attached to the selected issue. Only issues from repositories under valid organizations should be listed; the invalid organization should not appear.

**Step 4**

1. Setup `GitHub` with Mattermost.
2. Configure Org Lock with a mix of valid organizations and one invalid organization.
3. Post a message in any channel, DM, or GM.
4. Open the message actions menu for the posted message.
5. Click `Create GitHub Issue`.
6. In the modal, select a repository from the dropdown, enter the issue title and summary, then submit.

**Expected**

The issue should be successfully created in a repository under a valid organization. Repositories from the invalid organization should not appear in the dropdown.

**Step 5**

1. Setup `GitHub` with Mattermost.
2. Configure Org Lock with only invalid organizations.
3. Post a message in any channel, DM, or GM.
4. Open the message actions menu for the posted message.
5. Click `Attach to GitHub Issue` and observe the repository dropdown.
6. Click `Create GitHub Issue` and observe the repository dropdown.

**Expected**

No issues or repositories should be listed. The user should not be able to attach posts or create issues, as no valid organizations exist.

**Step 6**

1. Setup `GitHub` with Mattermost.
Leave Org Lock blank in the plugin configuration.
3. Post a message in any channel, DM, or GM.
4. Open the message actions menu for the posted message.
5. Click `Attach to GitHub Issue` and select a repository from the dropdown.
6. Click `Create GitHub Issue` and select a repository from the dropdown, enter the issue title and summary, then submit.

**Expected**

The repositories and issues available to the connected user should be displayed correctly. The post should attach successfully to the selected issue, and a new issue should be created successfully in the chosen repository.