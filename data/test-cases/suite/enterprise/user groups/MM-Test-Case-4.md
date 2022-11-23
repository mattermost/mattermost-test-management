---
# (Required) Ensure all values are filled up
name: "Allowing special characters in group name"
status: Active
priority: Normal
folder: user groups
authors: "@furqanmlk"
team_ownership: 
- Suite Users

# (Optional)
priority_p1_to_p4: null
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
Ref: <https://mattermost.atlassian.net/browse/MM-46112>

Test:

1. Login as **SysAdmin**.
2. Create 2 users.
3. Click **+** icon on LHS.
4. Click on **Create New User Groups**.
5. Type **Name** "test-group" in Create Group modal.
6. Add 2 users.
7. Click Create Group button.

**Expected**
on step 5: "test-group" should be visiblle in **Mention**.
on step 7: Group should be created.
