---
# (Required) Ensure all values are filled up
name: "[E2E] Search Playbooks on Mobile"
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
tags: ["mobile", "playbooks", "search", "e2e"]
labels: ["mobile", "playbooks", "automation-candidate"]
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

# Mobile Playbooks - Search Playbooks

This test case verifies that users can search for playbooks on mobile devices.

## Precondition
- User has a Mattermost account with access to multiple playbooks with different names
- At least one playbook contains special characters in its name
- Mobile app is installed and configured

**Step 1**

1. Login to a Mattermost server on a mobile device
2. Navigate to the Playbooks screen
3. Tap on the search bar at the top of the screen

**Expected**

- The search bar becomes active
- The keyboard appears for input
- Any placeholder text is appropriate and visible

**Step 2**

1. Type a search term that matches an existing playbook
2. Observe the results as you type

**Expected**

- The list filters in real-time as you type
- Only playbooks matching the search term are displayed
- If the search term matches part of a playbook title or description, that playbook is shown
- Search is case-insensitive

**Step 3**

1. Clear the search term
2. Type a search term that doesn't match any playbooks

**Expected**

- When the search is cleared, all accessible playbooks are shown again
- When a non-matching term is entered, an appropriate "No results found" message is displayed
- There is a way to clear the search term (X button or similar)

**Step 4**

1. Test search with special characters and edge cases:
   - Search with emoji
   - Search with special characters (@, #, %, etc.)
   - Search with very long terms
   - Search with leading/trailing spaces

**Expected**

- Search handles special characters appropriately
- No crashes or unexpected behavior with edge cases
- Leading/trailing spaces are trimmed from search terms
