---
# (Required) Ensure all values are filled up
name: "Confirm that channels are unmuted when a channel becomes unlinked."
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
2. Unlink a channel using slash command `/msteams-sync unlink <msteams-teams-id> <msteams-channel-id>`.
3. Verify that the channel unlinked and is showing unmuted in the channel's `View info` in the RHS.
