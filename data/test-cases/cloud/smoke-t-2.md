---
# (Required) Ensure all values are filled up
name: "Expand License | Should not show annaul deprication banner to selected clients"
status: Active
priority: Normal
folder: Cloud
authors: "@yasserfaraazkhan"
team_ownership: 
- Self-Serve
priority_p1_to_p4: P1 - Smoke Tests (App testable?)

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

ref defect: <https://mattermost.atlassian.net/browse/MM-52158>

**Step 1**

1. Create new account on test portal (https://portal.test.cloud.mattermost.com/cloud/signup, for sake of testing)
2. Purchase a `Professional`.
3. Log into stripe account. Switch to Test mode. Search for the customer that just signed up.
4. Get into subscriptions detail page and update the subscription to become monthly (add a product that has monthly price and update the product ID in the subscription meta-data )
5. Verify on the mm instance that User can see global banners suggesting to move to Annual subscription
6. On stripe, add a metadata `billing-type: internal` or `billing-type: licensed`. and wait for 5 mins.
7. Reload the mm instance and Verify the banner is not visible anymore
