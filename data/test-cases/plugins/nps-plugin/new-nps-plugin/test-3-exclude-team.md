---
# (Required) Ensure all values are filled up
name: "User Surveys | Exclude Team from survey"
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

Scenario 1: Exclude teams from survey

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Verify that by default the field is empty.
4. Search and add multiple teams to be excluded.
5. Save the changes.
6. Verify that the fields displays team names to be excluded.

Scenario 2: Verify the user does not receive survey if part of team that's excluded.

Set-up:

1. Create 3 teams and 3 users.
2. Team A to have User 1.
3. Team B to have User 1 and User 2.
4. Team C to have User 1, User 2 and User 3.

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Exclude Only Team A and launch a survey

Expected:

- Login into User 1's account and verify survey is not received.
- Login into User 2's account and verify survey is received.
- Login into User 3's account and verify survey is received.

4. Login as an Sysadmin user.
5. Navigate to the System Console > Plugins > User surveys settings page.
6. Exclude Only Team B and launch a survey

Expected:

- Login into User 1's and User 2's account and verify survey is not received.
- Login into User 3's account and verify survey is received.

7. Login as an Sysadmin user.
8. Navigate to the System Console > Plugins > User surveys settings page.
9. Exclude Only Team C and launch a survey

Expected:

- Login into User 1's, User 2's and User 3's account and verify survey is not received.
