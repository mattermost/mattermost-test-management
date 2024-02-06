---
# (Required) Ensure all values are filled up
name: "Confirm that DMs/GMs and synced channels are muted when a user creates a DM/GM channel."
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
2. Create a DM/GM channel and link it with MSTeams using slash command `/msteams-sync link <msteams-teams-id> <msteams-channel-id>`.
3. Log into your MSTeams app and send a message in linked channel.
4. Verify that on Mattermost, the user does not not get notification ping for the DMs/GMs and synced channels that are muted on the Mattermost app.
