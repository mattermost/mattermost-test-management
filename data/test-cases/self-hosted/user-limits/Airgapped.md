---
# (Required) Ensure all values are filled up
name: "Airgapped instance should show global banner and Learn more button"
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

1. Have 1 Free instance running Enterprise edition with 10,000 users running as an airgapped instance
2. Have 1 admin account.

Steps:

**Scenario**: When instance is running on an Enterprise edition without license

1. Login into Free instance running Enterprise edition with 10,000 users.
2. Verify a red global banner should be displayed with a message saying `Your user count is close to the maximum user limit. Upgrade to Mattermost Professional or Mattermost Enterprise to continue using Mattermost.`. There should also be a `Learn more` button.
3. Click on `Learn More` button.
4. Verify a new window is opened pointing to the link `https://mattermost.com/pl/error-code-error-user-limits-exceeded`.

**Scenario**: When instance is running on an Enterprise edition with license

1. Login into instance running Enterprise edition with 10,000 users.
2. Refresh the app and verify the banner is not displayed when user crosses maximum user limit.

**Scenario**: When user is running Team edition

1. Login into instance running Team edition with 10,000 users.
2. Verify a red global banner should be displayed with a message saying `Your user count is close to the maximum user limit. Upgrade to Mattermost Professional or Mattermost Enterprise to continue using Mattermost.`. There should also be a `Learn more` button.
3. Click on `Learn More` button.
4. Verify a new window is opened pointing to the link `https://mattermost.com/pl/error-code-error-user-limits-exceeded`.
