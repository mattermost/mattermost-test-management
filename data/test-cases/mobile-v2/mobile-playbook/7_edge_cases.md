---
# (Required) Ensure all values are filled up
name: "Task Bottom Sheet - Edge Cases and Error Handling Scenarios"
status: Active
priority: Normal
folder: Mobile Playbook
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
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
manual_test_environments: []

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

Disconnect from network and attempt to update assignee or due date fields.

**Expected**

Updates fail gracefully with appropriate error messages and don't crash the app.

**Step 2**

Assign a task to a user, then have that user deleted from the system.

**Expected**

The task shows a fallback state (like "Unknown User" or similar) instead of crashing.

**Step 3**

Configure a task with an invalid or non-existent slash command and attempt to run it.

**Expected**

Running the invalid command shows appropriate error message and doesn't crash the app.

**Step 4**

Test the bottom sheet behavior on different screen sizes (small phones vs tablets).

**Expected**

The bottom sheet adapts properly to different screen sizes and maintains usability across devices.

**Step 5**

Modify task state (check/assign), navigate away from the task, then return to the same task.

**Expected**

All task states (checked status, assignments, due dates) persist correctly after navigation.
