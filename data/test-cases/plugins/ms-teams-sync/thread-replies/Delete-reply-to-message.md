---
# (Required) Ensure all values are filled up
name: "Delete a reply to a message on MS Teams"
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

1. Delete a reply message in the linked channel or DM/GM on MS Teams.
2. Navigate to the linked channel or DM/GM on MM.

**Step 2**

1. After step 1, click on the undo button for deleted message in the linked channel or DM/GM on MS Teams.
2. Navigate to the linked channel or DM/GM on MM and refresh the page.

**Expected**

The desired reply should get deleted from the thread in the linked channel or DM/GM on MM.
After step 2, the deleted reply should get restored in the linked channel or DM/GM on MM.