---
# (Required) Ensure all values are filled up
name: "Calls - Recording Banner Dismissed Works Cross-Window - Clicked on Popout"
status: Active
priority: Normal
folder: Calls
authors: "DHaussermann"
team_ownership:
- Calls
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: null
key: MM-T-recording-banner-dismissed-works-cross-window-clicked-on-popout
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T-recording-banner-dismissed-works-cross-window-clicked-on-popout: Calls - Recording Banner Dismissed Works Cross-Window - Clicked on Popout

---

**Step 1**

Start a call in a channel by clicking the "Start call" button in the channel header.

**Expected**

- The Calls widget becomes visible in the bottom left corner of the screen
- A message is posted in the channel indicating that a call has started

---

**Step 2**

Open the popout to control recording:

1. Click the expand icon in the call widget

**Expected**

- The expanded call view appears
- All call controls are visible and accessible

---

**Step 3**

Start recording the call by clicking the "Record" button in the expanded view.

**Expected**

- The recording button is visible and clickable
- After clicking, a recording banner appears in the call widget with the text "You're recording"

---

**Step 4**

Verify the recording banner renders correctly on the widget.

**Expected**

- The recording banner is visible on the widget
- The banner displays the text "You're recording"
- The banner has an "X" icon to close it

---

**Step 5**

Verify the recording banner renders correctly in the popout.

**Expected**

- The recording banner is also visible in the popout
- The banner displays the text "You're recording"
- The banner has an "X" icon to close it

---

**Step 6**

Close the recording prompt on the popout by clicking the "X" icon.

**Expected**

- The recording banner is dismissed on the popout
- Recording continues in the background

---

**Step 7**

Verify the prompt is also closed on the widget.

**Expected**

- The recording banner should also be dismissed on the widget
- This demonstrates cross-window synchronization

---

**Step 8**

Close and reopen the popout:

1. Close the popout
2. Click the expand icon again to reopen it

**Expected**

- The popout closes and reopens successfully
- The call continues without interruption
- The recording banner does not reappear, demonstrating state persistence

---

**Step 9**

Wait a couple of seconds to make sure the state has settled down.

**Expected**

- The recording banner remains hidden
- The recording continues in the background

---

**Step 10**

Stop the recording by clicking the "Stop recording" button.

**Expected**

- The stop recording confirmation modal appears
- The modal asks for confirmation to stop recording

---

**Step 11**

Confirm stopping the recording by clicking the confirmation button.

**Expected**

- The recording stops
- A notification appears indicating "Recording has stopped" on both the widget and in the popout

---

**Step 12**

Verify the recording ended prompt renders correctly on the widget and in the popout.

**Expected**

- The "Recording has stopped" notification is displayed on both the widget and in the popout
- The notification contains the correct text and is properly formatted in both locations

---

**Step 13**

Close the prompt on the popout by clicking the "X" icon.

**Expected**

- The notification is dismissed on the popout
- The call continues without the recording

---

**Step 14**

Verify the prompt is also closed on the widget.

**Expected**

- The notification should also be dismissed on the widget
- This demonstrates cross-window synchronization

---

**Step 15**

Leave the call by clicking the "Leave" button in the call widget.

**Expected**

- The call widget disappears
- The message in the channel is updated to indicate the call has ended
