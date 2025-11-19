---
# (Required) Ensure all values are filled up
name: "Direct Message Call Notifications"
status: Active
priority: Normal
folder: Calls
authors: "DHaussermann"
team_ownership:
- Calls
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Calls
component: null
tags: []
labels: []
tested_by_contributor: ""

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

# Direct Message Call Notifications

This test case covers notification behaviors for direct message calls.

## Scenario 1: DM Channel Notification

**Step 1**

1. Log in as User 1
2. Put the app in the background or minimize it
3. Have User 2 start a direct message with User 1
4. Have User 2 start a call

**Expected**

1. A call incoming notification should be visible
2. The notification should contain text: "[username] is inviting you to a call"
3. A desktop notification should be sent with the text: "[username] is inviting you to a call"
4. A notification sound should play
5. When User 2 leaves the call, the notification should no longer be visible

## Scenario 2: DM Channel Global Desktop None

**Step 1**

1. Log in as User 1
2. Set notification preferences to "Desktop: None"
3. Reload the page
4. Put the app in the background or minimize it
5. Have User 2 start a direct message with User 1
6. Have User 2 start a call

**Expected**

1. A call incoming notification should be visible
2. The notification should contain text: "[username] is inviting you to a call"
3. No desktop notification should be sent
4. No notification sound should play
5. When User 2 leaves the call, the notification should no longer be visible

## Scenario 3: DM Channel Global Sound False

**Step 1**

1. Log in as User 1
2. Set notification preferences to "Desktop: Mentions" and "Call Desktop Sound: False"
3. Reload the page
4. Put the app in the background or minimize it
5. Have User 2 start a direct message with User 1
6. Have User 2 start a call

**Expected**

1. A call incoming notification should be visible
2. The notification should contain text: "[username] is inviting you to a call"
3. A desktop notification should be sent
4. No notification sound should play
5. When User 2 leaves the call, the notification should no longer be visible
