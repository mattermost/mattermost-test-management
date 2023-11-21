---
# (Required) Ensure all values are filled up
name: "IP Filtering feature is available for Enterprise license and Enterprise trial license"
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

Scenario 1: The Feature flag is Disabled and instance is on Enterprise trial license.

1. In Split.io disable `CloudIPFiltering` feature flag for all test environments.
2. Login with admin credentials.
3. Navigate to System console > Site COnfiguration.
4. Verify that `IP Filtering` option is Not visible.

Scenario 2: The Feature flag is Enabled and instance is on Enterprise trial license.

1. In Split.io enable `CloudIPFiltering` feature flag for all test environments.
2. Login with admin credentials.
3. Navigate to System console > Site COnfiguration.
4. Verify that `IP Filtering` option is visible.

Scenario 3: The Feature flag is Enabled and instance is on Enterprise trial license.

1. In Split.io enable `CloudIPFiltering` feature flag for all test environments.
2. Login with admin credentials.
3. Upgrade the instance to `Cloud professional` license.
4. Navigate to System console > Site COnfiguration.
5. Verify that `IP Filtering` option is Not visible.
