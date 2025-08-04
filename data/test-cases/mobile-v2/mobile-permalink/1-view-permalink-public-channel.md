---
# (Required) Ensure all values are filled up
name: "Public Channel Permalink Visibility"
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

A user shares a permalink from a public channel to another public channel.

**Expected**

All team members can see a rich preview of the permalink. The preview includes the author's profile picture, name, timestamp, the initial lines of the message, and a direct link to the original post.
