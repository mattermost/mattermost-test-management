---
# (Required) Ensure all values are filled up
name: "User with System Manager or User manager role and edit access to user management can Manage User settings"
status: Active
priority: Normal
folder: Admin Control User Settings 
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

### Scenario: Users with roles `System manager` or `User manager` or `Viewer` can see the `Manage User Settings` option on a instance with Enterprise license.

**Steps:**

1. Log into the admin account and go to System Console > System Roles page.
2. Edit permissions for `System manager`.
3. Under User Management, change the access settings from `No access` to `Can edit`.
4. Add `User A` to this role.
5. Log out from the admin account and log into User A's account.
6. Go to System Console > Users page.
7. Search for User B.
8. In the Actions Menu, verify that `Manage User Settings` is visible.
9. Click on the `Manage User Settings` option.
10. Verify that a confirmation pop-up with the title `Manage User B's Settings` appears.
11. Click on the `Manage User Settings` button.
12. Verify that User B's settings modal is displayed.
13. Verify the modal has a label `Admin mode`.
