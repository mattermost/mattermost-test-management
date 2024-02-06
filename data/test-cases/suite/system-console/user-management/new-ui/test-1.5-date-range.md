---
# (Required) Ensure all values are filled up
name: "Ability to Filter Last Post, Days Active, Messages Posted columns by applying various date filter options"
status: Active
priority: Normal
folder: New UI
authors: "@yasserfaraazkhan"
team_ownership: 
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

# (Optional) Test type and tools
cypress: null
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

Test requirements:

1. Have an instance with server version >= 9.6.

Steps:

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. Verify the default Duration is `All time`.
4. From the Duration dropdown, select `Last 30 days`.
5. Verify the date in the Last Post, Days Active, Messages Posted columns reflect the applied date filter.
6. Repeat Step 4 and 5, for different Duration options like, `Previous month`, `Last 6 months`.
