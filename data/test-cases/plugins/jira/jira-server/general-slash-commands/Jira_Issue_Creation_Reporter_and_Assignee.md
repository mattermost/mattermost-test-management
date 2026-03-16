---
# (Required) Ensure all values are filled up
name: "Jira Issue creation with reporter and assignee"
status: Active
priority: Normal
folder: General Slash commands
authors: "@arush-vashishtha"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

# (Optional) Test type and tools
cypress: Evaluating
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

---

**Step 1**

1. Setup Jira with Mattermost.
2. In any channel or DM/GM, run the command `/jira create`.
3. In the `Issue` creation modal, select a project where `reporter` or `assignee` fields are supported.
4. Choose a specific `reporter` while leaving the `assignee` empty.
5. Save the `Issue`.

**Expected**

The `Issue` should be created with the selected `reporter`, and the `reporter` field in Jira should correctly display the chosen user. The `assignee` field should remain empty.

**Step 2**

1. Setup Jira with Mattermost.
2. In any channel or DM/GM, run the command `/jira create`.
3. In the `Issue` creation modal, select a project where `reporter` or `assignee` fields are supported.
4. Choose a specific `assignee` while leaving the `reporter` empty.
5. Save the `Issue`.

**Expected**

The `Issue` should be created with the selected `assignee`, and the `assignee` field in Jira should correctly display the chosen user. The `reporter` field should remain empty.

**Step 3**

1. Setup Jira with Mattermost.
2. In any channel or DM/GM, run the command `/jira create`.
3. In the `Issue` creation modal, select a project where `reporter` or `assignee` fields are supported.
4. Choose both a `reporter` and an `assignee` while creating the `Issue`.
5. Save the `Issue`.

**Expected**

The `Issue` should be created with both the `reporter` and `assignee` fields, and Jira should display the correct `reporter` and `assignee` as chosen during creation.