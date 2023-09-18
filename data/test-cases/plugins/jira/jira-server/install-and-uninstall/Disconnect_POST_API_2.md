# (Required) Ensure all values are filled up
name: "Disconnect API changed to POST method testing in browser"
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
2. Click on the allow button.
3. Copy the link of disconnect button.
4. Paste it on a new tab in the browser.

**Expected**

The link should not be found working on the browser as in browser it always works through GET method.


