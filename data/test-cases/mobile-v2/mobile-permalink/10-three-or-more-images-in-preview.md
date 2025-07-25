---
# (Required) Ensure all values are filled up
name: "Three or More Images in Preview"
status: Active
priority: Normal
folder: Mobile Permalink
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
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

A user shares a permalink from a post with three or more images.

**Expected**

The permalink preview displays the first two images and a "+N" indicator for the remaining images, all scaled to fit.
