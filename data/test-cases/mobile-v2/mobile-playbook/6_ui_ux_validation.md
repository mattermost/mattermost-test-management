---
# (Required) Ensure all values are filled up
name: "Task Bottom Sheet - UI/UX Validation and Accessibility Testing"
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

Tap on a task to open the task details.

**Expected**

The "Task details" sheet opens as a bottom sheet covering partial screen (not full screen).

**Step 2**

Try to dismiss the bottom sheet by swiping down.

**Expected**

The bottom sheet can be dismissed by swiping down and closes properly.

**Step 3**

Examine the spacing and alignment of action buttons (Check, Skip, Run Command).

**Expected**

Action buttons have correct spacing, alignment, and are easily tappable with proper visual hierarchy.

**Step 4**

Open a task with a long description that exceeds the visible area.

**Expected**

Long task descriptions are scrollable within the bottom sheet without affecting the overall layout.

**Step 5**

Enable VoiceOver/Screen Reader and navigate through the task details.

**Expected**

VoiceOver/Screen Reader properly reads all task details including actions, assignee, due date, and command information with appropriate accessibility labels.
