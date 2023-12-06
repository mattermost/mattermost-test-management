---
# (Required) Ensure all values are filled up
name: "Link channel slash command"
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

1. Run the `/msteams-sync link <msteams-teams-id> <msteams-channel-id>` command in the desired MM channel by the account of the user who have all the channel permissions.

**Step 2**

1. Run the `/msteams-sync link <msteams-teams-id> <msteams-channel-id>` when the desired channel is already linked to a MS Teams channel by the account of the user who have all the channel permissions.

**Expected**

The user should be able to link the desired MM channel to the desired MS Teams channel. Also, on step 2, the user should receive a message that this channel is already linked to a MS Teams channel.