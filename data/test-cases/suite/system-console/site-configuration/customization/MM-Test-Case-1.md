---
# (Required) Ensure all values are filled up
name: "Hide Help Resources button when help link is empty"
status: Active
priority: Normal
folder: Customization
authors: "furqanmlk"
team_ownership: 
- Channels
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: System Console
component: null
tags: []
labels: []

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

1. Login as **sysadmin**
2. Go to System Console > Customization
3. Observe **Help Link**
4. Clear **Help Link** field
5. Go to Channel
6. Click **Help** icon

**Expected**

2. Customization page should be displayed
3. **Help Link** should be empty
4. **Help Resources** option should not be exist
