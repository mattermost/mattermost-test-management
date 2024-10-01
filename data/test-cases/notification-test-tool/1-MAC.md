---
# (Required) Ensure all values are filled up
name: "MAC OS | User can generate test notification from a browser and verify on the Desktop and Mobile app"
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

### Scenario 1: User can generate notification successfully from Chrome/Safari/Firefox and verifies it on Desktop and Mobile app.

1. Log into server using any browser.
2. Enable browser notification to be received for this server.
3. Go to the Settings > Notification.
4. Click on `Send a test notification`.
5. Verify the browser pop up the notification from @system-bot.
6. Verify the DM list has an unread message from @system-bot.
7. Verify the Desktop pop-up is also visible in the notification center.
8. Look into mobile app notification section.
9. Verify the DM notification from @system-bot is received.

### Scenario 2: User should not receive notification when the system is in **Focus mode**.

1. Log into server using any browser.
2. Enable browser notification to be received for this server.
3. Go to the Settings > Notification.
4. Click on `Send a test notification`.
5. Verify the notification is not received on the Browser and Desktop.
6. Verify the notification is received on the mobile app.

### Scenario 3: User can customize notification permissions at the system level (Mac OS).

1. Log into the Mattermost desktop app.
2. Open System Preferences > Notifications on macOS.
3. Set Mattermost notifications to Allow.
4. In the Mattermost app, go to Settings > Notifications.
5. Click on Send a test notification.
6. Verify a system pop-up notification is visible.
7. Verify the notification is also available in the macOS Notification Center.
8. Change Mattermost notification settings in macOS to Do Not Disturb.
9. Click Send a test notification again.
10. Verify no notification pop-up is visible on browser and desktop app.

### Scenario 4: Browser notifications are disabled (Mac OS).

1. Open Chrome or Safari.
2. Log into the server.
3. Ensure browser notification permissions for Mattermost are disabled.
4. Go to Settings > Notifications in Mattermost.
5. Click Send a test notification.
6. Verify no notification is received in the browser or system.
7. Enable notifications via Browser Settings > Privacy and Security > Notifications.
8. Test again to ensure the browser pop-up appears.
