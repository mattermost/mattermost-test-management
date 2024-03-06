---
# (Required) Ensure all values are filled up
name: "Error while unlinking a channel on MM"
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

1. Any error occurred while unlinking a channel from the RHS of the MS Teams sync plugin on MM.

**Step 2**

1. Any error occurred while unlinking a channel from the RHS of the MS Teams sync plugin on MM.
2. Click on the `Try Again` button in the `Unlink error` dialog.

**Step 3**

1. Any error occurred while unlinking a channel from the RHS of the MS Teams sync plugin on MM.
2. Click on the `Cancel` or `x` button in the `Unlink error` dialog.

**Expected**

The `Unlink error` dialog should open on MM.
After step 2, unlinking should again start for the same channels on MM.
After step 3, the `Unlink error` dialog should close and the RHS of MS Teams sync plugin should persist its state.