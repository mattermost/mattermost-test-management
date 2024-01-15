---
# (Required) Ensure all values are filled up
name: "Enterprise and Team Edition should show a non-dismissable global banner when instance has active users more than 10,000"
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
4. Have 1 Free instance running Enterprise edition with 10k users.
5. Have 1 Free instance running Team edition with 10k users.

Steps:

**Scenario**: When user is running Enterprise edition.

1. Login into Free instance running Enterprise edition.
2. Add a new user to the instance to make total active user to 10000.
3. Refresh the app and verify a red global banner is displayed with a message saying `Your user count exceeds the maximum users allowed. Upgrade to Mattermost Professional or Mattermost Enterprise to continue using Mattermost.`. There should also be a `Learn more` button.
4. Navigate to System Console > Edition and License page.
5. Add Professional/Enterprise license to the instance.
6. Verify the global banner is not showing up.

**Scenario**: When user is running Team edition.

1. Login into Free instance running Team edition.
2. Add a new user to the instance to make total active user to 10000.
3. Refresh the app and verify a red global banner is displayed with a message saying `Your user count exceeds the maximum users allowed. Upgrade to Mattermost Professional or Mattermost Enterprise to continue using Mattermost.`. There should also be a `Learn more` button.

**Scenario**: When user is running Enterprise edition with server version <=v9.4 to v9.5

1. Login into Free instance running Enterprise edition with server version 9.4.
2. Verify a global banner is displayed with a message saying `A new version of Mattermost is available. Refresh the app now`.
3. Refresh the app and verify a red global banner is displayed with a message saying `Your user count exceeds the maximum users allowed. Upgrade to Mattermost Professional or Mattermost Enterprise to continue using Mattermost.`. There should also be a `Learn more` button.

**Scenario**: When user is running Team edition with server version <=v9.4 to v9.5

1. Login into Free instance running Team edition.
2. Verify a global banner is displayed with a message saying `A new version of Mattermost is available. Refresh the app now`.
3. Refresh the app and verify a red global banner is displayed with a message saying `Your user count exceeds the maximum users allowed. Upgrade to Mattermost Professional or Mattermost Enterprise to continue using Mattermost.`. There should also be a `Learn more` button.
