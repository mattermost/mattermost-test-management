---
# (Required) Ensure all values are filled up
name: "User Surveys | Admin should be able to download the responses of a Survey"
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

Scenario 1: Download and verify the survey data.

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Previous survey's should have `Export responses` button.
4. Click on `Export responses` button.
5. Verify a zip file having responses.csv and metadata.json files is downloaded.
6. Open the metadata.json file.
7. Verify the value of `nps_score`, `receipt_count`, `response_count` in the json is same as seen on UI.
