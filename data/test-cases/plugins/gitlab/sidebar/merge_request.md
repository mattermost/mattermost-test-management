---
# (Required) Ensure all values are filled up
name: "Merge request message is rendered properly in the RHS of gitlab on MM"
status: Active
priority: Normal
folder: Sidebar
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

1. Generate a access request to your desired public project/group from another user on Gitlab.
2. Navigate to MM and click on the `To-do list` icon in the LHS menu on MM.
3. Check the desired member access request in the RHS of `To-do list` on MM.

**Step 2**

1. Accept or reject any desired member access request on Gitlab.
2. Navigate to MM and click on the `To-do list` icon in the LHS menu on MM.
3. Check the desired member access request in the RHS of `To-do list` on MM.

**Expected**

The member access request to the desired public project/group should be shown with proper description of the request and in proper UI in the RHS of Gitlab on MM.
After step 2, the desired member access request should be removed from the `To-do list` in RHS of Gitlab on MM.