---
# (Required) Ensure all values are filled up
name: "Order of posts from MS Teams to MM"
status: Active
priority: Normal
folder: Message sync
authors: "@AayushChaudhary0001"
team_ownership: 
- Change Team Name
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

1. Enter multiple messages in the linked channel or in DM/GM in MS Teams.

**Expected**

The messages should be delivered on MM in the same order as they were sent on MS Teams.
