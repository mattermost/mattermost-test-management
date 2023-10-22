---
# (Required) Ensure all values are filled up
name: "Admin Login | Verify Highlight Keywords without notifications is available only for Professional license"
status: Active
priority: Normal
folder: Settings
authors: "@yasserfaraazkhan"
team_ownership: 
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

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

Scenario: When instance is on a free subscription.

1. Login to mattermost with Admin account and goto Settings -> Notification modal.
2. Scroll to `Keywords That Get Highlighted (without notifications)` section.
3. Verify that the Setting is disabled and we see `Professional` tag indicating it is available after upgrading the instance to Professional license.
4. Click on the Professional tag.
5. Verify that a modal with title `Highlighted Keywords without notifications with Mattermost Professional` appears.
6. Click on `View Plans` button.
7. Verify that the pricing modal is opened.
