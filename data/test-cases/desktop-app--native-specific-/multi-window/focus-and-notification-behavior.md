---
# (Required) Ensure all values are filled up
name: "Focus and notification behavior"
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

**Step 1: Focus on a window**

1. Open a channel in a new window.
2. Click on the main window.

**Expected**

The main window should come to the front.

**Step 2: Notifications**

1. Open a channel in a new window.
2. Receive a notification in that channel.

**Expected**

A notification should appear. Clicking on the notification should go to the main window.
