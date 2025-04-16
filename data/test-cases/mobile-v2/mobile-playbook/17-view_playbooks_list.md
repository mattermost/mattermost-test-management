---
# (Required) Ensure all values are filled up
name: "[E2E] View Playbooks List on Mobile"
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

# Mobile Playbooks - View Playbooks List

This test case verifies that users can view the list of playbooks on mobile devices.

## Precondition

- User has a Mattermost account with access to at least one playbook
- Mobile app is installed and configured

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Tap on the hamburger menu to open the left sidebar
3. Tap on "Playbooks" option

**Expected**

- Playbooks screen opens
- The screen displays a list of playbooks the user has access to
- Each playbook shows its title and description (if available)
- If no playbooks exist, an appropriate empty state message is shown

**Step 2**

Observe the UI elements on the Playbooks list screen

**Expected**

- The screen has a header with "Playbooks" title
- There's a search bar at the top to filter playbooks
- Playbooks are displayed in a scrollable list
- Each playbook item shows relevant information (title, description)
- Playbooks are sorted by most recently used or created (verify the sorting logic)

**Step 3**

1. Pull down on the list to refresh
2. Verify the state when offline (turn on airplane mode)

**Expected**

- The refresh indicator appears
- The list refreshes and shows the most up-to-date playbooks
- When offline, cached playbooks are displayed with an appropriate offline indicator
- A retry mechanism is available when offline

**Step 4**

1. Verify pagination works correctly (if there are many playbooks)
2. Scroll to the bottom of the list

**Expected**

- Additional playbooks load as you scroll down (if pagination is implemented)
- Loading indicator appears while fetching more playbooks
- Scrolling performance is smooth even with a large number of playbooks
