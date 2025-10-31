---
# (Required) Ensure all values are filled up
name: 'To verify clickable usernames in RHS for PRs and Issues'
status: Active
priority: Normal
folder: Sidebar and RHS
authors: '@arush-vashishtha'
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Plugins
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: To Do
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

1. Setup `GitHub` plugin in Mattermost.
2. Click on Your `Open Pull Requests` from the notification counter in the left sidebar.
3. Observe the username displayed at the bottom of each `PR` in the `RHS`.

**Expected**

The username should be a clickable hyperlink. Clicking it should open the user's `GitHub` profile in a new browser tab.

**Step 2**

1. Setup `GitHub` plugin in Mattermost.
2. Click on `Pull Requests Needing Review` from the notification counter in the left sidebar.
3. Observe the usernames shown at the bottom of the `PR` in the `RHS`.

**Expected**

The username should be a clickable hyperlink. Clicking it should open the user's `GitHub` profile in a new browser tab.

**Step 3**

1. Setup `GitHub` plugin in Mattermost.
2. Click on `Your Assignments` from the notification counter in the left sidebar.
3. Observe the usernames displayed at the bottom of the `Issues`/`PRs` in the `RHS`.

**Expected**

The username should be a clickable hyperlink. Clicking it should open the user's `GitHub` profile in a new browser tab.
