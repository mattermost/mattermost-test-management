---
# (Required) Ensure all values are filled up
name: "Self-Hosted | Verify License change is propagated throughout application"
status: Active
priority: Normal
folder: In product purchase
authors: "@yasserfaraazkhan"
team_ownership: 
- Self-Serve
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Self Hosted
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

<https://mattermost.atlassian.net/browse/MM-47424>

Pre-requisites:

- Have a workspace with test self-hosted currently on free plan.
- Make sure the instance where feature is being tested had the feature flag 'ServiceSettings.SelfHostedPurchase' enabled
- Instance will also need CloudSettings.CWSURL and CloudSettings.CWSAPIURL.
  hint: we can use cws-rfqa.test.mattermost.com

Test:

- Follow steps in <test-1.md> to make a purchase.
- Verify user is able to see Success screen to confirm the purchase.
- Go back to Channels
- From Product switcher option verify user is now able to create User Groups (which is a professional license feature).
