---
# (Required) Ensure all values are filled up
name: "Run Playbook on Mobile"
status: Active
priority: Normal
folder: Mobile Playbooks
authors: "@mobile-qa"
team_ownership:
- Mobile
priority_p1_to_p4: P1 - High Impact (Core functionality, data integrity)

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

# Mobile Playbooks - Run Playbook

This test case verifies that users can start a new run of a playbook from the mobile app.

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Navigate to the Playbooks screen
3. Tap on a playbook from the list to view its details
4. Tap on the "Run Playbook" button

**Expected**

- A new screen appears for configuring the playbook run
- The screen shows fields for naming the run and selecting a channel

**Step 2**

1. Enter a name for the playbook run
2. Select a channel for the run (or create a new one)
3. Tap on "Start Run" or equivalent button

**Expected**

- The playbook run is initiated successfully
- User is navigated to the appropriate screen or channel
- A confirmation message appears indicating the run has started

**Step 3**

Verify the playbook run has been created correctly

**Expected**

- The run appears in the list of active runs (if applicable)
- The selected/created channel shows appropriate messages about the playbook run
- Initial tasks or actions from the playbook are visible or accessible
