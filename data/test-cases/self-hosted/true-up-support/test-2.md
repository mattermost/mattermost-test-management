---
# (Required) Ensure all values are filled up
name: "Verify True up metrics is share when Telemetry is off on a Air gapped instance"
status: Active
priority: Normal
folder: True up support
authors: "@yasserfaraazkhan"
team_ownership: 
- Self-Serve
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []

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

<https://mattermost.atlassian.net/browse/MM-47851>

Pre-requisites:

- On an Air gapped instance, the True up Review section should be visible 15 days before end of quarter.
- Customers will have 15 days grace period after end of quarter to submit the report.
  eg: The review section will be visible on March 16th till April 15th. Once Admin Submits, the section should not be displayed.
- Have 2 admin users for testing.

Test caase:

- Should be able to download data successfully when Admin clicks on “Download data“ button.
  - Login with admin account.
  - Navigate to "Workspace Optimization" section.
  - Verify "True up Review" section is visible.
  - Click on "Download data" button.
  - Verify encrypted .txt file is downloaded.
  - After successfully downloading the data, Login into mattermost with another Admin account.
  - Navigate to "Workspace Optimization" section.
  - Verify "True up Review" section is Not visible.
