---
# (Required) Ensure all values are filled up
name: "State synchronization between windows"
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

**Step 1: Marking a channel as read**

1. Open a channel in a new window.
2. In the main window, mark the channel as read.

**Expected**

The channel should also be marked as read in the new window.

**Step 2: Replying to a thread**

1. Open a thread in a new window.
2. In the main window, reply to the thread.

**Expected**

The reply should appear in the new window.

**Step 3: Changing channel**

1. Open a channel in a new window.
2. In the main window, switch to a different channel.

**Expected**

The new window should remain on the same channel.
