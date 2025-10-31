---
# (Required) Ensure all values are filled up
name: "Marking confidential setting as secret"
status: Active
priority: Normal
folder: Jira Connect
authors: "@arush-vashishtha"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ""

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

1. Ensure that the Jira plugin is not configured with any instance.
2. Navigate to system console.
3. Navigate to the Jira plugin configuration.

**Expected**

The confidential settings such as `Webhook Secret`, `At Rest Encryption Key` and `Admin API Token` in the plugin configuration should be empty.


**Step 2**

1. Setup the Jira plugin for any instance by running the command `/jira setup` in any channel or DM/GM and follow the instructions shown by the Jira bot.
2. After setting up the instance, configure the `webhook` by running the command `/jira webhook`.
3. Navigate to system console.
4. Navigate to the Jira plugin configuration.

**Expected**

The confidential settings such as `Webhook Secret`and `At Rest Encryption Key` should not be directly visible as a text. Instead, a string of `*` should be displayed.

**Step 3**

1. Navigate to system console.
2. Setup the `Admin API Token` in the plugin configuration of Jira.
3. Refresh the Jira plugin configuration page after saving the `Admin API Token`.

**Expected**

The `Admin API Token` field should display a string of `*` instead of the actual secret.

**Step 4**
1. Navigate to system console.
2. Navigate to the Jira plugin configuration.
3. Copy the value of any confidential setting.
4. Paste the copied value anywhere.

**Expected**

The pasted content should display a string of `*` instead of the actual secret.

**Step 5**
1. Navigate to system console.
2. Navigate to the Jira plugin configuration.
3. Click on the `Regenerate` button below the `At Rest Encryption Key` field.
4. Save the changes and reload the page.

**Expected**

The regenerated `secret` should be displayed as a string of `*`.