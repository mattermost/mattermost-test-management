---
# (Required) Ensure all values are filled up
name: "Assigning an issue by first name"
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

1. Run the /jira ssign <issue_key> <assignee_name>.
2. While entering the username, only provide the first name of the assignee.

**Expected**

The user should get the list of users with the same first name in return in the channel/DM.



