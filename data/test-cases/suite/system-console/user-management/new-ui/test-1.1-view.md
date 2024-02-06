---
# (Required) Ensure all values are filled up
name: "Ability to view User Profiles in User management section"
status: Active
priority: Normal
folder: New UI
authors: "@yasserfaraazkhan"
team_ownership: 
- ICU
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

Test requirements:

1. Have an instance with server version >= 9.6.

Scenario: Admin can open user profile from the User management page.

Steps:

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. In the first column, click on the user name.
4. Verify the User Configuration page is opened.

Scenario: Admin can verify user actions available.

Steps:

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. Search for `sysadmin`.
4. In the actions Column, verify the Role `System admin` is displayed.
5. Click on the role.
6. Verify admin can see a various actions available like, Deactivate, Manage Roles, Manage Team, Reset Password, Update Email, Remove Sessions.
