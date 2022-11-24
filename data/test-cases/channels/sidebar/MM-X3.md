---
# (Required) Ensure all values are filled up
name: "Should be able to open pinned posts, visit the system console and come back without issues"
status: Active
priority: Normal
folder: Channels
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Sidebar
component: null
tags: []
labels:
- se-prod
- channel
- rhs

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
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

1. Login as Admin
1. Click on the "Pinned" button
1. Verify that the "Pinned" is open in RHS
1. Click on the system console button from top left
1. Click back button on system console


**Expected**

1. App should not crash
1. "Pinned" should be still open