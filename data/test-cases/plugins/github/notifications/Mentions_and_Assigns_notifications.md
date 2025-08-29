---
# (Required) Ensure all values are filled up
name: "Getting DM notifications on MM for mentioning and assigning the user on GitHub."
status: Active
priority: Normal
folder: Notifications
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

1. Connect your MM account to your GitHub account and create a `webhook` to a desired repository/organization on MM.
2. Mention the connected user in the `Pull Request` of the desired repository on `GitHub` from a different account.
3. Navigate to the DM chat of GitHub on MM.

**Expected**

The user should get the notification on MM regarding the mention in the `Pull Request` in the desired repository on GitHub.

**Step 2**

1. Connect your MM account to your GitHub account and create a `webhook` to a desired repository/organization on MM.
2. Mention the connected user in the `Issues` of the desired repository on `GitHub` from a different account.
3. Navigate to the DM chat of GitHub on MM.

**Expected**

The user should get the notification on MM regarding the mention in the `Issue` in the desired repository on GitHub.

**Step 3**

1. Connect your MM account to your GitHub account and create a `webhook` to a desired repository/organization on MM.
2. Assign any desired `Pull Request` to the connected user from a different user.
3. Navigate to the DM chat of GitHub on MM.

**Expected**

The user should get the notification on MM regarding the assignment of the `Pull Request` in the desired repository on GitHub.

**Step 4**

1. Connect your MM account to your GitHub account and create a `webhook` to a desired repository/organization on MM.
2. Assign any desired `Issue` to the connected user from a different user.
3. Navigate to the DM chat of GitHub on MM.

**Expected**

The user should get the notification on MM regarding the assignment of the `Issue` in the desired repository on GitHub.