---
# (Required) Ensure all values are filled up
name: "Drag and drop between windows"
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

**Step 1: Dragging text**

1. Open two channels in separate windows.
2. Drag a piece of text from one window to the other.

**Expected**

The text should be copied to the other window.

**Step 2: Dragging a file**

1. Open a channel in a new window.
2. Drag a file from your computer onto the new window.

**Expected**

The file should be uploaded to the channel.
