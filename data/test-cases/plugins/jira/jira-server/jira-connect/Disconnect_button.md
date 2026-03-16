---
# (Required) Ensure all values are filled up
name: "Disconnect button for user"
status: Active
priority: Normal
folder: Jira Connect
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

1. Run the `/jira connect` command and connect the user.
2. On the connection confirmation page, click on the disconnect button. 

**Expected**

The user should be able to disconnect from the Jira instance.
