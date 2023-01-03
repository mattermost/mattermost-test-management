---
# (Required) Ensure all values are filled up
name: "Self-Hosted| Air Gapped Instances | Verify admin should not see purchase modal"
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

<https://mattermost.atlassian.net/browse/MM-47860>

Pre-requisites:

- Have a workspace with test self-hosted currently on free plan.
- Make sure the instance where feature is being tested had the feature flag 'ServiceSettings.SelfHostedPurchase' enabled
  Note: AIR gapped instances will (or might) not have access to internet.

Test:

- Log into workspace with admin credentials.
- Navigate to System Console > Edition and License and verify there are no license existing.
- Click "View plans", verify pricing modal is displayed.
- Click the "Upgrade" button for the professional plan.
- Verify a modal is shown to the user with message as following, "It appears that your instance is air-gapped, or it may not be connected to the internet. To purchase a license, please visit https://customers.mattermost.com/signup."
