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

1. In Jira, create or locate a target project has a set of security groups associated to it
2. In matter most select a channel and create a new susbscription
3. Select the target project from step 1. and add some events
4. Add one of the the security levels for the project
5. In jira locate (or create) an issue that is part of the security level no selected in the filter above
6. For the Jira issue above, trigger an event included in the subsription

**Expected**
The even is not delivered as the security level is outside the scope of the subscription
