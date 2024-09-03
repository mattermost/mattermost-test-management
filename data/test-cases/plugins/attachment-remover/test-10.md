---
# (Required) Ensure all values are filled up
name: "Verify Attachment Removal Across Supported Databases"
status: Active
priority: Normal
folder: Attachment Remover
authors: "@saturninoabril"
team_ownership:
- Deployment Eng
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
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

1. Confirm that attachment removal works for the following server supported databases:
- PostgreSQL
- MySQL

**Expected**

- Attachments should be successfully removed across all supported databases.
