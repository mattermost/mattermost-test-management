---
# (Required) Ensure all values are filled up
name: "Send multiple attachments"
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

1. Upload and send multiple attachments of allowed size in the linked channel or DM/GM on MM.
2. Navigate to the linked channel or DM/GM in MS Teams.

**Step 2**

1. Upload and send multiple attachments of allowed size in the linked channel or DM/GM on MS Teams.
2. Navigate to the linked channel or DM/GM in MM.

**Step 3**

1. Upload and send multiple attachments of sizes smaller and larger than the allowed size in the linked channel or DM/GM on MS Teams.
2. Navigate to the linked channel or DM/GM in MM.

**Expected**

The user should be able to view all the attachments in the linked channel or DM/GM in MS Teams. 
After step 2, the user should be able to view all the attachments in the linked channel or DM/GM in MM.
After step 3, the user should be able to view the attachments having a size smaller than or equal to the allowed size and the error message for the rest of the attachments in the linked channel or DM/GM in MM.