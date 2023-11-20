---
# (Required) Ensure all values are filled up
name: "Connect user slash command"
status: Active
priority: Normal
folder: Slash commands
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

1. Run the `/msteams-sync connect` command.
2. Click on the link provided.
3. Enter the valid credentials.

**Step 2**

1. Run the `/msteams-sync connect` command when the user is already connected.

**Expected**

The user should get logged in to MS Teams and receive a message of successful connection in a new window. After step 2, the user should not be able to connect and should receive a message that the user is already connected.