---
# (Required) Ensure all values are filled up
name: "Channel Integration and accessing Playbook"
status: Active
priority: Normal
folder: Mobile Playbook
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features team
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
manual_test_environments: []

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

1. Verify channel header icon appears only when active runs exist
2. Confirm channel header icon is hidden when no active runs exist
3. Test icon visibility updates in real-time when run status changes
4. Verify channel info section contains Playbook runs item when appropriate
5. Test count display accuracy on menu items
6. Validate navigation between channel view and Playbook run views
