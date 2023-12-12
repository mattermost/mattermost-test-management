---
# (Required) Ensure all values are filled up
name: "Error while connecting a user through RHS"
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

1. Any error occured while connecting the user to their MS Teams account.

**Expected**

The current RHS state should persist and a toast message should appear in the RHS of MS Teams sync plugin regarding the failure of the user account connection due to an error.