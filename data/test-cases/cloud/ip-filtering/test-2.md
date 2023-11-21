---
# (Required) Ensure all values are filled up
name: "IP Filtering | Add IP Filtering Rule in System console"
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

Scenario 1: Should be able to save a rule with current IP address.

1. Login with admin credentials.
2. Navigate to System Console > Site Configuration > IP Filtering.
3. Toggle to enable the `Enable IP Filtering` settings.
4. Click on `Add rule`.
5. 
3. Add a rule from the IP Filter modal.
   Note: The will have your current IP Address listed. Add that rule and append “/32” so that the IP address is added to the filters.

4. Click the save button in the bottom left, confirming on the resulting confirmation modal.
5. Verify the Rule is displayed on the page.

Scenario 2: Should Not be able to save a rule with current IP address.
