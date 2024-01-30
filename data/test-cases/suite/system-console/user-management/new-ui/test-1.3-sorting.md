---
# (Required) Ensure all values are filled up
name: "Ability to Sort the columns and view only desired columns"
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

Steps:

Scenario: Only display User details, Email, Member Since

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. In the Column dropdown, Check only `Email` & `Member Since`. User details and Actions are selected by default.
4. Click on the `User details` column header and Verify the details are sorted
5. Verify sorting table by Email & Member Since.
