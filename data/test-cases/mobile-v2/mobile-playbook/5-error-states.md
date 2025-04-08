---
# (Required) Ensure all values are filled up
name: "Error States & Edge Cases"
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

1. Test offline mode behavior
2. Verify error messages display appropriately
3. Test connectivity recovery scenarios
4. Validate behavior with extremely large numbers of runs
5. Test with maximum number of participants
6. Verify handling of deleted channels or users
