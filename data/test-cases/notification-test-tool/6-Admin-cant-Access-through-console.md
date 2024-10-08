---
# (Required) Ensure all values are filled up
name: "Verify System Admin Cannot access Test notification from `Manage User's setting` option in User management"
status: Active
priority: Normal
folder: Notification Test Tool
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: N/A
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

Prerequisite:

1. Log in to Browser/Desktop using Admin's account.
2. Grant a user the access to User management permission.

### Scenario 1: Admin should not have access to Test notification from User management page.

1. Log into the Mattermost desktop app.
2. Go to User Management in System console.
3. Go to any `User Configuration` page.
4. Click on `Manage User Settings`.
5. Verify a pop up shows up with title `Manage <Username>'s Settings`.
6. Again click on `Manage User Settings`.
7. Verify Settings modal opens up.
8. Verify `Test Notification` section is not visible to admin.

### Scenario 2: User with `User Management` role access should not have access to Test notificatio.

1. Log into the Mattermost desktop app.
2. Go to User Management in System console.
3. Go to any `User Configuration` page.
4. Click on `Manage User Settings`.
5. Verify a pop up shows up with title `Manage <Username>'s Settings`.
6. Again click on `Manage User Settings`.
7. Verify Settings modal opens up.
8. Verify `Test Notification` section is not visible to admin.
