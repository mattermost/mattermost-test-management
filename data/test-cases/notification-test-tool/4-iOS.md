---
# (Required) Ensure all values are filled up
name: "iOS app | User can generate test notification from mobile app and verify on the Browser and Desktop and Mobile app"
status: Active
priority: Normal
folder: Notification Test Tool
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

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

Prerequisite:

1. Log in to Browser, Mobile and desktop using 1 user account.

### Scenario 1: Notifications generated from iOS app and verified on Desktop and Web Browser.

Initial Setup:

1. Log into the Mattermost mobile app on iOS.
2. Log into the same user account on the desktop (macOS/Windows/Ubuntu) and a web browser (Chrome/Safari/Firefox).
3. Ensure notifications are allowed on all devices.

Steps:

1. In the iOS app, go to Settings > Notifications.
2. Enable in-app notifications and system-level notifications.
3. Send a message from the iOS app (e.g., DM or mention @user in a channel).
4. Verify the following:
   - A notification pop-up is received on the desktop.
   - A notification is visible in the browser.
   - The DM or mention is shown as unread in the desktop app and browser.
5. Disable notifications in the iOS Settings > Notifications for the Mattermost app.
6. Send a test notification again from the mobile app.
7. Verify no notifications are received on the iOS app, but they still appear in the desktop app and browser.

### Scenario 2: iOS Notification Permissions Disabled at the OS Level.

1. In iOS Settings > Notifications, disable notifications for Mattermost.
2. In the mobile app, go to Settings > Notifications and send a test notification.
3. Verify that no notifications are received on the iOS app.
4. Verify notifications are still received on the desktop app and browser.
5. Enable notifications again in iOS Settings > Notifications and retest to verify that notifications work as expected across all devices.
