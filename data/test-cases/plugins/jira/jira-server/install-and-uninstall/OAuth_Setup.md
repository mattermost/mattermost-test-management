# (Required) Ensure all values are filled up
name: "OAuth setup for Jira plugin"
status: Active
priority: Medium
folder: Install and Uninstall
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

1. Run the /jira connect command.
2. Run the /jira instance install cloud-oauth<cloud URL>
3. Complete the setup for the Cloud OAuth 2.0.

**Expected**

The user should be able to complete and install the Jira cloud instance.
