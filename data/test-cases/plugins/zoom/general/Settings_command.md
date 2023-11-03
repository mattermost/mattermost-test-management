---
# (Required) Ensure all values are filled up
name: "Settings slash command"
status: Active
priority: Normal
folder: general
authors: "@AayushChaudhary0001"
team_ownership: 
- Change Team Name
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

1. Run the "/zoom settings" slash command.

**Step 2**

1. Click on the desired option from the custom post presented to the user.

**Step 3**

1. Run the "/zoom start<meeting topic>" slash command.

**Expected**

The user should receive the custom post asking for approval to use the account to start a meeting after step 1. After step 2, the custom post should get frozen containing the latest response selected by the user. After step 3, the plugin should provide the response according to the latest response selected by the user.