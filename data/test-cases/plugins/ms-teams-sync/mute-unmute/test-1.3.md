---
# (Required) Ensure all values are filled up
name: "Confirm that selecting "Mattermost" as the primary platform does not auto-mute DMs/GMs and synced channels"
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
2. Choose "Mattermost" as the primary platform.
3. Verify that DMs/GMs and synced channels are not muted.
