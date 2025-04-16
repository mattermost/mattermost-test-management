---
# (Required) Ensure all values are filled up
name: "View Playbook Details on Mobile"
status: Active
priority: Normal
folder: Mobile Playbooks
authors: "@mobile-qa"
team_ownership:
- Mobile
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Mobile
component: Playbooks
tags: ["mobile", "playbooks"]
labels: ["mobile", "playbooks"]
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: N/A
rainforest: []
manual_test_environments: ["Mobile"]

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

# Mobile Playbooks - View Playbook Details

This test case verifies that users can view detailed information about a specific playbook on mobile devices.

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Navigate to the Playbooks screen
3. Tap on a playbook from the list

**Expected**

- The playbook details screen opens
- The screen displays the playbook title at the top
- The playbook description is visible

**Step 2**

Observe the UI elements and information displayed on the playbook details screen

**Expected**

- The screen shows detailed information about the playbook
- Information is properly formatted and readable on mobile
- Any actions available for the playbook are accessible

**Step 3**

1. Navigate back to the playbooks list
2. Select a different playbook

**Expected**

- The back navigation works correctly
- The details for the newly selected playbook are displayed correctly
