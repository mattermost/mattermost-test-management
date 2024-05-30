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

Scenario 1: Verify Admin can chose Date and time to send the survey.

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. For `Send next Survey at`, verify the default date is 30 days from current date and the default time will be 09:00.
4. Set Future Date and Time.
5. Verify the Admin can see the Launch date and time in the header, `Next survey scheduled for <Time> UTC on <Month> <Day>`.
6. Verify the Admin can see Expiry date and time in the header, `Expires on <Month> <Day>, <Year>`
7. Save the settings.
8. Login with users account.
9. Verify that the user has received the survey.
