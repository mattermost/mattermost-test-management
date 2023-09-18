# (Required) Ensure all values are filled up
name: "Mention comment notification in DM"
status: Active
priority: Medium
folder: Jira subscriptions
authors: "@AayushChaudhary0001"
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

1. Go to the connected Jira instance.
2. Open the desired ticket on Jira board.
3. Mention the desired user in the comments.
4. Go back to the connected MM server.

**Expected**

The user should get the comment notification in the DM through the Jira bot.