---
# (Required) Ensure all values are filled up
name: "Disconnect-bot account slash command"
status: Active
priority: Normal
folder: Slash commands
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

1. Run the `/msteams-sync disconnect-bot` command by the account of system admin.

**Step 2**

1. Run the `/msteams-sync disconnect-bot` command by the account of system admin when the bot account is already disconnected.

**Expected**

The user should be able to disconnect the bot account from the connected account on MS Teams. Also, after step 2, the user should receive an error message that the account is not connected to any MS Teams account.