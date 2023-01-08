---
# (Required) Ensure all values are filled up
name: "Verify True up metrics is shared when Telemetry is off on a Non-air gapped instance"
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

- On an Non Air gapped instance, the True up Review section should be visible 15 days before end of quarter.
- Customers will have 15 days grace period after end of quarter to submit the report.
  eg: The review section will be visible on March 16th till April 15th. Once Admin Submits, the section should not be displayed.
- Have 2 admin users for testing.

Test Case:

- Should be able to send data successfully when Admin clicks on “share to mattermost“ button.
  - Login with admin account.
  - Navigate to "Workspace Optimization" section.
  - Verify "True up Review" section is visible.
  - Click on "Share to Mattermost" button.
  - Verify success message is displayed after successfully sharing the data.
  - If Sharing is unsuccessful, Verify an alert message is displayed and the “share to mattermost“ button is clickable.
  - After successfully sharing the data, Login into mattermost with another Admin account.
  - Navigate to "Workspace Optimization" section.
  - Verify "True up Review" section is Not visible.
