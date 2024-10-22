---
# (Required) Ensure all values are filled up
name: "Enable Desktop notification on Window/Mac/Ubuntu Desktop app"
status: Active
priority: Normal
folder: Notifications Banner
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: N/A
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

### Scenario: User Enables the desktop notifications

Steps:

1. Log into User's account.
2. Verify desktop app shows the global blue banner with message "We need your permission to show desktop notifications." and the button "Enable desktop notification".
3. Open Settings modal. Expand "Desktop and mobile notification section".
4. In Notifications section, there should be a message "Desktop notifications aren’t enabled" and the button "Enable desktop notification".
5. Click on "Enable desktop notification".
6. Verify a confirmation pop up is shown with message `Mattermost(<Instance link>)  would like to send you notifications.`.
7. **Allow** the notifications permissions.
8. Receive a notification ping from another user.
9. Verify the notification pops up and also can be seen in the Notification tray or Notification centre on WINDOWS and MAC.
10. Verify the Global banner is not visible anymore.
11. Open Settings modal. Expand "Desktop and mobile notification section".
12. Verify "Desktop notifications aren’t enabled" message is not visible anymore.

### Scenario: User Denies the desktop notifications on WINDOWS / MAC / Ubuntu OS

Steps:

1. Log into User's account.
2. Verify desktop app shows the global blue banner with message "We need your permission to show desktop notifications." and the button "Enable desktop notification".
3. Open Settings modal. Expand "Desktop and mobile notification section".
4. In Notifications section, there should be a message "Desktop notifications aren’t enabled" and the button "Enable desktop notification".
5. Click on "Enable desktop notification".
6. Verify a confirmation pop up is shown with message `Mattermost(<Instance link>)  would like to send you notifications.`.
7. **Deny** the notifications permissions.
8. Receive a notification ping from another user.
9. Verify the notification pop-up is not seen.
10. Verify the Global banner is not visible anymore.
11. Open Settings modal.
12. Verify a Alert tag is visible, saying "Permission required".
13. Expand "Desktop and mobile notification" section.
14. Verify "Desktop notifications permission was denied" message is visible. A buttons with text "Enable desktop notifications" and "How to enable notifications" are visible.

### Scenario: User Denies the desktop notifications on Browsers Chrome/Safari/Firefox/Edge

Steps:

1. In addition to above scenario, the only change to **Step 12** is that we will not see "Enable desktop notifications" button.
