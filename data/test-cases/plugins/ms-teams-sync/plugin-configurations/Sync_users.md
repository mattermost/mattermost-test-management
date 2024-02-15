---
# (Required) Ensure all values are filled up
name: "Syncing users on MM"
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

1. Set the time in `Sync user` option in the plugin settings on MM.
2. Navigate to `users` in system console on MM.

**Step 2**

1. After step 1, check for users who already existed on MM.

**Step 3**

1. Set the time in `Sync user` option in the plugin settings on MM.
2. Deativate a user on MS Teams after it is synced.
3. Navigate to `users` in the system console on MM 

**Expected**

The user should be able to verify all the `users` created on MS Teams.
After step 2, no existing user should be created again as a remote user.
After step 3, the synced user should get deactivated on MM.