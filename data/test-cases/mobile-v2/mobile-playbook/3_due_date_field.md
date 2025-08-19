---
# (Required) Ensure all values are filled up
name: "Task Bottom Sheet - Due Date Field and Time Picker Functionality"
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

Open a task bottom sheet and locate the Due date field.

**Expected**

The Due date field is visible showing "None" if no due date is set, or the configured date/time if already set.

**Step 2**

Tap on the Due date row.

**Expected**

The date/time picker opens allowing user to select a date and time.

**Step 3**

Select a future date and time from the picker.

**Expected**

The selected date/time is saved and displayed correctly in the Due date field in the local timezone.

**Step 4**

Attempt to select a past date (if restrictions apply).

**Expected**

Past dates are not selectable or show appropriate validation message.

**Step 5**

Tap the Due date field again and remove or clear the due date.

**Expected**

The due date is removed and the field reverts to showing "None".
