---
# (Required) Ensure all values are filled up
name: "Confirm that selecting MSTeams as the primary platform auto-mutes all DMs/GMs and synced channels."
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

1. Connect Mattermost account.
2. Choose "MSTeamss" as the primary platform and click on `Continue` button.
3. Go to User Settings > MSTeams settings section.
4. Confirm 'Mattermost' is selected as the primary platform.
5. Log into your MSTeams app and send a message in the synced channel or DM/GM.
6. Verify that on Mattermost, the user does not not get notification ping for the DMs/GMs and synced channels that are muted on the Mattermost app.
