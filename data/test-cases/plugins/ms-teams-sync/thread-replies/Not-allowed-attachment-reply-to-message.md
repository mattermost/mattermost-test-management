---
# (Required) Ensure all values are filled up
name: "Replying with an attachment of greater size than the allowed size on MM to a message"
status: Active
priority: Normal
folder: thread-replies
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

1. Upload and send an attachment of a size greater than the allowed size as a reply to a message in the linked channel or DM/GM on MS Teams.
2. Navigate to the linked channel or DM/GM on MM.

**Expected**

The user should be able to view the error message regarding the attachment size in the thread created for the desired message in the linked channel or DM/GM on MM.