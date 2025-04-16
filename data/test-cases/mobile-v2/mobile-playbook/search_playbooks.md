---
# (Required) Ensure all values are filled up
name: "Search Playbooks on Mobile"
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

# Mobile Playbooks - Search Playbooks

This test case verifies that users can search for playbooks on mobile devices.

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Navigate to the Playbooks screen
3. Tap on the search bar at the top of the screen

**Expected**

- The search bar becomes active
- The keyboard appears for input

**Step 2**

1. Type a search term that matches an existing playbook
2. Observe the results as you type

**Expected**

- The list filters in real-time as you type
- Only playbooks matching the search term are displayed
- If the search term matches part of a playbook title or description, that playbook is shown

**Step 3**

1. Clear the search term
2. Type a search term that doesn't match any playbooks

**Expected**

- When the search is cleared, all accessible playbooks are shown again
- When a non-matching term is entered, an appropriate "No results found" message is displayed
