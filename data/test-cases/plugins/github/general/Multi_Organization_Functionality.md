---
# (Required) Ensure all values are filled up
name: 'Validation of plugin functionality for multiple organization configuration'
status: Active
priority: Normal
folder: General
authors: '@Yash-Chakerverti'
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
id: 
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

1. Setup `GitHub` with Mattermost.
2. Configure a single organization in the `GitHub` plugin settings via the System Console.
3. Run the slash command `/github subscriptions add owner/repo` for a repository under the configured organization in any channel, DM, or GM.

**Expected**

The subscription should be successfully created for the repository under the configured organization.

**Step 2**

1. Setup `GitHub` with Mattermost.
2. Configure multiple organizations in the `GitHub` plugin settings via the System Console.
3. Run the slash command `/github subscriptions add owner/repo` for repositories across different organizations in any channel, DM, or GM.

**Expected**

Subscriptions should be successfully created for repositories across all configured organizations.

**Step 3**

1. Setup `GitHub` with Mattermost.
2. Configure multiple organizations in the `GitHub` plugin settings via the System Console.
3. Run the slash command `/github subscriptions add owner/repo` for a repository under this organization in any channel, DM, or GM.

**Expected**

The subscription should be successfully created for the repository.

**Step 4**

Setup `GitHub` with Mattermost.
Configure organizations in Org Lock in the `GitHub` plugin settings via the System Console.
Run the slash command `/github subscriptions add owner/repo` for a repository that's not present in the org lock in any channel, DM, or GM.

**Expected**

The subscription should not be created for the repository.

**Step 5**

1. Setup `GitHub` with Mattermost.
2. Ensure no organization is configured in the `GitHub` plugin settings via the System Console.
3. Run the slash command `/github subscriptions add owner/repo` for repositories available to the connected user in any channel, DM, or GM.

**Expected**

The subscription should be successfully created for the repositories available to the connected user.

**Step 6**

1. Setup `GitHub` with Mattermost.
2. Configure a single organization in the `GitHub` plugin settings via the System Console.
3. Run the slash command `/github subscriptions default owner/repo` in any channel, DM, or GM.

**Expected**

The default repository should be successfully set under the configured organization.

**Step 7**

1. Setup `GitHub` with Mattermost.
2. Configure multiple organizations in the `GitHub` plugin settings via the System Console.
3. Run the slash command `/github subscriptions default owner/repo` for repositories across different organizations in any channel, DM, or GM.

**Expected**

The default repository should be successfully set for all configured organizations.

**Step 8**

1. Setup `GitHub` with Mattermost.
2. Configure organizations in the `GitHub` plugin settings via the System Console.
3. Run the slash command `/github subscriptions default owner/repo` for a repository that's not present in the org lock in any channel, DM, or GM.

**Expected**

The default repository shouldn't be successfully set.

**Step 9**

1. Setup `GitHub` with Mattermost.
2. Ensure no organization is configured in the `GitHub` plugin settings via the System Console.
3. Run the slash command `/github subscriptions default owner/repo` for repositories available to the connected user in any channel, DM, or GM.

**Expected**

The default repository should be successfully set for the repositories available to the connected user.

**Step 10**

1. Setup `GitHub` with Mattermost.
2. Configure a single organization in the `GitHub` plugin settings via the System Console.
3. Run the slash command `/github issue create` in any channel, DM, or GM.

**Expected**

The issue should be successfully created in the repository under the configured organization.

**Step 11**

1. Setup `GitHub` with Mattermost.
2. Configure multiple organizations in the `GitHub` plugin settings via the System Console.
3. Run the slash command `/github issue create` for repositories across different organizations in any channel, DM, or GM.

**Expected**

Issues should be successfully created in all specified repositories.

**Step 12**

Setup `GitHub` with Mattermost.
Configure organizations in the `GitHub` plugin settings via the System Console.
Run the slash command `/github issue create` in any channel, DM, or GM.

**Expected**

The issue should not be created.

**Step 13**

1. Setup `GitHub` with Mattermost.
2. Ensure no organization is configured in the `GitHub` plugin settings via the System Console.
3. Run the slash command `/github issue create` for repositories available to the connected user in any channel, DM, or GM.

**Expected**

The issue should be successfully created in the repositories available to the connected user.

**Step 14**

1. Setup `GitHub` with Mattermost.
2. Configure a single organization in the `GitHub` plugin settings via the System Console.
3. Select a post in any channel, DM, or GM and use the message action `Attach to GitHub Issue`.
4. In the pop-up, select a `GitHub` issue under the configured organization.

**Expected**

The post should be successfully attached to the selected issue.

**Step 15**

Setup `GitHub` with Mattermost.
Configure multiple organizations in the `GitHub` plugin settings via the System Console.
Select a post and attach it to issues across different organizations.

**Expected**

The post should be successfully attached to the selected issues across all organizations.

**Step 16**

1. Setup `GitHub` with Mattermost.
2. Configure organizations in the `GitHub` plugin settings via the System Console.
3. Select a post and attach it to an issue in a repository under this organization.

**Expected**

The post should not be attached to the issue.

**Step 17**

1. Setup `GitHub` with Mattermost.
2. Ensure no organization is configured in the `GitHub` plugin settings via the System Console.
3. Select a post and attach it to issues in repositories available to the connected user.

**Expected**

The post should be successfully attached to the issue.

**Step 18**

1. Setup `GitHub` with Mattermost.
2. Configure a single organization in the `GitHub` plugin settings via the System Console.
3. Check the LHS of `GitHub`.

**Expected**

The LHS should reflect all updated data accurately for the configured organization.

**Step 19**

1. Setup `GitHub` with Mattermost.
2. Configure multiple organizations in the `GitHub` plugin settings via the System Console.
3. Check the LHS of `GitHub`.

**Expected**

The LHS should display updated data for all organizations correctly.

**Step 20**

1. Setup `GitHub` with Mattermost.
2. Ensure no organization is configured in the `GitHub` plugin settings via the System Console.
3. Check the LHS of `GitHub`.

**Expected**

The LHS should display updated data for repositories available to the connected user.

**Step 21**

1. Setup `GitHub` with Mattermost.
2. Configure an organization in the `GitHub` plugin settings that the connected user does not have access to (invalid/incorrect organization).
3. Try to perform actions like creating a subscription, setting a default repository, creating an issue, or attaching a post to an issue using slash commands in any channel, DM, or GM.

**Expected**

All actions should fail, and the user should not be able to execute any commands for the invalid organization.

**Step 22**

1. Setup `GitHub` with Mattermost.
2. Configure both a valid organization (user has access) and an invalid organization (user does not have access) in the `GitHub` plugin settings.
3. Try to perform actions like creating a subscription, setting a default repository, creating an issue, or attaching a post to an issue for repositories under both valid and invalid organizations.

**Expected**

Actions should succeed for repositories under the valid organization and fail for repositories under the invalid organization.