---
# (Required) Ensure all values are filled up
name: "Run Details and Status Updates on Mobile"
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
manual_test_environments: ["Mobile"]

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

# Mobile Playbooks - Run Details and Status Updates

This test case verifies that users can view detailed information about a playbook run and update its status on mobile devices.

## Precondition

- User has a Mattermost account with access to an active playbook run
- User has permissions to update the run status
- Mobile app is installed and configured

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Navigate to the Playbooks screen
3. Tap on the "Runs" tab
4. Select an active run to view its details

**Expected**

- The run details screen opens
- The screen displays comprehensive information about the run:
  - Run name and description
  - Current status
  - Progress indicators
  - Timeline or activity feed
  - Participants/owners
  - Related channel information

**Step 2**

1. Locate the status update section
2. Tap to create a new status update
3. Enter status information and submit

**Expected**

- Status update form opens correctly
- All required fields are present
- Submission works correctly
- The new status update appears in the run's timeline/feed
- Any notifications about the status update are triggered

**Step 3**

1. View previous status updates
2. Test different status types (if applicable - normal, warning, critical)
3. Try to edit a previous status update (if supported)

**Expected**

- Previous status updates are visible and formatted correctly
- Different status types display with appropriate visual indicators
- Edit functionality works correctly if supported
- If editing is not supported, appropriate messaging is shown

**Step 4**

1. Test run completion functionality (if applicable)
2. Test offline behavior by enabling airplane mode
3. Try to post a status update while offline

**Expected**

- Run completion process works correctly
- In offline mode, previously loaded run details are still visible
