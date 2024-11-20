# (Required) Ensure all values are filled up
name: "Accept Todo"
status: Active
priority: Normal
folder: ToDo
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

1. Create an issue from any user's account and assign it to the other user.
2. Open the Todo RHS and click on "Add to my list" button, or open the Todo bot chat and click on "Add to my list" button in slack attachement.

**Expected**

The desired Todo should get accepted.