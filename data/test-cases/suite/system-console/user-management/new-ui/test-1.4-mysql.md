---
# (Required) Ensure all values are filled up
name: "Display alert in User management page for MySQL instance"
status: Active
priority: Normal
folder: New UI
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

Test requirements:

1. Have an instance with server version >= 9.6.
2. Instance should be using MySQL database. We can use /cloud plugin.

Steps:

Scenario: Only display User details, Email, Member Since

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. Verify an banner is shown with heading `Some statistics are unavailable for servers using MySQL`.
4. Click on `Learn more` button and verify a new tab is opened with link `https://mattermost.com/pl/user-stats-learn-more`.
5. Click on `Dismiss` and verify the banner does not appear for user again. Reload screen and verify banner does not appear.
6. Click on `Column` dropdown.
7. Verify `Member Since`, `Last Active Date`, `Last Login`, `Messages Posted` are disabled and have tag `Not available`.
8. Hover on the disabled option and verify a tool tip with message `Not available for servers using MySQL` is displayed.
