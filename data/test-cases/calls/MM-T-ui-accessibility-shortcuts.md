---
# (Required) Ensure all values are filled up
name: "Calls Plugin - UI and Accessibility Keyboard Shortcuts"
status: Active
priority: Normal
folder: Calls
authors: "@DHaussermann"
team_ownership:
- Calls
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Calls
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: in Production
rainforest: []
manual_test_environments: 
- Desktop - macOS
- Desktop - Win
- Desktop - Linux

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T-ui-accessibility-shortcuts: Calls Plugin - UI and Accessibility Keyboard Shortcuts

---

This test case verifies that keyboard shortcuts for UI controls and accessibility features work correctly in the Calls plugin.

### Scenario 1: Toggle Participants List with Keyboard Shortcuts

**Step 1**

1. Log in to a Mattermost instance with the Calls plugin enabled
2. Navigate to a channel and start a call
3. Verify that the participants list is hidden by default
4. Press the keyboard shortcut to toggle the participants list:
   - On macOS: `⌘+⇧+P` (Command+Shift+P)
   - On Windows/Linux: `Ctrl+Shift+P`

**Expected**

- The participants list should appear and be visible

**Step 2**

1. Press the keyboard shortcut to toggle the participants list again:
   - On macOS: `⌘+⇧+P` (Command+Shift+P)
   - On Windows/Linux: `Ctrl+Shift+P`

**Expected**

- The participants list should be hidden

### Scenario 2: Accessibility Conflict Resolution

**Step 1**

1. Log in to a Mattermost instance with the Calls plugin enabled
2. Navigate to a channel and start a call
3. Ensure your microphone is muted
4. Click the mute button to unmute your microphone
5. Press `Alt+P` to open the participants list

**Expected**

- The participants list should appear and be visible
- Your microphone should remain unmuted

**Step 2**

1. With the participants list open, press the `Space` key

**Expected**

- The participants list should remain visible
- Your microphone should remain unmuted
- The Space key should not trigger the mute toggle when the participants list has focus

**Step 3**

1. With the participants list still open, press the keyboard shortcut to toggle mute:
   - On macOS: `⌘+⇧+Space` (Command+Shift+Space)
   - On Windows/Linux: `Ctrl+Shift+Space`

**Expected**

- Your microphone should be muted
- The mute button should indicate that you are muted
- The mute shortcut should work even when the participants list has focus
