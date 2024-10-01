---
# (Required) Ensure all values are filled up
name: "Android app | User can generate test notification from mobile app and verify on the Browser and Desktop and Mobile app"
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

1. In the Android app, go to Settings > Notifications.
2. Enable both in-app notifications and system-level notifications.
3. Send a message from the Android app (e.g., DM or mention @user).
4. Verify the following:
   - A notification pop-up is received on the desktop app.
   - A notification is visible in the web browser.
   - The DM or mention is marked as unread on both desktop and web browser.
5. Disable notifications in the Android OS for Mattermost.
6. Send a test notification again from the mobile app.
7. Verify no notifications are received on the Android app, but they still appear in the desktop app and browser.

### Scenario 2: Android Notification Permissions Disabled at the OS Level.

1. Disable notifications for Mattermost in Android Settings > Apps > Mattermost > Notifications.
2. Send a message or notification from the mobile app (e.g., mention or DM).
3. Verify that no notifications are received on the Android app.
4. Verify notifications are still received on the desktop app and browser.
5. Enable notifications again in Android settings and retest to confirm all notifications are functioning.

### Scenario 3: Notifications are limited by Do Not Disturb (DND) mode on mobile apps (iOS and Android).

Initial Setup:
Log into Mattermost on iOS and Android apps, and the desktop app.
Steps:
Enable Do Not Disturb mode in iOS and Android OS settings.
In the Mattermost mobile app, send a notification (mention or DM).
Verify that no notifications are received on the mobile apps.
Verify that notifications are still received on the desktop app.
Disable DND mode on mobile apps and retest to ensure notifications are received.
