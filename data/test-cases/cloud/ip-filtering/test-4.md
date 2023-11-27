---
# (Required) Ensure all values are filled up
name: "IP Filtering | Email notification when IP Filtering rule is added"
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

Scenario: Add Rule

1. Login with admin credentials.
2. Navigate to System Console > Site Configuration > IP Filtering.
3. Toggle to enable the `Enable IP Filtering` settings.
4. Click on `Add rule`.
5. Enter `Name of the rule`.
6. Enter the current `IP address`.
7. Click `Save Button` on the Add IP Filter modal.
8. Click `Save Button` on the IP Filter feature page.
9. Click on `Yes, apply changes` to review and confirm the IP Filtering rule added.
10. Verify the system admin received a email notification with subject `Changes to Your Workspace's IP Filters`.
11. Verify the `Review changes` button in email take user to IP filtering section.

Scenario: Edit Rule

13. Edit the rule and alter the IP address before saving it.
14. Verify the system admin received a email notification with subject `Changes to Your Workspace's IP Filters`

Scenario: Delete Rule

15. Hoven on the Rule and click on trash icon
16. Confirm the rule deletion.
17. Verify the system admin received a email notification with subject `Changes to Your Workspace's IP Filters`

Scenario: Enable or disable Rule

18. Click on toggle button of the feature.
19. Verify the system admin received a email notification with subject `Changes to Your Workspace's IP Filters`
