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
tags: ["mobile", "playbooks", "run"]
labels: ["mobile", "playbooks", "manual-only"]
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

## Precondition
- User has a Mattermost account with permissions to run playbooks
- At least one playbook is available to run
- User has permissions to create channels or access existing channels
- Mobile app is installed and configured

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Navigate to the Playbooks screen
3. Tap on a playbook from the list to view its details
4. Tap on the "Run Playbook" button

**Expected**

- A new screen appears for configuring the playbook run
- The screen shows fields for naming the run and selecting a channel
- The run name field is pre-populated with a default name (if applicable)
- Any required fields are clearly marked

**Step 2**

1. Enter a name for the playbook run
2. Select a channel for the run (or create a new one)
3. Fill in any additional required fields
4. Tap on "Start Run" or equivalent button

**Expected**

- The playbook run is initiated successfully
- User is navigated to the appropriate screen or channel
- A confirmation message appears indicating the run has started
- No errors occur during the process

**Step 3**

Verify the playbook run has been created correctly

**Expected**

- The run appears in the list of active runs (if applicable)
- The selected/created channel shows appropriate messages about the playbook run
- Initial tasks or actions from the playbook are visible or accessible
- Run participants are notified appropriately

**Step 4**

Test edge cases:
1. Try to run a playbook with an extremely long name
2. Try to run a playbook while offline (airplane mode)
3. Try to run a playbook and cancel midway through the setup process
4. Try to run a playbook with missing required fields

**Expected**

- Long names are handled appropriately (truncated or error message)
- Offline state is handled gracefully with appropriate error message
- Cancellation works properly and doesn't create a partial run
- Validation prevents submission with missing required fields
- Appropriate error messages are shown for each case
