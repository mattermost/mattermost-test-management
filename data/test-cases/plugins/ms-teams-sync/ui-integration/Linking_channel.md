---
# (Required) Ensure all values are filled up
name: "Linking a channel on MM"
status: Active
priority: Normal
folder: ui-integration
authors: "@arush-vashishtha"
team_ownership: []
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

1. Click on the `Link a channel` button in the RHS of the MS Teams sync plugin on MM.
2. Search and select the desired `Mattermost channel`, the desired `Microsoft team` and a desired `Microsoft channel` for the selected MS team in the `Link a channel` dialog.
3. Click on the `Link channels` button in the `Link a channel` dialog.

**Step 2**

1. Click on the `Link a channel` button in the RHS of the MS Teams sync plugin on MM.
2. Click on the `cancel` or `x` button in the `Link a channel` dialog.


**Step 3**

1. Click on the `Link a channel` button in the RHS of the MS Teams sync plugin on MM.
2. Click on the `Link channels` button in the `Link a channel` dialog.

**Step 4**

1. Click on the `Link a channel` button in the RHS of the MS Teams sync plugin on MM.
2. Click on the dropdown to select the desired `Microsoft channel` when the `Mattermost channel` and `Microsoft team` are not selected in the `Link a channel` dialog.

**Step 5**
1. Enter the slash command `/msteams-sync link` in the channel on MM.
2. Search and select the desired `Mattermost channel`, the desired `Microsoft team` and a desired `Microsoft channel` for the selected MS team in the `Link a channel` dialog.
3. Click on the `Link channels` button in the `Link a channel` dialog.

**Expected**

The desired channel should get linked and a toast message should be visible in the RHS of MS Teams sync plugin for successfull linking with an update in the list of linked channels on MM.
After step 2, the `Link a channel` dialog should close and the RHS should persist its state.
After step 3, the `Link channels` button should be disabled in the `Link a channel` dialog.
After step 4, the dropdown list should be disabled for the `Microsoft Teams channel` when the `Microsoft Teams team` is not selected in the `Link a channel` dialog.
After step 5, the desired channel should get linked with an update in the `List of linked channels` in the RHS of the MS Teams sync plugin on MM.