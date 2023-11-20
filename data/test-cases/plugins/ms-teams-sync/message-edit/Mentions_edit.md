---
# (Required) Ensure all values are filled up
name: "Editing mentioned user from MM to MS Teams and MS Teams to MM"
status: Active
priority: Normal
folder: Message edit
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

1. Enter any message in a channel(already linked) or in DM/GM by mentioning any user in MM.
2. Edit the mentioned user and mention any other user.

**Step 2**

1. Enter any message in a channel(already linked) or in DM/GM by mentioning any user in Teams.
2. Edit the mentioned user and mention any other user.

**Expected**

The desired message should be edited and the updated user should be mentioned in the edited message in Teams. Also in step 2, the desired message should be edited and the updated user should be mentioned in the edited message in MM.