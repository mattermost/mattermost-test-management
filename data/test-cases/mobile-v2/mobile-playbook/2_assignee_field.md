---
# (Required) Ensure all values are filled up
name: "Task Bottom Sheet - Assignee Field Management and Selection"
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

Open a task bottom sheet and locate the Assignee field.

**Expected**

The Assignee field is visible showing "None" if no assignee is set, or the assigned person's avatar and name if already assigned.

**Step 2**

Tap on the Assignee row.

**Expected**

The assignee selector bottom sheet opens displaying available users to assign.

**Step 3**

Select a person from the assignee selector.

**Expected**

The selected person is assigned to the task and their avatar and name are displayed in the Assignee field.

**Step 4**

Tap the Assignee row again and select a different person.

**Expected**

The assignee is updated with the new person, replacing the previous assignee.

**Step 5**

Tap the Assignee row and select "None" or remove the current assignee.

**Expected**

The assignee is removed and the field reverts to showing "None".
