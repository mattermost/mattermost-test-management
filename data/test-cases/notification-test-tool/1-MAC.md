---
# (Required) Ensure all values are filled up
name: "User can generate test notification from a browser and verify on the Desktop and Mobile app"
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
