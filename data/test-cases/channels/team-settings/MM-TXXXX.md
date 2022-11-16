---
# (Required) Ensure all values are filled up
name: "User tries to go to archived team"
status: Active
priority: Normal
folder: Team Settings
authors: ""
team_ownership: 
- Web Platform

# (Optional)
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Team Settings
component: null
tags: []
labels:
- se-prod
- team-settings

# (Optional) Test type and tools
cypress: in Production
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

1. Create two new teams as admin
1. Create a new user and add them to both teams
1. Login with the new user
1. Verify that the user is in both teams
1. Logout and clear local storage
1. Login as admin
1. Archive one of the teams
1. Login with the new user

**Expected**

- Verify that the user is in the unarchived team and not in the archived team
- Verify when user tries to go to the archived team by url, they are redirected to the team not found page
