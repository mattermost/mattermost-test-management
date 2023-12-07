---
# (Required) Ensure all values are filled up
name: "Show-links slash command"
status: Active
priority: Normal
folder: Slash commands
authors: "@AayushChaudhary0001"
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

1. Run the `/msteams-sync show-links` command in the desired MM channel through system admin account.

**Step 2**

1. Run the `/msteams-sync show-links` command in the desired MM channel through system admin account when no channel is linked.

**Expected**

The user should be presented with a list of all the Mattermost channels linked to MS Teams. On step 2, the user should be presented with a message that no links are present.