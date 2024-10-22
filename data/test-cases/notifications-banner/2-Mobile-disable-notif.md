---
# (Required) Ensure all values are filled up
name: "Enable/Disable notification on Mobile app"
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

### Scenario: Enable notifications on mobile.

Steps:

1. Log into User's account on Mobile app.
2. Deny the Notifications permission.
3. Verify the banner is shown on the Channel list screen saying `Notifications disabled` and a `Settings` button.
4. Click on Settings button.
5. Verify the Settings page is opened. There should be an alert tag saying `Permission required`.
6. Click on Notifications option.
7. Verify a banner is shown with message `Notifications are not enabled`.
8. Verify a button with text `Enable notifications` is visible.
9. Click on the Enable notifications button.
10. Allow the Notifications.
11. Receive a message from other user.
12. Verify push notification are received on the mobile.
