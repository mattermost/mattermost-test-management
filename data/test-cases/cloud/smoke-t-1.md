---
# (Required) Ensure all values are filled up
name: "Expand License | Should be able to expand from Portal with right start & end dates"
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

ref defect: <https://mattermost.atlassian.net/browse/MM-52301>

**Step 1**

1. Create new account on test portal (https://portal.test.cloud.mattermost.com/, for sake of testing)
2. Purchase a license and verify on `console/subscriptions` the `Purchase additional seats` button is displayed. Click on this button.
3. Enter Seats in the RHS
4. Verify the cost calculated is correct (ex: prorated calculation $7.5 per month x 11 months)
5. Expand the subscription by purchasing additional seats
6. Verify the purchase is successful and update seat count is displayed on `console/subscriptions`
7. Navigate to `console/purchase-history` and verify the new purchase details are listed on the top
8. Click on `Download invoice` verify the PDF contains right number of Seats, Amount, Date and Time of purchase

Extra manual step

9. Navigate back to `console/subscriptions` and download the license
10. Upload license to any self-hosted instance and verify the license details are correctly displayed on the System Console > License page.
11. Verify purchase email is received by the Admin who purchased additional license
12. Verify the Seats, Amount, Date and Time of purchase, is in-line with details displayed in the portal
13. Download the attachment from email and upload the license to mattermost instance
