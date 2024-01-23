---
# (Required) Ensure all values are filled up
name: "Confirm that channels are muted when a channel becomes linked."
status: Active
priority: Normal
folder: Mute unmute
authors: "@yasserfaraazkhan"
team_ownership: 
- ICU
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

**Scenario**: User has selected MSTeams as primary platform

1. Connect Mattermost account.
2. Link a channel using command `/msteams-sync link <msteams-teams-id> <msteams-channel-id>`.
3. Log into your MSTeams app and send a message in linked channel.
4. Verify that on Mattermost, the user does not not get notification ping for the DMs/GMs and synced channels that are muted on the Mattermost app.
