---
# (Required) Ensure all values are filled up
name: "Overwrite the existing subscriptions to a github repo or organization in MM channel"
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

1. Enter the slash command `/github subscriptions add <repo/organization> --features <features>` and create subscription to a repository or organization in the desired channel or DM/GM on MM.
2. Overwrite the created subscriptions with the slash command `/github subscriptions add <repo/organization> --features <features>` in the same desired channel or DM/GM on MM.

**Expected**

The user should be able to view the message and verify the newly added subscriptions along with the previously added subscriptions which got overwritten in the desired channel or DM/GM on MM.