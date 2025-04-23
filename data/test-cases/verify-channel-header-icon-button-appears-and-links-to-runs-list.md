---
# (Required) Ensure all values are filled up
name: "Verify Channel Header Icon Button Appears and Links to Runs List"
status: Active
priority: Normal
folder: Automated/Channels
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

Verify that the channel header icon button appears when there are active runs and links to the runs list

**Precondition**

User is logged in and there is at least one active run linked to the channel

**Step 1**

Navigate to a channel with an active run

**Expected**

The channel loads successfully

**Step 2**

Observe the channel header

**Expected**

The Playbook runs icon button is visible in the channel header

**Step 3**

Tap the Playbook runs icon button

**Expected**

The runs list for the channel is displayed

