---
# (Required) Ensure all values are filled up
name: "Display a notice banner only to admins when the instance is in overage users state on Invite Modal."
status: Active
priority: Normal
folder: True-up Notifications
authors: "@yasserfaraazkhan"
team_ownership: 
- Self-Serve

# (Optional)
priority_p1_to_p4: P1 - Smoke Tests (App testable?)
location: cloud
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
https://mattermost.atlassian.net/browse/MM-47775

Pre-requisites:

- Have a workspace with test self-hosted license that has user less limit for testing purposes
- eg: Assume License has 20 active users limit

Test:

- Log into workspace with admin credentials
- Open invite modal. Verify banner is not shown. Close the modal
- Create 20 (expect current logged in user) users using `/test` cmd. Such that the active users above 5% and below 10% threshold.
- Open invite modal. Verify banner is shown with yellow color and a message, "Your workspace user count has exceeded your paid license seat count by 1 seat. Notify your Customer Success Manager on your next true-up check". Close the modal.
- Create 4 more users (total 25) using `/test` cmd. Such that the active users above 10% threshold.
- Open invite modal. Verify banner is shown with red color and a message, "Your workspace user count has exceeded your paid license seat count by 5 seats. Notify your Customer Success Manager on your next true-up check". Close the modal.
- Verify the banner shouldn't appear if the admin had previously dismissed it.
  **Expected**
