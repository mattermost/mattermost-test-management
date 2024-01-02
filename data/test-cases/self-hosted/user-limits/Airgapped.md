---
# (Required) Ensure all values are filled up
name: "Airgapped instance should show banner and a popup when admin clicks on contact sales"
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

1. Have 1 Free instance running Enterprise edition with 9001 users running as an airgapped instance
2. Have 1 admin account.

Steps:

**Scenario**: When user is running enterprise edition

1. Login into Free instance running Enterprise edition with 9001 users.
2. Verify a red global banner should be displayed with a message saying `Your user count is close to the maximum user limit. Upgrade to Mattermost Professional or Mattermost Enterprise to continue using Mattermost.`. There should also be a `Contact sales` button.
3. Click on `Contact sales` button.
4. Verify a popup with heading `Looks like you do not have access to the internet` is displayed.
5. Add Professional/Enterprise license to the instance.
6. Verify the global banner is not showing up.
