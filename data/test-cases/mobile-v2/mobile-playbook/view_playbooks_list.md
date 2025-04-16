---
# (Required) Ensure all values are filled up
name: "View Playbooks List on Mobile"
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

# Mobile Playbooks - View Playbooks List

This test case verifies that users can view the list of playbooks on mobile devices.

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Tap on the hamburger menu to open the left sidebar
3. Tap on "Playbooks" option

**Expected**

- Playbooks screen opens
- The screen displays a list of playbooks the user has access to
- Each playbook shows its title and description (if available)

**Step 2**

Observe the UI elements on the Playbooks list screen

**Expected**

- The screen has a header with "Playbooks" title
- There's a search bar at the top to filter playbooks
- Playbooks are displayed in a scrollable list
- Each playbook item shows relevant information (title, description)

**Step 3**

Pull down on the list to refresh

**Expected**

- The refresh indicator appears
- The list refreshes and shows the most up-to-date playbooks
