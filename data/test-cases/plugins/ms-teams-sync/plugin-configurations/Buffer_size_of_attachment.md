---
# (Required) Ensure all values are filled up
name: "Buffer size for streaming the file"
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

1. Set the `Buffer size for streaming files` in the plugin settings on MM.
2. Send the attachment in the linked channel or DM/GM on MM or MS Teams.
3. Click on the attachment in the linked channel or DM/GM on MM.

**Expected**

The file should get loaded and the user should be able to verify the attachment.