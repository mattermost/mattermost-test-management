---
# (Required) Ensure all values are filled up
name: "An ephemeral post in the chat when the webhook is not found on the github side."
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

1. Remove the existing webhook if present for any desired repository or organization on Github.
2. Create a subscription to the desired repository or organization using the slash command `/github subscribe add <repository or organization> --feature <feature>` in the desired channel or DM/GM on MM.

**Expected**

The user will get an ephemeral message regarding `no webhook was found for the desired repository or organization` along with the successfull subscription message in the desired channel or DM/GM on MM.