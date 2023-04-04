---
# (Required) Ensure all values are filled up
name: "Cloud Free Deprecation | Cloud Free workspaces that will be deprecated in 90 days (60-30-10-1)"
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

Scenario 1: When instance is 90 days (or 60 days or 30 days), successfully upgrade to a paid plan

1. Login with Admin account
2. Verify Global Banner with a message 'Cloud Free will be depreicated on MM DD YYY. To keep your workspace, upgrade to a paid plan.'
3. Navigate to System console > Subscriptions
4. Verify a CTA is displayed with a message 'Upgrade to a paid plan to keep your workspace'
5. Verify `Upgrade` and `Contact Sales` button is clickable
6. When User clicks on `Contact Sales` button, verify a new tab opens with `https://mattermost.com/contact-sales/`
7. Clicks on the `Upgrade` button, verify Plans modal is opened
8. Click on `Upgrade` button on `Professional` card.
9. Verify the `Purchase` modal is opened
10. Enter `Card` details, `Billing Address` and `Seats`
11. Click on `Upgrade` button on the RHS
12. Verify the Upgrade is successful and license is applied. (Navigate to channels and verify `view plan` is not be shown on the top right of banner)
13. Verify the Billing History page to confirm purchase details

Scenario 2: When instance is 10 days

1. Repeat above steps but verify that Global banner and CTA now has red background color.

Scenario 3: Dismissed Global Banners should reappear after Admin

1. Login with Admin account
2. Verify Global Banner with a message 'Cloud Free will be depreicated on MM DD YYY. To keep your workspace, upgrade to a paid plan.'
3. Dismiss the Banner
4. Log out and log back in
5. Verify the Banner is visible to user
