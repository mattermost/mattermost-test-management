---
# (Required) Ensure all values are filled up
name: "Confirm that muting/unmuting DMs/GMs and synced channels individually works as expected."
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

**Scenario**: User has selected MSTeams as the primary platform.

1. Connect Mattermost account.
2. Navigate to a DM/GM or synced channel.
3. Manually unmute the channel on Mattermost.
4. Verify that it reflects in the settings and unmutes the channel.
5. Log into your MSTeams app and send a message in the synced channel or DM/GM.
6. Verify that on Mattermost, the user successfully receives the notification ping for the DMs/GMs and synced channels that are unmuted on the Mattermost app.

**Scenario**: User has selected Mattermost as the primary platform.

1. Connect Mattermost account.
2. Navigate to a DM/GM or synced channel.
3. Manually mute the channel.
4. Verify that it reflects in the settings and mutes the channel.
5. Log into your MSTeams app and send a message in the synced channel or DM/GM.
6. Verify that on Mattermost, the user does not not get notification ping for the DMs/GMs and synced channels that are muted on the Mattermost app.
