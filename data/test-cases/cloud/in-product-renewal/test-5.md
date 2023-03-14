---
# (Required) Ensure all values are filled up
name: "Renewal | Should be available to Renew within the product"
status: Active
priority: Normal
folder: In-product Renewal
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

Ref Epic: <https://mattermost.atlassian.net/browse/MM-50363>

Pre-requisites:

- Should be a selfhosted instance
- Should be up for renewal
- Should not be a sales-serve
- Should have crossed the Number of seats
- Should not be Airgapped

Test:

Scenario 1: Renewing the current professional plan

1. Login with Admin and Navigate to System Console
2. Verify Global banner for Renewal with message `License expires in X days. Renew now to avoid disruption <['Renew now'] button>`
3. Verify CTA is Renewal with message
4. Verify on `View Plan` modal `Renew` is shown on Professional card
5. Verify on `View Plan` modal `Upgrade` is shown on Entriprise card and contact sales is removed.
6. Click on `Renew` and verify purchase modal is opened.
7. On RHS,
   - Enter #number of seats. Number should be equal or greater that current active seats.
   - Verify the current plan `Professional` is displayed
8. Verify the Total cost displayed.
9. Enter required Card information and verify `Complete the purchase` button is enabled. Click on Complete the purchase.
10. Verify the Purchase is successful and user can see a message `You've successfully renewed your license!`.
11. Verify `Close` button is displayed and user should be able to go back to system console page

Scenario 1: Upgrading to Entriprise plan

1. Login with Admin and Navigate to System Console
2. Verify Global banner for Renewal with message `<Professional| Enterprise> License is expired and some features maybe disabled <['Renew now'] button>`
3. Verify a Disabled button with text `Add seats` is displayed in license section.
4. Verify message `Expired` beside expiring date in the license
5. Verify on `View Plan` modal `Renew` is shown on Professional card
6. Verify on `View Plan` modal `Upgrade` is shown on Entriprise card and contact sales is removed.
7. Click on `Upgrade` and verify purchase modal is opened.
8. On RHS,
   - Enter #number of seats. Number should be equal or greater that current active seats.
   - Verify the current plan `Enterprise` is displayed
9. Verify the Total cost displayed.
10. Enter required Card information and verify `Complete the purchase` button is enabled. Click on Complete the purchase.
11. Verify the Purchase is successful and user can see a message `You've successfully renewed your license!`.
12. Verify `Close` button is displayed and user should be able to go back to system console page
