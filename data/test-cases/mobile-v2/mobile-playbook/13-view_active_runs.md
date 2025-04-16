---
# (Required) Ensure all values are filled up
name: "[E2E] View Active Runs on Mobile"
status: Active
priority: Normal
folder: Mobile Playbook
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

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

# Mobile Playbooks - View Active Runs

This test case verifies that users can view their active playbook runs on mobile devices.

## Precondition

- User has a Mattermost account with access to active playbook runs
- At least one playbook run is in progress
- Mobile app is installed and configured

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Navigate to the Playbooks screen
3. Tap on the "Runs" tab or equivalent navigation element

**Expected**

- The screen switches to show active playbook runs
- Active runs are displayed in a list format
- Each run shows relevant information (name, status, etc.)
- If no active runs exist, an appropriate empty state message is shown

**Step 2**

Observe the UI elements and information displayed for active runs

**Expected**

- Each run item shows:
  - Run name
  - Status indicators (in progress, overdue, etc.)
  - Timestamp information (created, last updated)
  - Owner/participant information
- The list is organized in a logical manner (e.g., by recency or status)
- Any filtering or sorting options are functional

**Step 3**

1. Pull down to refresh the list of runs
2. Tap on one of the active runs

**Expected**

- The refresh action works correctly and updates the list
- Tapping on a run navigates to the run details screen
- The run details screen shows comprehensive information about the selected run

**Step 4**

1. Test offline behavior by enabling airplane mode
2. Test with a large number of runs to verify performance

**Expected**

- In offline mode, previously loaded runs are still visible with appropriate offline indicators
- Performance remains good even with many runs in the list
- Scrolling and navigation remain smooth
