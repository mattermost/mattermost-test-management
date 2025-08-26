---
# (Required) Ensure all values are filled up
name: "The Projects list should sustain the pagination for all the projects in the list."
status: Active
priority: Normal
folder: Jira-subscriptions
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

1. Connect your MM account to your Jira account with more than 50 projects added.
2. Run the slash command `/jira subscribe edit` or `/jira subscribe` in any desired channel or DM/GM on MM.
3. Click on the `Create Subscription` button in the `Jira Subscriptions` page on MM.
4. Click on the `Project` dropdown list in the `Jira Subscriptions` page on MM and Scroll down the list.

**Expected**

The list should be able to properly fetch and display all the projects added to the Jira account on MM.

**Step 2**

1. Connect your MM account to your Jira account with less than 50 projects added.
2. Run the slash command `/jira subscribe edit` or `/jira subscribe` in any desired channel or DM/GM on MM.
3. Click on the `Create Subscription` button in the `Jira Subscriptions` page on MM.
4. Click on the `Project` dropdown list in the `Jira Subscriptions` page on MM and Scroll down the list.

**Expected**

The list should be able to properly fetch and display all the projects added to the Jira account on MM.

**Step 3**

1. Connect your MM account to your Jira account.
2. Run the slash command `/jira subscribe edit` or `/jira subscribe` in any desired channel or DM/GM on MM.
3. Click on the `Create Subscription` button in the `Jira Subscriptions` page on MM.
4. Click on the `Project` dropdown list in the `Jira Subscriptions` page on MM and Scroll down the list.

**Expected**

The list should be sorted in ascending order with respect to the projects added to the Jira account on MM.