---
# (Required) Ensure all values are filled up
name: "User Surveys | When a user is transitioned from excluded teams to included teams, they should receive a user survey."
status: Active
priority: Normal
folder: New nps plugin
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

Set-up:

1. Have User 1, User 2 in Team A.
2. Have User 3, User 4 in Team B.
3. Login as an Sysadmin user.
4. Navigate to the System Console > Plugins > User surveys settings page.
5. Exclude Team A and launch a survey

Scenario 1: Verify the user receives the survey if user is moved out of Excluded team.

Steps:

1. Log into User 1's account and confirm No survey is received from Feedback bot.
2. Log in to Mattermost using Admin account.
3. Navigate to the System Console > Teams > Team A.
4. Remove User 1 from Team A.
5. Go to System Console > Teams > Team B.
6. Add User 1 to Team B.
7. Log into User 1's account.
8. Verify that User 1 receives the Survey. 

Note: The plugin caches user-team membership for 2 hours. If a user was in excluded team, then the team membership check result was cached and is only re-checked after 2 hours. Until 2 hours, the cached result is used.
