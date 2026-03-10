---
# (Required) Ensure all values are filled up
name: "Preference-Based Call Notifications"
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

# Preference-Based Call Notifications

This test case covers how user preferences and states affect call notifications.

## Scenario 1: Do Not Ring Twice for Same Call (LHS to Widget)

**Step 1**

1. Log in as User 1
2. Have User 2 start a direct message with User 1 and start a call
3. Verify notification appears in the left-hand sidebar (LHS) and a notification sound plays
4. User 1 starts a call in a different channel

**Expected**

1. The original LHS notification should disappear
2. A new notification should appear above the call widget
3. The widget notification should show "Call from [username]"
4. No additional notification sound should play

## Scenario 2: Do Not Ring Twice for Same Call (Widget to LHS)

**Step 1**

1. Log in as User 1
2. Start a call in a channel
3. Have User 2 start a direct message with User 1 and start a call
4. Verify notification appears above the call widget but not in the LHS
5. User 1 ends their current call

**Expected**

1. The widget notification should disappear
2. A new notification should appear in the LHS
3. The LHS notification should show "[username] is inviting you to a call"
4. No additional notification sound should play

## Scenario 3: Stop Ringing Immediately When Joining Any Call

**Step 1**

1. Log in as User 1
2. Have User 2 start a direct message with User 1 and start a call
3. Verify notification appears and notification sound plays
4. User 1 starts a call in a different channel

**Expected**

1. The notification sound should stop immediately when User 1 joins a call

## Scenario 4: User is DND - No Ringing No Desktop Notification

**Step 1**

1. Log in as User 1
2. Set status to "Do Not Disturb"
3. Reload the page
4. Put the app in the background or minimize it
5. Have User 2 start a direct message with User 1 and start a call

**Expected**

1. A call incoming notification should be visible in the app
2. The notification should contain text: "[username] is inviting you to a call"
3. No desktop notification should be sent
4. No notification sound should play

## Scenario 5: User is OOO - No Ringing No Desktop Notification

**Step 1**

1. Log in as User 1
2. Enable automatic replies (Out of Office) with a message
3. Reload the page
4. Put the app in the background or minimize it
5. Have User 2 start a direct message with User 1 and start a call

**Expected**

1. A call incoming notification should be visible in the app
2. The notification should contain text: "[username] is inviting you to a call"
3. No desktop notification should be sent
4. No notification sound should play

## Scenario 6: Expanded View Notification - Change Channel, Dismiss, Join New Call

**Step 1**

1. Log in as User 1
2. Start a call in a channel
3. Click the expand button on the call widget to open the expanded view
4. Have User 2 start a direct message with User 1 and start a call

**Expected**

1. A condensed notification should appear in the expanded view
2. Clicking on the notification body should navigate to the DM channel in the main window
3. The main window should show User 2's name in the channel header

**Step 2**

1. Navigate back to the original channel
2. Click the "Join" button on the notification in the expanded view

**Expected**

1. A modal should appear with text "You're already in a call"
2. The modal should have "Cancel" and "Leave and join new call" buttons

**Step 3**

1. Click "Cancel" on the modal
2. Click the "Dismiss" button on the notification

**Expected**

1. The modal should close
2. The notification should disappear from the expanded view

**Step 4**

1. Have User 2 start another call
2. Verify the notification appears again
3. Click the "Join" button on the notification
4. Click "Leave and join new call" on the modal

**Expected**

1. The expanded view should close
2. User 1 should join User 2's call
3. The call channel link should show User 2's name

## Scenario 7: Ringing Stops on Last Leave and /call end

**Step 1**

1. Log in as User 1
2. Have User 2 start a direct message with User 1 and start a call
3. Verify notification appears and notification sound plays
4. User 2 leaves the call

**Expected**

1. The notification should disappear
2. The notification sound should stop

**Step 2**

1. User 2 starts another call
2. Verify notification appears and notification sound plays
3. User 2 uses the "/call end" slash command

**Expected**

1. The notification should disappear
2. The notification sound should stop
