---
# (Required) Ensure all values are filled up
name: "User Surveys | Configure Survey Duration"
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

Scenario 1: Verify Default Duration

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Verify that the "Survey Duration" is set to "30" days by default.

Scenario 2: Set Minimum Duration (5 days) and Maximum Duration (30 days)

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Enter "5" in the "Survey Duration" field.
4. Save the changes.
5. Verify that the "Survey Duration" is now set to "5".
6. Enter "30" in the "Survey Duration" field.
7. Save the changes.
8. Verify that the "Survey Duration" is now set to "30".

Scenario 3: Try to Set Invalid Duration (less than 5 or greater than 30)

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Enter an invalid value (less than 5 or greater than 30) in the "Survey Duration" field.
4. Save the changes.
5. Verify that an error message is displayed indicating the value is outside the allowed range.
