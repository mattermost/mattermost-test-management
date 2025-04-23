---
# (Required) Ensure all values are filled up
name: "Verify Runs List Filtering"
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

Verify that the runs list can be filtered by in progress and finished runs

**Precondition**

User is logged in and viewing the runs list for a channel with both in progress and finished runs

**Step 1**

Observe the runs list

**Expected**

Both in progress and finished runs are shown

**Step 2**

Tap the 'In Progress' filter option

**Expected**

Only in progress runs are shown in the list

**Step 3**

Tap the 'Finished' filter option

**Expected**

Only finished runs are shown in the list

