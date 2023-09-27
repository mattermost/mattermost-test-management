# (Required) Ensure all values are filled up
name: "Bump Todo"
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

1. Open the sent Todo list from the Todo plugin RHS.
2. Click on the options of any desired Todo.
3. Click on bumo button.

**Expected**

The assigned user should get a reminder notification for the task bumped.