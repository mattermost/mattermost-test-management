---
# (Required) Ensure all values are filled up
name: "Assigning an issue via MM username"
status: Active
priority: Normal
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

1. Open the MM channel where the susbcription is created.
2. Run the '/jira assign <issue_key> <MM_username>'.

**Expected**

If the user mentioned is connected to Jira instance, then the issue will be assigned to him. If he is not connected to Jira instance, then the bot will prvide a text message that the user is not connected.



