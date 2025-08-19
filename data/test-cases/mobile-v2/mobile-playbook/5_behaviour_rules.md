---
# (Required) Ensure all values are filled up
name: "Task Bottom Sheet - MVP Behaviour Rules and Interaction Constraints"
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

Open a task bottom sheet and verify that only the task state (Checked/Skipped/Run) can be modified in MVP.

**Expected**

Only the action buttons (Check, Skip, Run Command) are interactive and editable.

**Step 2**

Attempt to edit the description area by tapping on it.

**Expected**

The description area remains read-only and cannot be edited.

**Step 3**

Verify that task attributes (assignee, due date, command) are displayed below the action buttons.

**Expected**

The assignee, due date, and command fields appear below the main action buttons in the correct order.

**Step 4**

Tap on a command text within the task details.

**Expected**

The command text is inserted into the message input box (as per design notes).

**Step 5**

Tap on assignee text or avatar.

**Expected**

The profile bottom sheet opens for the assigned user.
