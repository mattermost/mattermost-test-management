---
# (Required) Ensure all values are filled up
name: "Show slash command"
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

1. Run the `/msteams-sync show` command in the desired MM channel.

**Step 2**

1. Run the `/msteams-sync show` command in the desired MM channel when the channel is not linked.

**Expected**

The user should be presented with the MS Teams team name and channel name linked to the Mattermost channel in which the user is present. In step 2, the user should be presented with a message that the link doesn't exist.
