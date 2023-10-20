---
# (Required) Ensure all values are filled up
name: "Highlight Keywords without notifications | Verify if the Highlight Feature is working previously posted messages"
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

Scenario: Edit a Phrase

1. Login to mattermost account.
2. In a channel Post a message `Testing the keyword highlight without notification feature`.
3. goto Settings -> Notification modal.
4. In the `Keywords That Get Highlighted (without notifications)` section, type a test phrase `Testing the keyword highlight without` and a word `feature`.
5. Press `Tab` to conclude the phrase.
6. Press `Save` button.
7. Go back to the Channel, and verify the words in Step 4 are highlight as expected
8. Open the Settings again and delete the Keywords added.
9. Go back to the Channel, and verify the none of the words are highlighted
