---
# (Required) Ensure all values are filled up
name: "Admin can change the primary platform on behalf of a user."
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

Test Setup:

1. Save Primary Platform as MSTeams for User A.

Steps:

1. Log into Mattermost with admin account.
2. Navigate to System Console > Plugin management and select MSTeams Sync plugin.
3. Scroll to Update end user settings.
4. Search for User A in the search box. (this can be 1 user or Bulk)
5. Select Mattermost as platform from the dropdown.
6. Click on Update settings button.
7. Log into Mattermost with User A account.
8. Go to User Settings > MSTeams settings section.
9. Confirm 'Mattermost' is selected as the primary platform.
