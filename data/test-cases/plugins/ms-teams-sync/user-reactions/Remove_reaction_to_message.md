---
# (Required) Ensure all values are filled up
name: "Remove reaction from a message"
status: Active
priority: Normal
folder: user-reactions
authors: "@arush-vashishtha"
team_ownership: []
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

1. Remove a reaction from the message in the linked channel or DM/GM on MM.
2. Navigate to the linked channel or DM/GM on MS Teams. 

**Step 2**

1. Remove a reaction from the message in the linked channel or DM/GM on MS Teams.
2. Navigate to the linked channel or DM/GM on MM.

**Expected**

The reaction should be removed from the message in the linked channel or DM/GM on MS Teams.
After step 2, the reaction should be removed from the message in the linked channel or DM/GM on MM.