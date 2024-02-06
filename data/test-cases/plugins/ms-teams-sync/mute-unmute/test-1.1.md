---
# (Required) Ensure all values are filled up
name: "Verify that the user is prompted to choose their primary platform (Mattermost or MSTeams) during the initial account connection"
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
2. Observe the screen to confirm that the user is prompted with the question about their primary platform.
3. Choose Mattermost and click on `Continue` button.
4. Go to User Settings > MSTeams settings section.
5. Confirm 'Mattermost' is selected as the primary platform.
