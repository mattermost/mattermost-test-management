---
# (Required) Ensure all values are filled up
name: "[E2E] Manage Run Tasks on Mobile"
status: Active
priority: Normal
folder: Mobile Playbook
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
priority_p1_to_p4: P1 - Smoke Tests (App testable?)

# (Optional)
location: Mobile
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

# Mobile Playbooks - Manage Run Tasks

This test case verifies that users can view and manage tasks within an active playbook run on mobile devices.

## Precondition

- User has a Mattermost account with access to an active playbook run
- The playbook run has multiple tasks in different states
- Mobile app is installed and configured

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Navigate to the Playbooks screen
3. Tap on the "Runs" tab
4. Select an active run to view its details

**Expected**

- The run details screen opens
- Tasks section is visible showing the run's tasks
- Tasks are grouped or sorted appropriately (by status, order, etc.)
- Each task shows its title and status (completed, in progress, etc.)

**Step 2**

1. Tap on a task that is not yet completed
2. Mark the task as complete
3. Observe any changes to the task and overall run status

**Expected**

- Task status changes to completed
- Visual indicators update appropriately (checkmark, color change, etc.)
- If applicable, run progress indicators update to reflect the completed task
- Any notifications or messages related to task completion are triggered

**Step 3**

1. Tap on a completed task
2. Mark it as incomplete
3. Assign a task to yourself or another user (if applicable)

**Expected**

- Task status changes back to incomplete
- Assignment functionality works correctly
- UI updates to reflect the new assignment
- Any notifications about assignment changes are triggered

**Step 4**

1. Test task filtering or sorting options (if available)
2. Test offline behavior by enabling airplane mode
3. Try to complete a task while offline

**Expected**

- Filtering/sorting options work correctly
- In offline mode, previously loaded tasks are still visible
- Task completion while offline is queued and synced when back online
- Appropriate offline indicators and status messages are shown
