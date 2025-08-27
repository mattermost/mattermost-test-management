---
# (Required) Ensure all values are filled up
name: "Assign a Jira issue to a user through slash command"
status: Active
priority: Normal
folder: Jira assign
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

1. Run the `/jira assign` and add the desired issue key in the slash command in the channel on MM.
2. Add the MM username in the <assignee> in above command followed by a `@` when the user's MM account is connected to Jira account.

**Expected**

The user should get suggestions while entering MM user name and the assignee should get added to the issue on Jira.

**Step 2**

1. Run the `/jira assign` and add the desired issue key in the slash command in the channel on MM.
2. Add the MM username in the <assignee> in above command not followed by a `@` when the user's MM account is connected or disconnected to Jira account.

**Expected**

The user should not get any suggestion while entering MM user name and they should receive the error message that no assignee found for MM user name.

**Step 3**

1. Run the `/jira assign` and add the desired issue key in the slash command in the channel on MM.
2. Add the MM username in the <assignee> in above command when the user's MM account is disconnected to Jira account.

**Expected**

he user with MM user name should not get assigned to the issue on Jira.

**Step 4**

1. Run the `/jira assign` and add the desired issue key in the slash command in the channel on MM.
2. Add the Jira username in the <assignee> in above command not followed by a `@` when the user's MM account is connected or disconnected to their Jira account.

**Expected**

The user with Jira user name should get assigned to the issue on Jira.