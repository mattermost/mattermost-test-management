# (Required) Ensure all values are filled up
name: "Complete Todo"
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

1. Provide the correct authtoken(in Postman) of the correct user.
2. Provide the correct id(mndatory field) of the Todo comment.

**Expected**

The ToDo comment should get completed and should not be visible in the Todo list afterwards.
