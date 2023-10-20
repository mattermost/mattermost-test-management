---
# (Required) Ensure all values are filled up
name: "Highlight Keywords without notifications | Should be able to add a long phrase and word by pressing Tab or Comma"
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

Scenario: Use `Tab` to add a Phrase as a Keyword to be highlighted.

1. Login to mattermost account and goto Settings -> Notification modal.
2. In the `Keywords That Get Highlighted (without notifications)` section.
3. Type a test phrase `Testing the keyword highlight without notification feature`.
4. Press `Tab` to conclude the phrase.
5. Press `Save` button.
6. Expand `Keywords That Get Highlighted (without notifications)` again.
7. Verify the phrase is saved.

Scenario: Use `Comma` to add a Phrase as a Keyword to be highlighted.

1. Goto `Keywords That Get Highlighted (without notifications)` section in the settings.
2. Type test Words and separate them by pressing `comma` Example: `Testing`, `keyword`, `highlight`.
3. Press `Save` button.
4. Expand `Keywords That Get Highlighted (without notifications)` again.
5. Verify the phrase is saved.
