---
# (Required) Ensure all values are filled up
name: "Updated RHS with respect to slash commands"
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

1. Connect the user to their MS Teams account using the `/msteams-sync connect` slash command.
2. Click on MS Teams sync icon in App bar or channel header and open the RHS.

**Step 2**

1. Disconnect the user from their MS Teams account using the `/msteams-sync disconnect` slash command.
2. Click on MS Teams sync icon in App bar or channel header and open the RHS.

**Expected**

The user account should be connected to their MS Teams account and the same should be reflected in the RHS on MM.
After step 2,the user account should be disconnected from their MS Teams account and the user should be able to view the `Connect account` button in the RHS on MM.