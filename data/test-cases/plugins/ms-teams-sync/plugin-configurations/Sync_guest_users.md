---
# (Required) Ensure all values are filled up
name: "Syncing guest users on MM"
status: Active
priority: Normal
folder: plugin-configurations
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

1. Set the time in `Sync user` and enable the `Sync guest users` option in the plugin settings on MM
2. Navigate to users in the system console on MM.

**Step 2**

1. After step 1, disable the `Sync guest users` option in the plugin settings on MM.
2. Navigate to users in the system console on MM and check the `guest users`.

**Expected**

The user should be able to verify all the `users` present on MM along with the `guest users` of MS Teams.
After step 2, the `guest users` created on MM should get deactivated on MM.