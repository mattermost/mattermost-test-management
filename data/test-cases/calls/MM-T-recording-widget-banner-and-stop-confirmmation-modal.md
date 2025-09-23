---
# (Required) Ensure all values are filled up
name: "Calls - Recording Widget Banner and Stop Confirmation Modal"
status: Active
priority: Normal
folder: Calls
authors: DHaussermann"
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
key: MM-T-recording-widget-banner-and-stop-confirmation-modal
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T-recording-widget-banner-and-stop-confirmation-modal: Calls - Recording Widget Banner and Stop Confirmation Modal

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

Close the recording prompt on the widget by clicking the "X" icon.

**Expected**

- The recording banner is dismissed on the widget
- Recording continues in the background

---

**Step 5**

Verify the prompt is also closed on the popout.

**Expected**

- The recording banner should also be dismissed on the popout
- This demonstrates synchronization between widget and popout views

---

**Step 6**

Close and reopen the popout:

1. Close the popout
2. Click the expand icon again to reopen it

**Expected**

- The popout closes and reopens successfully
- The call continues without interruption

---

**Step 7**

Verify the prompt does not reappear when reopening the popout.

**Expected**

- The recording banner should not reappear when reopening the popout
- This demonstrates that the state is remembered

---

**Step 8**

Stop the recording by clicking the "Stop recording" button.

**Expected**

- The stop recording confirmation modal appears
- The modal asks for confirmation to stop recording

---

**Step 9**

Confirm stopping the recording by clicking the confirmation button.

**Expected**

- The recording stops
- A notification appears indicating "Recording has stopped"

---

**Step 10**

Close the prompt on the widget.

**Expected**

- The notification is dismissed on the widget
- The call continues without the recording

---

**Step 11**

Verify the prompt is also closed on the popout.

**Expected**

- The notification should also be dismissed on the popout
- This demonstrates synchronization between widget and popout views

---

**Step 12**

Leave the call by clicking the "Leave" button in the call widget.

**Expected**

- The call widget disappears
- The message in the channel is updated to indicate the call has ended
