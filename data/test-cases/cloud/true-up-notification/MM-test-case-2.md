---
# (Required) Ensure all values are filled up
name: "System console: Dynamic banner that communicates over-deployment"
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
Ref: https://mattermost.atlassian.net/browse/MM-47646

Pre-requisites:

- Have a workspace with test cloud license that has user less limit for testing purposes
- eg: Assume License has 20 active users limit

Test:

- Log into workspace with admin credentials.
- Create 20 (expect current logged in user) users using /test cmd. Such that the active users above 5% and below 10% threshold.
- Reload the screen. Verify global banner is shown with blue color and a message, "Your workspace user count has exceeded your paid license seat count by 1 seat. Purchase additional seats to remain compliant." The banner should be dismissible.
- Create 4 more users (total 25) using /test cmd. Such that the active users above 10% threshold.
- Reload the screen. Verify banner is shown with red color and a message, "Your workspace user count has exceeded your paid license seat count by 5 seats. Purchase additional seats to remain compliant.".

**Expected**
