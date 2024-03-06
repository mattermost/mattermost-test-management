---
# (Required) Ensure all values are filled up
name: "Syncing DM and GM messages"
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

1. Enable the `Sync direct and group message` option in the plugin settings on MM
2. Send message in the DM/GM on MM or MS Teams.
3. Navigate to the DM/GM on MS Teams or MM respectively.

**Step 2**

1. Disable the `Sync direct and group message` option in the plugin settings on MM
2. Send message in the DM/GM on MM or MS Teams.
3. Navigate to the DM/GM on MS Teams or MM respectively.

**Expected**

The user should be able to verify the message synced in the DM/GM on MS Teams or MM respectively.
After step 2, the message should not get synced in the DM/GM on MS Teams or MM respectively.