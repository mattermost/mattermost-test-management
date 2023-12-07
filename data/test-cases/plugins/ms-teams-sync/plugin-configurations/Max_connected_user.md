---
# (Required) Ensure all values are filled up
name: "Maximum connected users"
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

1. Set the desired limit in `Max Connected Users` option in the plugin settings on MM.
2. When the count of users (connected atleast once) is less than the set limit then connect the new user to MS Teams on MM using the `/msteams-sync connect` command.

**Step 2**

1. Set the desired limit in `Max Connected Users` option in the plugin settings on MM.
2. When the count of users (connected atleast once) is equal to the set limit then edit and decrease the limit of `Max Connected Users` option in the plugin settings on MM.

**Step 3**

1. Set the desired limit in `Max Connected Users` option in the plugin settings on MM.
2. When the count of users (connected atleast once) is equal to the set limit then disconnect a user.
3. Connect a new user to MS Teams on MM using the `/msteams-sync connect` command.

**Step 4**

1. Set the desired limit in `Max Connected Users` option in the plugin settings on MM.
2. When the count of users (connected atleast once) is equal to the set limit then connect a new user to MS teams on MM using the `/msteams-sync connect` command.


**Expected**

The new user should be able to connect to their MS Teams account.
After step 2, any of the connected or non-connected users(connected atleast once) should not get affected.
After step 3, the new user should not be able to connect to their MS Teams account.
After step 4, the new user should not be able to connect to their MS Teams account.