---
# (Required) Ensure all values are filled up
name: "Add max height and overflow to Multiselect"
status: Active
priority: Normal
folder: user-groups
authors: "@furqanmlk"
team_ownership: 
- Suite Users

# (Optional)
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: enterprise
component: null
tags: []
labels: 

# (Optional) Test type and tools
cypress: To Do
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: 
- Webapp

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

Ref: <https://mattermost.atlassian.net/browse/MM-41906>

Steps:

1. Login as **SysAdmin**.
2. Create 10 users.
3. Click **+** icon on LHS.
4. Click on **Create New User Groups**.
5. Type **Name** in Create Group modal.
6. Add 10 users.

**Expected**

step 6: Scroll bar should be visible.
