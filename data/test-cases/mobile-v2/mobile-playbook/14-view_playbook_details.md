---
# (Required) Ensure all values are filled up
name: "[E2E] View Playbook Details on Mobile"
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
detox: Update
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

## Precondition

- User has a Mattermost account with access to multiple playbooks
- At least one playbook has a complete set of details (description, steps, etc.)
- Mobile app is installed and configured

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Navigate to the Playbooks screen
3. Tap on a playbook from the list

**Expected**

- The playbook details screen opens
- The screen displays the playbook title at the top
- The playbook description is visible
- Loading indicators appear appropriately if content is being fetched

**Step 2**

Observe the UI elements and information displayed on the playbook details screen

**Expected**

- The screen shows detailed information about the playbook including:
  - Description
  - Playbook steps/tasks (if applicable)
  - Owner/creator information
  - Creation date
  - Last modified date
- Information is properly formatted and readable on mobile
- Any actions available for the playbook are accessible (Run button, etc.)
- Long text content is properly truncated or scrollable

**Step 3**

1. Navigate back to the playbooks list
2. Select a different playbook
3. Test with a playbook that has minimal information

**Expected**

- The back navigation works correctly
- The details for the newly selected playbook are displayed correctly
- For playbooks with minimal information, appropriate UI is shown (no empty/broken sections)
- Default values or placeholders are shown for missing information

**Step 4**

1. Test offline behavior by enabling airplane mode
2. Try to access playbook details

**Expected**

- If the playbook was previously viewed, cached information is displayed
- If not previously viewed, appropriate offline message is shown
- UI indicates offline status appropriately
