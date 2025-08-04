---
# (Required) Ensure all values are filled up
name: "Permalink to Private Channel (Not a Member)"
status: Active
priority: Normal
folder: Mobile Permalink
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: N/A
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

**Scenario**

A user receives a permalink to a message in a private channel they are not a member of.

**Expected**

The user sees only the permalink URL and no preview. Tapping the link results in an error message indicating they do not have access to the channel.
