---
# (Required) Ensure all values are filled up
name: "Runs List Functionality"
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

1. Verify correct display of in-progress runs
2. Verify correct display of finished runs
3. Test tab switching between "In progress" and "Finished" states
4. Verify sorting order of runs (by recent update)
5. Test empty state displays correctly with appropriate messaging
6. Validate progress bar appearance and accuracy
7. Verify participant avatars display correctly (including +X for overflow)
8. Test run card information accuracy and formatting
