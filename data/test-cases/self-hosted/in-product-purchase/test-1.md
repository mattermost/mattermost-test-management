---
# (Required) Ensure all values are filled up
name: "Self-Hosted | Purchase license using existing admin account"
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
- Make sure the instance where feature is being tested has the feature flag 'ServiceSettings.SelfHostedPurchase' enabled
- Instance will also need CloudSettings.CWSURL and CloudSettings.CWSAPIURL.
  hint: we can use cws-rfqa.test.mattermost.com

Test:

- Log into workspace with admin credentials.
- Navigate to System Console > Edition and License and verify there are no license existing.
- Click on 'View Plans' button.
- Click on 'Upgrade' button to purchase 'Professional' plan.
- Verify user is navigated to Purchase screen.
- Verify the various inputs Card details, Organization name, billing adress details.
- Verify on RHS, admin can enter 'Number of Users' and verify the calculation is displayed accordingly
  - Verify User cannot make a purchase for users below existing Active users count in the system.
  - Note: Number of users is always greater than or equal to existing users
- Verify the 'Upgrade' is enabled after entering all valid details
- Click on 'Upgrade' button and verify the purchase successfully goes through.
- Verify on System Console > Edition and License, the 'Professional' plan is displayed.
- Verify below fields are displayed with correct value

  START DATE: <License start date>
  EXPIRES: <License expiration date>
  USERS: <Number of users license is valid for>
  ACTIVE USERS: <Active users in the system>
  EDITION: <License Edition Enterprise or Professional>
  LICENSE ISSUED: <License issue date and time>
  COMPANY / ORG: <Organisation Name>
