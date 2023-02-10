---
# (Required) Ensure all values are filled up
name: "Show number of group members in group autocomplete"
status: Active
priority: Normal
folder: Custom Groups
authors: "furqanmlk"
team_ownership: []
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: null
component: null
tags: []
labels: []

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: 
- To Do
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

1. Login as **sysdmin**
2. Create a Custom Group with 10 members
3. Create **channelA**
4. Go to **channelA**
5. Type @ with Custom Group Name

**Expected**

2. Custom Group should be created.
3. Total numbers of group members should be displayed in next to Custom Group mention name in group autocomplete dialog
