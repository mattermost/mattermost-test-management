---
# (Required) Ensure all values are filled up
name: "Upload True up metrics in CWS portal"
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
- Have 1 CWS admin account for testing.
- From an air gapped instance have the encrypted .txt file downloaded.

Test caase:

- Should be able upload the encrypted .txt on CWS portal.
  - Login to CWS with admin account.
  - Navigate to True up section on portal
  - Upload the encrypted file to portal
  - Verify the upload was successfully processed and details like **License Id**, **Customer** (name), **Email** is displayed.
  - If the upload was not processed successfully an error message should be displayed.
