---
# (Required) Ensure all values are filled up
name: " Increase number of people that can be added to a group at once"
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
Ref: <https://mattermost.atlassian.net/browse/MM-44353>

Test:

1. Login as **SysAdmin**.
2. Create 257 users.
3. Click **+** icon on LHS.
4. Click on **Create New User Groups**.
5. Type **Name** in Create Group modal.
6. Add 257 users.

**Expected**
on step 6: **No more than 256 members can be added to a group at once.** error should be displayed.
