---
# (Required) Ensure all values are filled up
name: "Replying to a message"
status: Active
priority: Normal
folder: thread-replies
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

1. Reply to a message in the linked channel or DM/GM on MM.
2. Navigate to the linked channel or DM/GM on MS Teams.

**Step 2**

1. Reply to a message in the linked channel or DM/GM on MS Teams.
2. Navigate to the linked channel or DM/GM on MM.

**Expected**

The user should be able to verify the replied message in the thread view of the desired message, in the linked channel or DM/GM on MS Teams.
After step 2, the user should be able to verify the replied message in the thread view of the desired message, in the linked channel or DM/GM on MM.