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

<https://mattermost.atlassian.net/browse/MM-47859>

Pre-requisites:

- Have a workspace with test self-hosted currently on free plan.
- Make sure the instance where feature is being tested had the feature flag 'ServiceSettings.SelfHostedPurchase' enabled
- Instance will also need CloudSettings.CWSURL and CloudSettings.CWSAPIURL.
  hint: we can use cws-rfqa.test.mattermost.com

Test:

successful purchase.

- Follow steps in <test-1.md> to make a purchase.
- Verify user is able to see Success screen to confirm the purchase.
- Navigate to Billing Screen,
  - Verify billing details are displayed on the screen.
  - Total Price of purchase should be displayed
  - Payment status should be 'Paid' when successful purchase is made
  - Date of purchase should be displayed
  - Downloadable PDF link should be present
  - Verify the details of purchase like Users, Price are same as what we see in 'Edition and License' screen.

Unsuccessful purchase.

- The user should be able to see Failure screen in case payment fails.
- Verify User can see the message "Sorry, the payment verification failed".
- Verify User can see "Close" and "Contact Support" buttons.
- Click on "Close" button and verify user is taken to either Channels or System console > Edition and License screen depending upon from where the user started to make purchase.
- On System console > Edition and License screen, verify the instance is still on a "Free" plan and no license is loaded.
- Navigate to Billing Screen,
  - Verify billing details are not displayed.
    Note: Since this is the first purchase that admin makes, billing screen will not have any data in case purchase failure

Email Verification

- On successful purchase, the admin should be receiving the email with invoice details and invoice PDF attached.
- Verify the price calculation and user seats displayed in the Email invoice should be same as seen on Billing screen
