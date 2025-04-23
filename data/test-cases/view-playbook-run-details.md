---
# (Required) Ensure all values are filled up
name: "View Playbook Run Details"
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

Verify that the key details of a playbook run can be viewed

**Precondition**

User is logged into the mobile app and viewing the list of playbook runs for a channel

**Step 1**

Tap on a playbook run in the list

**Expected**

The app navigates to a detail view for the selected playbook run

**Step 2**

Check the run name is displayed at the top of the view

**Expected**

The correct playbook run name is shown as the title

**Step 3**

Check the run summary text is displayed below the title

**Expected**

A summary describing the purpose of the playbook run is shown

**Step 4**

Check the listed playbook run owner

**Expected**

The user who initiated the playbook run is listed as the Owner

**Step 5**

Check the list of participants

**Expected**

All users participating in the playbook run are listed in the Participants section

