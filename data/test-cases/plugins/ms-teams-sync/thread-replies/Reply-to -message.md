---
# (Required) Ensure all values are filled up
name: "Replying to a message"
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

1. Hover on the desired message and click on the reply button in the linked channel or DM/GM on MM.
2. Enter and send the text for reply in MM.
3. Navigate to the linked channel or DM/GM on MS Teams.

**Step 2**

1. Click on the reply button in linked channel on MS Teams.
2. Enter and send the text for reply in MS Teams.
3. Navigate to the linked channel on MM.

**Step 3**

1. Hover on the desired message and click on the reply button in the linked DM/GM on MS Teams.
2. Enter and send the text for reply in MS Teams.
3. Navigate to the linked DM/GM on MM.

**Expected**

The user should be able to view the thread creation in linked channel or DM/GM on MS Teams for the desired message.
After step 2, the user should be able to view the thread creation for desired message in linked channel on MM.
After step 3, the user should be able to view the thread creation for the desired message in linked DM/GM on MM.