---
# (Required) Ensure all values are filled up
name: "Comment notification for the user"
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

1. Create a subscription on MM for desired project in Jira.
2. Go to the connected Jira instance.
3. Open the subscribed Jira board.
4. Perform any activity(for eg. add any comment) on the desired issue for which the subscription is already created.
5. Go back to the channel in MM.

**Expected**

The user should get the comment notification in the channel through the Jira bot.

