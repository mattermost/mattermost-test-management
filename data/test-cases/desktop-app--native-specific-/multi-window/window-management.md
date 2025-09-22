---
# (Required) Ensure all values are filled up
name: "Window management (resizing, moving, closing)"
status: Active
priority: Normal
folder: Multi Window
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Smoke Test
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
manual_test_environments:
- Desktop

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1: Resizing a window**

1. Open a channel in a new window.
2. Resize the window by dragging the corners.

**Expected**

The window should resize correctly and the content should reflow to fit the new size.

**Step 2: Moving a window**

1. Open a channel in a new window.
2. Move the window by dragging the title bar.

**Expected**

The window should move correctly.

**Step 3: Closing a window**

1. Open a channel in a new window.
2. Close the window using the close button.

**Expected**

The window should close.

**Step 4: Closing the main window**

1. Close all extra windows.
2. Close the main window.

**Expected**

The app should quit.

**Step 5: Opening a new tab using keyboard shortcuts**

1. After logging in go to a channel. e.g Off-topic
2. Press `Ctl + T` on Windows to open a new tab or `Cmd + T` on Macbook.

**Expected**

A new Tab should be opened with Off-topic channel

**Step 6: Opening a new window using keyboard shortcuts**

1. After logging in go to a channel. e.g Off-topic
2. Press `Ctl + N` on Windows to open a new tab or `Cmd + N` on Macbook.

**Expected**

A new window should be opened with Off-topic channel
