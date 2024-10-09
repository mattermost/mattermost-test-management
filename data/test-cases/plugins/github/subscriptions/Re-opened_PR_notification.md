---
# (Required) Ensure all values are filled up
name: "Message in the channel or DM/GM on MM regarding the event for reopening a PR on the github"
status: Active
priority: Normal
folder: Subscriptions
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

1. Enter the slash command `/github subscription add <repo or organization> --feature pulls` in any desired channel or DM/GM and create subscription for the desired repo or organization on MM.
2. Create and close a PR or close any existing PR in the subscribed desired repository or in any repository of the subscribed desired organization on Github.
3. Reopen the closed PR on Github and navigate to the subscribed channel or DM/GM on MM.

**Expected**

The user should get the notification in the subscribed desired channel or DM/GM on MM, regarding the desired PR reopened. 