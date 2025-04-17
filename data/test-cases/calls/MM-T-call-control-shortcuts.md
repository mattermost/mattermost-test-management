---
# (Required) Ensure all values are filled up
name: "Calls Plugin - Call Control Keyboard Shortcuts"
status: Active
priority: Normal
folder: Calls
authors: "DHaussermann"
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

## MM-T-call-control-shortcuts: Calls Plugin - Call Control Keyboard Shortcuts

---

This test case verifies that keyboard shortcuts for basic call controls work correctly in the Calls plugin.

### Scenario 1: Join and Leave Call with Keyboard Shortcuts

**Step 1**

1. Log in to a Mattermost instance with the Calls plugin enabled
2. Navigate to a channel
3. Press the keyboard shortcut to join a call:
   - On macOS: `⌘+⌥+S` (Command+Option+S)
   - On Windows/Linux: `Ctrl+Alt+S`

**Expected**

- The calls widget should appear
- The loading overlay should disappear, indicating you've joined the call

**Step 2**

1. Press the keyboard shortcut to leave the call:
   - On macOS: `⌘+⇧+L` (Command+Shift+L)
   - On Windows/Linux: `Ctrl+Shift+L`

**Expected**

- The calls widget should disappear, indicating you've left the call

### Scenario 2: Mute and Unmute with Keyboard Shortcuts

**Step 1**

1. Log in to a Mattermost instance with the Calls plugin enabled
2. Navigate to a channel and start a call
3. Ensure your microphone is unmuted
4. Press the keyboard shortcut to toggle mute:
   - On macOS: `⌘+⇧+Space` (Command+Shift+Space)
   - On Windows/Linux: `Ctrl+Shift+Space`

**Expected**

- Your microphone should be muted
- The mute button should indicate that you are muted

**Step 2**

1. Press the keyboard shortcut to toggle mute again:
   - On macOS: `⌘+⇧+Space` (Command+Shift+Space)
   - On Windows/Linux: `Ctrl+Shift+Space`

**Expected**

- Your microphone should be unmuted
- The mute button should indicate that you are unmuted

### Scenario 3: Raise and Lower Hand with Keyboard Shortcuts

**Step 1**

1. Log in to a Mattermost instance with the Calls plugin enabled
2. Navigate to a channel and start a call
3. Press the keyboard shortcut to raise your hand:
   - On macOS: `⌘+⇧+Y` (Command+Shift+Y)
   - On Windows/Linux: `Ctrl+Shift+Y`

**Expected**

- Your hand should be raised in the call
- The UI should indicate that your hand is raised

**Step 2**

1. Press the keyboard shortcut to lower your hand:
   - On macOS: `⌘+⇧+Y` (Command+Shift+Y)
   - On Windows/Linux: `Ctrl+Shift+Y`

**Expected**

- Your hand should be lowered in the call
- The UI should indicate that your hand is lowered
