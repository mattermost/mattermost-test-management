---
# (Required) Ensure all values are filled up
name: "Complete Playbook Run Tasks"
status: Active
priority: Normal
folder: Playbooks
authors: @qa-team
team_ownership:
- Mobile
- Playbooks
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
manual_test_environments: []

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

Verify that a user can check off tasks in a playbook run

**Precondition**

User is logged into the mobile app and viewing the detail page for a playbook run

**Step 1**

Locate an unchecked task in the playbook run

**Expected**

The task has an empty checkbox next to the task description

**Step 2**

Tap the checkbox for the unchecked task

**Expected**

The task checkbox becomes checked, indicating it is complete

**Step 3**

Locate a previously checked task

**Expected**

The task has a checked checkbox next to the description

**Step 4**

Tap the checkbox for the checked task

**Expected**

The task checkbox becomes unchecked again, marking the task as incomplete

