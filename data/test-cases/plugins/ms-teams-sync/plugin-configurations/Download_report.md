---
# (Required) Ensure all values are filled up
name: "Download report from plugin configurations"
status: Active
priority: Normal
folder: plugin-configurations
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

1. Click on the `Download report` button in the plugin settings on MM. 
2. Open the downloaded file.

**Expected**

The downloaded file should be a CSV file showing the list of accounts connected to MS teams in the plugin.