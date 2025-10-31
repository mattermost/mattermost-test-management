---
# (Required) Ensure all values are filled up
name: 'Showing line change count in RHS PR list'
status: Active
priority: Normal
folder: Sidebar and RHS
authors: '@arush-vashishtha'
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

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

1. Connect the `GitHub` account with Mattermost.
2. Create a new `PR` in `GitHub` with some file changes using the connected account.
3. Navigate to the `Your open pull requests` section on the `RHS` in Mattermost.

**Expected**

The `PR` record should display the number of files changed along with additions and deletions.

**Step 2**

1. Connect the `GitHub` account with Mattermost.
2. Create a `PR` and assign the connected account as a reviewer.
3. Navigate to the `Pull requests needing review` section on the `RHS` in Mattermost.

**Expected**

The `PR` record should display the number of files changed along with additions and deletions.

**Step 3**

1. Connect the `GitHub` account with Mattermost.
2. Create a `PR` with some initial file and line changes.
3. Navigate to the `Your open pull requests` section on the `RHS` and confirm the displayed summary.
4. Push additional commits with more changes to the same `PR`.
5. Refresh the `RHS` section.

**Expected**

The `PR` record should update in `Your open pull requests` to show the latest number of files changed and updated totals for additions and deletions.

**Step 4**

1. Connect the `GitHub` account with Mattermost.
2. Create a `PR` and assign the connected account as a reviewer.
3. Navigate to the `Pull requests needing review` section on the `RHS` and confirm the displayed summary.
4. Push additional commits with more changes to the same `PR`.
5. Refresh the `RHS` section.

**Expected**

The `PR` record should update in `Pull requests needing review` to show the latest number of files changed and updated totals for additions and deletions.

**Step 5**

1. Connect the `GitHub` account with Mattermost.
2. Create a `PR` where no files or lines are changed.
3. Navigate to the `Your open pull requests` section on the `RHS` in Mattermost.

**Expected**

The `PR` record should not display any line change summary.

**Step 6**

1. Connect the `GitHub` account with Mattermost.
2. Create a `PR` with no tracked line changes and assign the connected account as a reviewer.
3. Navigate to the `Pull requests needing review` section on the `RHS` in Mattermost.

**Expected**

The `PR` record should not display any line change summary. 



