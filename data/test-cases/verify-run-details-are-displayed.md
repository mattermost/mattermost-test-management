---
# (Required) Ensure all values are filled up
name: "Verify Run Details are Displayed"
status: Active
priority: Normal
folder: Automated/Playbook Runs
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

Verify that tapping a run in the list shows the run details

**Precondition**

User is logged in and viewing the runs list for a channel

**Step 1**

Tap on a run in the list

**Expected**

The run details screen is displayed

**Step 2**

Observe the run details

**Expected**

The run name, summary, owner, participants, and tasks are shown

