---
# (Required) Ensure all values are filled up
name: "Not allowed size of attachment on MM"
status: Active
priority: Normal
folder: attachments-sync
authors: "@arush-vashishtha"
team_ownership: []
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

1. Upload and send attachment of size greater than the allowed size in MM in the linked channel or DM/GM on MS Teams.
2. Navigate to the linked channel or DM/GM in MM.

**Expected**

The user should get an error message that the attachment size is too large in the linked channel or DM/GM in MM.
