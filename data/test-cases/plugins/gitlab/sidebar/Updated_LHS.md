---
# (Required) Ensure all values are filled up
name: "LHS updates for the assigned MR, icons and tooltip names."
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

1. Connect the MM account to your Gitlab account by running the slash command `/zoom connect`.
2. Hover cursor over the icons in the LHS of Gitlab on MM.

**Step 2**

1. Connect the MM account to your Gitlab account by running the slash command `/zoom connect`.
2. Click on the `assigned merge request` button in the LHS of Gitlab on MM.

**Expected**

The tooltip over each icon should show the name of the respective button in the LHS on MM.
After step 2, the RHS for `Merge Requests Assigned` should open on MM.