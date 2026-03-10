---
# (Required) Ensure all values are filled up
name: "Stacked Call Notifications"
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

# Stacked Call Notifications

This test case covers behaviors when multiple call notifications are received.

## Scenario 1: Two Notifications Stacked - No Ring for Second Call When First is Ringing

**Step 1**

1. Log in as User 1
2. Put the app in the background or minimize it
3. Have User 2 start a direct message with User 1 and start a call
4. Have User 3 open a group message with User 1 and User 2 and start a call

**Expected**

1. The first call notification should be visible showing "[username] is inviting you to a call"
2. A condensed notification for the second call should be visible showing "Call from [username] with [username2]"
3. Desktop notifications should be sent for both calls
4. A notification sound should play only for the first call
5. When User 2 leaves the first call:
   - The condensed notification should disappear
   - The main notification should now show the group message call details
   - No additional notification sound should play

## Scenario 2: Two Notifications Stacked - Ring for Second Call When First is Finished Ringing

**Step 1**

1. Log in as User 1
2. Configure the system to have a short ring duration (e.g., 500ms)
3. Have User 2 start a direct message with User 1 and start a call
4. Have User 3 open a group message with User 1 and User 2 and start a call

**Expected**

1. The first call notification should be visible
2. A condensed notification for the second call should be visible
3. Notification sounds should play for both calls (the second sound plays after the first ring completes)

## Scenario 3: Stacked Notifications While in a Call - Webapp

**Step 1**

1. Log in as User 1
2. Start a call in a channel
3. Put the app in the background or minimize it
4. Have User 2 start a direct message with User 1 and start a call
5. Have User 3 open a group message with User 1 and User 2 and start a call

**Expected**

1. Desktop notifications should be sent for both incoming calls
2. No notification sounds should play (user is already in a call)
3. Condensed notifications should appear above the call widget:
   - The earliest call should be closest to the widget
   - First notification should show "Call from [username]"
   - Second notification should show "Call from [username] with [username2]"
4. No notifications should appear in the main webapp UI
5. When User 1 leaves their call:
   - Notifications should now appear in the webapp UI
   - Still no notification sounds should play

## Scenario 4: Stacked Notifications While in a Call - Global Widget

**Step 1**

1. Log in as User 1
2. Open the calls widget in a channel
3. Have User 2 start a direct message with User 1 and start a call
4. Have User 3 open a group message with User 1 and User 2 and start a call

**Expected**

1. Condensed notifications should appear above the widget:
   - The earliest call should be closest to the widget
   - First notification should show "Call from [username]"
   - Second notification should show "Call from [username] with [username2]"
2. When User 3 leaves their call, only the first notification remains
3. When User 2 leaves their call, all notifications disappear

## Scenario 5: Reloading and New Client User Will See Notifications Immediately

**Step 1**

1. Log in as User 1
2. Have User 2 start a direct message with User 1 and start a call
3. Have User 3 open a group message with User 1 and User 2 and start a call
4. Verify notifications are visible
5. Reload the page

**Expected**

1. After reload, both notifications should still be visible:
   - Main notification showing "[username] is inviting you to a call"
   - Condensed notification showing "Call from [username] with [username2]"

**Step 2**

1. Open a new client instance logged in as User 1

**Expected**

1. In the new client, both notifications should be visible:
   - Main notification showing "[username] is inviting you to a call"
   - Condensed notification showing "Call from [username] with [username2]"

## Scenario 6: Dismiss Works Across Clients and is Recorded

**Step 1**

1. Log in as User 1 in Client A
2. Have User 2 start a direct message with User 1 and start a call
3. Have User 3 open a group message with User 1 and User 2 and start a call
4. Open a second client (Client B) logged in as User 1
5. Verify both notifications are visible in both clients
6. In Client A, dismiss the first notification

**Expected**

1. In Client A:
   - The condensed notification should disappear
   - Only the group message call notification should remain visible
2. In Client B:
   - The condensed notification should also disappear
   - Only the group message call notification should remain visible
3. If Client B is reloaded, it should still only show the group message call notification
