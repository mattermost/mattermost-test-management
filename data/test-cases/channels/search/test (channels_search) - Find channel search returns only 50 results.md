---
# (Required) Ensure all values are filled up
name: "Channels: Search - Find channel search returns only 50 results when there are more than 50 channels with similar names"
status: Active
priority: Normal
folder: Search
authors: "lindy65"
team_ownership: 
- Web Platform
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

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

- Create more than 50 channels with similar names (e.g. test_channel01, test_channel02 etc)
- Click on "Find channel" and type "test_chann"

**Expected**

Only 50 results for "test_chann" should be displayed.
