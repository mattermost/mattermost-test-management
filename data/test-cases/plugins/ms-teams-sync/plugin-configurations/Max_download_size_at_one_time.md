---
# (Required) Ensure all values are filled up
name: "Maximum download size allowed at one time"
status: Active
priority: Normal
folder: plugin-configurations
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

1. Set the size in `Maximum size of attachments to support complete one time download` option in plugin settings on MM.
2. Send the attachment in the linked channel or DM/GM on MM or MS Teams.
3. Navigate to the linked channel or DM/GM on MS Teams or MM respectively.

**Expected**

The user should be able to verify the attachment in the linked channel or DM/GM on MS Teams or MM respectively.