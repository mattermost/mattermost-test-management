---
# (Required) Ensure all values are filled up
name: "IP Filtering | Restore workspace from portal if the workspace is blocked"
status: Active
priority: Normal
folder: IP Filtering
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

Test prerequisites:

- Create a workspace and leave it in Enterprise Trial license from https://portal.test.cloud.mattermost.com/
- In Split.io Enable `CloudIPFiltering` feature flag for all test environments.

1. Login with admin credentials.
2. Navigate to System Console > Site Configuration > IP Filtering.
3. Toggle to enable the `Enable IP Filtering` settings.
4. Click on `Add rule`.
5. Enter `Name of the rule`.
6. Enter the `IP address` other than the current IP address.
7. Click `Save Button` on the Add IP Filter modal.
8. Click `Save Button` on the IP Filter feature page.
9. Click on `Yes, apply changes` to review and confirm the IP Filtering rule added.
10. Verify the workspace is not accessible. (we should be seeing 403 error).
11. Log into portal with the workspace admin credentials
12. Navigate to IP filtering section.
13. Verify the `Disable IP Filtering` is enabled and Click on it.
14. Verify the workspace is accessible now.
