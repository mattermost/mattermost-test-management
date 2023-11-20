---
# (Required) Ensure all values are filled up
name: "Message deleted from MS MS Teams to MM"
status: Active
priority: Normal
folder: Message sync
authors: "@AayushChaudhary0001"
team_ownership: 
- Change Team Name
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

1. Delete the desired message from the linked channel or DM/GM in MS Teams.
2. Go back to the linked channel or DM/GM in MM.

**Step 2**

1. After completing step 1, click on the undo option in MS Teams presented to the user.
2. Go back to the linked channel or DM/GM in MM and refresh the page.

**Expected**

The same message should also be deleted from the linked channel on MM. After step 2, the message should reappear to the user in the linked channel in MM.
