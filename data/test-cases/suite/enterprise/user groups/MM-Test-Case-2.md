---
# (Required) Ensure all values are filled up
name: "Add popover for user groups"
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
Ref: <https://mattermost.atlassian.net/browse/MM-44347>

Steps:

1. Login as **SysAdmin**.
2. Create a channel **ChannelA**.
3. Create 10 users.
4. Add 10 users in **ChannelA**.
5. Click **+** icon on LHS.
6. Click on **Create New User Groups**.
7. Type **Name** in Create Group modal.
8. Add 10 users.
9. Click **Create Group** button.
10. Goto **ChannelA**.
11. Type Group mention and press **enter**.
12. Click group mention .
13. Click group header.
14. Close group model.
15. Click group mention again and select any user.

**Expected**
step 10: Following results should be displayed:

- user groups popover should be displayed.
- Group name should be displayed on group name header.
- **X** icon should be displayed next to group name header.
- Group mention and total number of group members should be displayed under the group name header.
- Search textbox should be displayed.
- List of all group members should be displayed.
  step 11: group modal should be displayed.
  step 13: profile popover of selected user should be displayed.
