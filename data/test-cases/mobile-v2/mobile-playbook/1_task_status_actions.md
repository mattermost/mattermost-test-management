---
# (Required) Ensure all values are filled up
name: "Task Bottom Sheet - Status Actions (Check, Skip, Run Command)"
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

Open a task bottom sheet by tapping on an unchecked task.

**Expected**

Task bottom sheet opens showing the task details with action buttons (Check, Skip, Run Command if configured).

**Step 2**

Tap on the checkbox to mark the task as checked.

**Expected**

The task is marked as "Checked" with a visual indication (checkmark or similar).

**Step 3**

Tap the checkbox again to uncheck the task.

**Expected**

The task reverts to its default unchecked state.

**Step 4**

Tap on the "Skip" button.

**Expected**

The task is marked as "Skipped" with appropriate visual indication.

**Step 5**

If a task has a configured slash command, tap on the "Run Command" button.

**Expected**

The configured slash command is executed and the task shows "Run Command" state.

**Step 6**

Verify that only one state can be active at a time by switching between Checked, Skipped, and Run Command states.

**Expected**

When selecting a new state, the previous state is deselected and only the newly selected state remains active.
