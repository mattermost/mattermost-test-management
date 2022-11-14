---
# (Required) Ensure all values are filled up
name: "Change Test Title"
status: Active
priority: Normal
folder: True up Notification
authors: "@yasserfaraazkhan"
team_ownership: []

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

## Change Test Title

---

**Step 1**
https://mattermost.atlassian.net/browse/MM-47775

Pre-requisites:

- Have a workspace with test cloud license that has user less limit for testing purposes
- eg: Assume License has 20 active users limit

Test:
- Log into workspace with admin credentials
- Open invite modal. Verify banner is not shown. Close the modal
- Create 20 (expect current logged in user) users using /test cmd. Such that the active users above 5% and below 10% threshold.
- Open invite modal. Verify banner is shown with orange color and a message, "Your workspace user count has exceeded your paid license seat count by 1 seat, ". Close the modal.
- Create 4 more users (total 25) using /test cmd. Such that the active users above 10% threshold.
- Open invite modal. Verify banner is shown with red color and a message, "Your workspace user count has exceeded your paid license seat count by 5 seats". Close the modal.

**Expected**

