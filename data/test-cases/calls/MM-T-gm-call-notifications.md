---
# (Required) Ensure all values are filled up
name: "Group Message Call Notifications"
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

# Group Message Call Notifications

This test case covers notification behaviors for group message calls.

## Scenario 1: GM Channel Notification

**Step 1**

1. Log in as User 1
2. Put the app in the background or minimize it
3. Have User 2 open a group message with User 1 and User 3
4. Have User 2 start a call

**Expected**

1. A call incoming notification should be visible
2. The notification should contain text: "[username] is inviting you to a call with [username2]"
3. A desktop notification should be sent
4. A notification sound should play
5. When User 2 leaves the call, the notification should no longer be visible

## Scenario 2: GM Channel Global Desktop None

**Step 1**

1. Log in as User 1
2. Set notification preferences to "Desktop: None"
3. Reload the page
4. Put the app in the background or minimize it
5. Have User 2 open a group message with User 1 and User 3
6. Have User 2 start a call

**Expected**

1. A call incoming notification should be visible
2. The notification should contain text: "[username] is inviting you to a call with [username2]"
3. No desktop notification should be sent
4. No notification sound should play
5. When User 2 leaves the call, the notification should no longer be visible

## Scenario 3: GM Channel Global Sound False

**Step 1**

1. Log in as User 1
2. Set notification preferences to "Desktop: Mentions" and "Call Desktop Sound: False"
3. Reload the page
4. Put the app in the background or minimize it
5. Have User 2 open a group message with User 1 and User 3
6. Have User 2 start a call

**Expected**

1. A call incoming notification should be visible
2. The notification should contain text: "[username] is inviting you to a call with [username2]"
3. A desktop notification should be sent
4. No notification sound should play
5. When User 2 leaves the call, the notification should no longer be visible

## Scenario 4: GM Channel Preference Sound Off

**Step 1**

1. Log in as User 1
2. Navigate to a group message with User 2 and User 3
3. Set channel notification preferences to "Desktop Sound: Off"
4. Put the app in the background or minimize it
5. Have User 2 open the same group message
6. Have User 2 start a call

**Expected**

1. A call incoming notification should be visible
2. The notification should contain text: "[username] is inviting you to a call with [username2]"
3. A desktop notification should be sent
4. A notification sound should still play (call notifications override channel sound preferences)
5. When User 2 leaves the call, the notification should no longer be visible

## Scenario 5: GM Channel Preference Desktop Notification Never

**Step 1**

1. Log in as User 1
2. Navigate to a group message with User 2 and User 3
3. Set channel notification preferences to "Desktop: Never"
4. Put the app in the background or minimize it
5. Have User 2 open the same group message
6. Have User 2 start a call

**Expected**

1. A call incoming notification should be visible
2. The notification should contain text: "[username] is inviting you to a call with [username2]"
3. No desktop notification should be sent
4. A notification sound should play
5. When User 2 leaves the call, the notification should no longer be visible

## Scenario 6: GM Channel Preference Mute

**Step 1**

1. Log in as User 1
2. Navigate to a group message with User 2 and User 3
3. Set channel notification preferences to "Mark Unread: Only Mentions"
4. Put the app in the background or minimize it
5. Have User 2 open the same group message
6. Have User 2 start a call

**Expected**

1. A call incoming notification should be visible
2. The notification should contain text: "[username] is inviting you to a call with [username2]"
3. No desktop notification should be sent
4. No notification sound should play
5. When User 2 leaves the call, the notification should no longer be visible
