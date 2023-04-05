---
# (Required) Ensure all values are filled up
name: "Cloud Evaluation Trial | User should be able to purchase a Plan within 30 days trial period"
status: Active
priority: Normal
folder: Cloud Evaluation Trial
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

Ref Epic: <https://mattermost.atlassian.net/browse/MM-50719>

Scenario 1: Start of trial

1. Create a workspace from `https://portal.test.cloud.mattermost.com/cloud/signup`
2. Login into the workspace
3. Verify the Global banner is displaed with the message `Your 30-day Enterprise trial has started! Purchase before MM-DD to keep your workspace.` and `Review your options` button
4. Nagivate to System Console and click on `View Plans` button
5. Click on `Purchase` button on Professional card
6. Verify Purchase modal is opened
7. Enter Valid Credit card details
8. Enter Valid Billing Address
9. Enter Number of seats on the RHS.
10. Verify the Total Price displayed is correct.
11. Click on `Complete purchase` button.
12. On Successful purchase, verify user can see a message
    - `You've now purchased the Professional plan`
    - `Your professional plan is active starting <MM DD, YYYY> until <MM DD, YYYY+1>`
    - Should be able click on the `Close` button and it should take user to the previous screen
13. Verify the Billing Screen has information about purchase
    - Total Cost
    - Payment status
    - Downloadable invoce link
14. (manual) Verify the user has received Purchase confirmation in email with attached licensed

Note: User can either choose `Professional` or `Enterprise` Plan
