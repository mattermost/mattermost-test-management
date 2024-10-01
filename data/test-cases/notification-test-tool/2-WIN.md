---
# (Required) Ensure all values are filled up
name: "WIN OS | User can generate test notification from a browser and verify on the Desktop and Mobile app"
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

### Scenario 5: System-level notifications (Windows 10/11).

1. Log into the Mattermost desktop app.
2. Go to Settings > Notifications in Mattermost and enable notifications.
3. Open Settings > System > Notifications in Windows.
4. Ensure notifications for Mattermost are enabled.
5. Click Send a test notification.
6. Verify the notification appears in the Windows Action Center.
7. Disable Mattermost notifications in Windows system settings and test again to ensure no notification is shown.

### Scenario 6: Focus Assist (Windows).

1. Log into the server on the desktop app or a browser.
2. Enable Focus Assist in Windows settings.
3. Go to Settings > Notifications in Mattermost.
4. Click Send a test notification.
5. Verify that the desktop app does not show notifications during Focus Assist mode but receives them when it is disabled.
