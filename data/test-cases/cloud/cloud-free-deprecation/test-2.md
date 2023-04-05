---
# (Required) Ensure all values are filled up
name: "Cloud Free Deprecation | Pricing Modal changes"
status: Active
priority: Normal
folder: Cloud Free Deprecation
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

Ref Epic: <https://mattermost.atlassian.net/browse/MM-51411>

Pre-requisite:
1. Should have an active cloud instance.

Scenario 1: Should not show Cloud Free card in Pricing modal if instance is in Free plan

1. Login with Admin account
2. Navigate to System Console
3. Click on `View plans`
4. Verify the Pricing modal does not show `Free` card
5. Verify the Pricing modal has `Professional` card and `Purchase` button
6. Verify the Pricing modal has `Enterprise` cards and `Contact Sales` button

Scenario 2: Should show `Switch to annual billing` on the `Professional` card in Pricing modal

1. Login with Admin account
2. Navigate to System Console
3. Click on `View plans`
4. Verify the Pricing modal does not show `Free` card
5. Verify the Pricing modal has `Professional` card and `Switch to annual billing` button
