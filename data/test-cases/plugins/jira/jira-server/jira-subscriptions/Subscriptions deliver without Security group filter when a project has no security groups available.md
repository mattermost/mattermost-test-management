---
# (Required) Ensure all values are filled up
name: "No security group options shown when a project has no security groups available"
status: Active
priority: Normal
folder: Jira subscriptions
authors: "@DHaussermann"
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

1. In Jira, create or locate a target project that has no security groups associated to it
2. In Mattermost select a channel and create a new subscription
3. Select the target project from step 1. and add some events
4. Save the subscription without adding a filter
5. In jira trigger an event included in the subscription
   **Expected**

The event is delivered in the channel
