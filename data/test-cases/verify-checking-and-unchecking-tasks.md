---
# (Required) Ensure all values are filled up
name: "Verify Checking and Unchecking Tasks"
status: Active
priority: Normal
folder: Automated/Mobile
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
cypress: To be implemented
detox: N/A
mmctl: N/A
playwright: To be implemented
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

**This is an automated test case**

Verify that tasks can be checked and unchecked from the run details screen

**Precondition**

User is logged in and viewing the run details screen for a run with tasks

**Step 1**

Tap an unchecked task checkbox

**Expected**

The task becomes checked

**Step 2**

Tap a checked task checkbox

**Expected**

The task becomes unchecked

