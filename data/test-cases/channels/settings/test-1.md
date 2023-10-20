---
# (Required) Ensure all values are filled up
name: "Highlight Keywords without notifications | Should highlight pharases set by logged in user"
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

Test Data:

- Should have a Professional License
- have 2 users, **User A**, **User B**

Scenario: When logged in user posts a phrase

1. Login to mattermost with **User A** account and goto Settings -> Notification modal.
2. In the `Keywords That Get Highlighted (without notifications)` section, type a test phrases and words. Example: `Testing`, `Testing the keyword highlight without notification feature`.
3. Press `Tab` or `Comma` and press `Save` button.
4. Open any channel, and post the example phrase.
5. Verify the Phrase is Highlighted by a yellow background in the center.
6. Click on the post and verify the Phrase is Highlighted by a yellow background in the RHS.

Scenario: When Other user posts a phrase.

7. From **User B** account, post the same phrase.
8. Verify in **User A**'s account that the phrase is highlighted.
