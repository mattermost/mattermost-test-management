---
# (Required) Ensure all values are filled up
name: "User Surveys | Previously launched surveys"
status: Active
priority: Normal
folder: New nps plugin
authors: "@yasserfaraazkhan"
team_ownership: 
- ICU
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

Scenario 1: Previously launched Survey should be listed in the plugins page

Set-up:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Previous survey's should have Start and End date of the survey.
4. Previous survey's should have NPS score if the survey has ended.
5. Previously launched survey but currently active should have a button `End Survey` button.
6. Should be able to download the Survey responses.
