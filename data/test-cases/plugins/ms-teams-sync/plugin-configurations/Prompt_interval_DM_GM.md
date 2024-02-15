---
# (Required) Ensure all values are filled up
name: "Message in prompt interval to connect the account in DM/GM"
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

1. Set the time for `Prompt interval for DMs and GMs` option in the plugin settins on MM.
2. Send a message in DM/GM just after setting the time or after the interval time is completed from the disconnected user on MM.

**Expected**

The user should get an ephermal post with a message to connect their account to MS Teams.