---
# (Required) Ensure all values are filled up
name: "My Insights license change"
status: Active
priority: Normal
folder: Insights
authors: "@furqanmlk"
team_ownership: 
- Suite Users

# (Optional)
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: activity-and-insights
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

Ref: <https://mattermost.atlassian.net/browse/MM-47145>

Steps:

1. Login as **SysAdmin**.
2. Add starter license.
3. Click **insights** from LHS.

**Expected**

step 3: insights should be displayed.
