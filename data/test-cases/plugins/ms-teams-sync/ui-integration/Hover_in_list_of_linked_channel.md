---
# (Required) Ensure all values are filled up
name: "Hovering over a row in the linked channel list"
status: Active
priority: Normal
folder: ui-integration
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

1. Hover the cursor over the row of linked channels in the list in RHS of the MS Teams sync plugin on MM.

**Expected**

The row should get highlighted upon hovering the cursor and the unlink button should become visible in the RHS of the MS Teams sync plugin on MM.