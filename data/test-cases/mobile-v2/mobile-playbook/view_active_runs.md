---
# (Required) Ensure all values are filled up
name: "View Active Runs on Mobile"
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

# Mobile Playbooks - View Active Runs

This test case verifies that users can view their active playbook runs on mobile devices.

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Navigate to the Playbooks screen
3. Tap on the "Runs" tab or equivalent navigation element

**Expected**

- The screen switches to show active playbook runs
- Active runs are displayed in a list format
- Each run shows relevant information (name, status, etc.)

**Step 2**

Observe the UI elements and information displayed for active runs

**Expected**

- Each run item shows the run name
- Status indicators are visible for each run
- The list is organized in a logical manner (e.g., by recency or status)

**Step 3**

1. Pull down to refresh the list of runs
2. Tap on one of the active runs

**Expected**

- The refresh action works correctly and updates the list
- Tapping on a run navigates to the run details screen
- The run details screen shows comprehensive information about the selected run
