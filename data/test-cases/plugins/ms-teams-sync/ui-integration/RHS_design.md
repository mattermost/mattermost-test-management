---
# (Required) Ensure all values are filled up
name: "RHS design with respect to enabling and disabling App bar"
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

1. When the `App bar` is enabled, click on the MS Teams sync icon and open the RHS.

**Step 2**

1. When the `App bar` is disabled, click on the MS Teams sync icon in the channel header and open the RHS.

**Expected**

The user should be able to view the RHS of MS Teams sync plugin along with the `App bar` on the side on MM.
After step 2, the user should be able to view the RHS of MS Teams sync plugin on MM.