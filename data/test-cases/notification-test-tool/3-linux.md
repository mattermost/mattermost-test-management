---
# (Required) Ensure all values are filled up
name: "LINUX OS | User can generate test notification from a browser and verify on the Desktop and Mobile app"
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

### Scenario 1: System notifications via GNOME/KDE (Ubuntu).

1. Log into the Mattermost desktop app on Ubuntu.
2. Ensure system notification settings allow Mattermost.
3. In Mattermost, go to Settings > Notifications.
4. Click Send a test notification.
5. Verify the notification appears in the GNOME or KDE notification area.
6. Disable notifications in Ubuntu settings.
7. Send a Test Notification again.
8. Verify no notification is shown on the system.
9. (on mobile app) If user has logged in mobile app. they should receive a mobile notification.

### Scenario 2: Browser notifications in Firefox (Ubuntu).

1. Open Firefox on Ubuntu and log into the server.
2. Disable browser notifications for Mattermost.
3. Go to Settings > Notifications in Mattermost.
4. Click Send a test notification.
5. Verify that no notification is received in Firefox or the system.
6. Re-enable notifications in Firefox and verify a pop-up appears when tested again.
