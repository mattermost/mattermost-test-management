---
# (Required) Ensure all values are filled up
name: "Searching the linked channel in the list"
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

1. Enter the `mattermost linked channel` name in the search bar present above the `list of linked channels` in the RHS of the MS Teams sync plugin on MM.

**Step 2**

1. Enter the `mattermost unlinked channel` name or `invalid channel` name in the search bar present above the `list of linked channels` in the RHS of the MS Teams sync plugin on MM.

**Expected**

The user should be able to verify the searched linked channel in the `list of linked channels` in the RHS of the MS Teams sync plugin on MM.
After step 2, the user should get the `search not found` message in the RHS of the MS Teams sync plugin on MM.