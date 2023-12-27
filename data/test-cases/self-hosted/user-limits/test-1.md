---
# (Required) Ensure all values are filled up
name: "Mattermost Enterprise and Team Edition should show global banner when instance has active users more than 10,000"
status: Active
priority: Normal
folder: User limits
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

Prerequisites:

1. Have 1 Free instance running Enterprise edition with 9999 users.
   `/cloud create test-limits --image mattermostdevelopment/mattermost-enterprise-edition --license te`
2. Have 1 Free instance running Team edition with 9999 users.
3. Have 1 admin account.

Steps:

Scenario: When user is running enterprise edition

1. Login into Free instance running Enterprise edition.
2. Verify no global banner is displayed in channel and system console page.
3. Add a new user to the instance to make total active user to 10000.
4. Verify a global banner Red should be displayed a message saying "Your user count exceeds the maximum users allowed. Upgrade to Mattermost Professional or Mattermost Enterprise to continue using Mattermost."
5. Add Professional/Enterprise license to the instance.
6. Verify the global banner is not showing up.

Scenario: When user is running team edition

1. Login into Free instance running Team edition.
2. Verify no global banner is displayed in channel and system console page.
3. Add a new user to the instance to make total active user to 10000.
4. Verify a global banner Red should be displayed a message saying "Your user count exceeds the maximum users allowed. Upgrade to Mattermost Professional or Mattermost Enterprise to continue using Mattermost."
