---
# (Required) Ensure all values are filled up
name: "Self-Hosted | Billing screen is updated with purchase info"
status: Active
priority: Normal
folder: In product purchase
authors: "@yasserfaraazkhan"
team_ownership: 
- Self-Serve
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Cloud
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

<https://mattermost.atlassian.net/browse/MM-47859>

Pre-requisites:

- Have a workspace with test self-hosted currently on free plan.
- Make sure the instance where feature is being tested had the feature flag 'ServiceSettings.SelfHostedPurchase' enabled

Test:

Successfull purchase.

- Follow steps in <test-1.md> to make a purchase.
- Verify user is able to see Success screen to confirm the purchase.
- Navigate to Billing Screen,
  - Verify billing details are displayed on the screen.
  - Total Price of purchase should be displayed
  - Payment staus should be 'Paid' when successfull purchase is made
  - Date of purchase should be displayed
  - Downloadable PDF link should be present

Unsuccessfull purchase. Due to payment failure.

- The user should be able to see Failure screen in case payment fails
- Navigate to Billing Screen,
  - Verify billing details are displayed on the screen.
  - Total Price of purchase should be displayed
  - Payment staus should be 'failed' when successfull purchase is made
  - Date of purchase should be displayed
  - Downloadable PDF link should be present

Email Veirfication

- On successfull purchase, the admin should be recieving the email with invoice details.
- Verify the price calculation and user seats displayed in the Email invoice should be same as see in Billing screen
