---
# (Required) Ensure all values are filled up
name: "Admin should be able to see the User's settings on a licensed instance"
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

### Scenario: Admin cannot see the `Manage User Settings` option on a Free edition.

**Steps:**
1. Log into the admin account and go to System Console > Users page.
2. Search for User A.
3. In the Actions Menu, verify that `Manage User Settings` is not visible.
4. Go to User A's User configuration page.
5. Verify that `Manage User Settings` is not visible.

### Scenario: Admin can see the `Manage User Settings` option on a Professional/Enterprise edition.

**Steps:**
1. Log into the admin account and go to System Console > Users page.
2. Search for User A.
3. In the Actions Menu, verify that `Manage User Settings` is visible.
4. Click on the `Manage User Settings` option.
5. Verify that a confirmation pop-up with the title `Manage User A's Settings` appears.
6. Click on the `Manage User Settings` button.
7. Verify that User A's settings modal is displayed.
