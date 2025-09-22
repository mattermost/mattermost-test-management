---
# (Required) Ensure all values are filled up
name: "Tab behavior changes"
status: Active
priority: Normal
folder: Multi Window
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

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

**Step 1: Moving a window to a tab**

1. Open a channel in a new window.
2. Right-click on the top bar of the new window.
3. Select "Move to main window".

**Expected**

The window should close and a new tab for that channel should appear in the main window.

**Step 2: Moving a tab to a new window**

1. Open a channel in a new tab.
2. Right-click on the tab.
3. Select "Move to new window".

**Expected**

The tab should close and a new window for that channel should appear.

**Step 3: Closing a server tab**

1. Open a channel in a new tab.
2. Click the "x" button on the tab.

**Expected**

The tab should close.

**Step 4: Main tab for a server cannot be closed**

1. Right-click on the main tab for a server.
2. Hover over the tab and verify the `x` is not displayed.
3. Press `Cmd + W` or `Ctl + W` to ensue the tab and window is not closed.

**Expected**

The "Close tab" option should not be available.
