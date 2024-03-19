---
# (Required) Ensure all values are filled up
name: "User Surveys | Survey cadence"
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

Scenario 1: Verify Default Cadence

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Verify that the "Survey Cadence" is set to "Quarterly" by default.
4. Verify the date corresponds to the last day of the current quarter (March 31st, June 30th, September 30th, December 31st).

Scenario 2: Change Cadence to Twice a Year

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Select "Twice a Year" from the "Survey Cadence" dropdown menu.
4. Save the changes.
5. Verify that the "Survey Cadence" is now set to "Twice a Year".
6. Verify the date corresponds to the last day of the current half-year (June 30th, December 31st)

Scenario 3: Change Cadence to Yearly

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Select "Yearly" from the "Survey Cadence" dropdown menu.
4. Save the changes.
5. Verify that the "Survey Cadence" is now set to "Yearly".
6. Verify the date corresponds to the last day of the current year (December 31st).

Scenario 4: Change Cadence to One Time

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Select "One Time" from the "Survey Cadence" dropdown menu.
4. Save the changes.
5. Verify that the "Survey Cadence" is now set to "One Time".

Expected Result:

1. "Survey Cadence" displays "One Time".
2. "Send Next Survey At" field displays a date at least one day in the future.
