---
# (Required) Ensure all values are filled up
name: "Ability to Export Data after upgrading to Professional license"
status: Active
priority: Normal
folder: New UI
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

Test requirements:

1. Have an instance with server version >= 9.6 without license.

Steps:

Scenario: Purchase a license.

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. Verify the `Export` button is feature locked. Hover on the button to verify the tool tip says its a `Professional feature`.
4. Click on the `Export` button. Verify a modal with title `Upgrade to export data reports` is displayed.
5. Click on `View Plans`. Verify pricing modal is displayed.
6. Click on `Upgrade` button in the Professional card.
7. Purchase the license.
8. Verify that the Export functionality is now available.

Scenario: Upload a license.

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. Verify the `Export` button is feature locked. Hover on the button to verify the tool tip says its a `Professional feature`.
4. Navigate to `Edition and License`.
5. Upload a Professional license.
6. Navigate back to `Users` in User Management.
7. Verify that the Export functionality is now available.

Scenario: Start an Enterprise trial.

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. Verify the `Export` button is feature locked. Hover on the button to verify the tool tip says its a `Professional feature`.
4. Start a Enterprise trial.
5. Navigate back to `Users` in User Management.
6. Verify that the Export functionality is now available.

Scenario: Export Data for different durations

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. Under `Duration` on the top right side, select `Last 30 days`.
4. Click on `Export` button
5. Verify the Admin receives a message from system-bot stating `You've started an export of user data for the last 30 days. When the export is complete, a CSV file will be delivered to you in this direct message.`

Note:
| Duration | Message |
| ---------------| ------------- |
| All time | You've started an export of user data for all time |
| previous month | You've started an export of user data for the previous month |
| last 6 months | You've started an export of user data for the last 6 months |
