---
# (Required) Ensure all values are filled up
name: "Reactions from a disconnected account"
status: Active
priority: Normal
folder: user-reactions
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

1. Add a reaction on the message created by the bot account in the linked channel on MS Teams, when the user account is disconnected and the bot account is connected.
2. Navigate to the linked channel on MM.

**Step 2**

1. Add a reaction on a normal message in the linked channel or DM/GM on MS Teams, when the account is disconnected.
2. Navigate to the linked channel or DM/GM on MM.

**Step 3**

1. Add reaction on a message in the linked channel or DM/GM on MM, when the account is disconnected.
2. Navigate to the linked channel on MS Teams.

**Expected**

The reaction should not get added to the message in the linked channel on MM.
After step 2, the reaction should get added to the message in the linked channel or DM/GM on MM.
After step 3, the reaction should not get added to the message in the linked channel or DM/GM on MS Teams.