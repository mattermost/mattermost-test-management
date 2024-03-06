---
# (Required) Ensure all values are filled up
name: "Updates in the list of linked channels with slash commands"
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

1. Link an unlinked channel by running the slash command `/msteams-sync link <msteams-teamID> <msteams-channelID>` on MM.
2. Click on the MS Teams sync plugin icon in the app bar or channel header and open the RHS on MM.

**Step 2**

1. Unlink an linked channel by running the slash command `/msteams-sync unlink` on MM.
2. Click on the MS Teams sync plugin icon in the app bar or channel header and open the RHS on MM.

**Step 3**

1. Unlink all linked channels by running the slash command `/msteams-sync unlink` in all linked channels on MM.
2. Click on the MS Teams sync plugin icon in the app bar or channel header and open the RHS on MM.

**Expected**

The user should be able to verify the newly linked channel in the `list of linked channels` in the RHS of the MS Teams sync plugin on MM.
After step 2, the desired channel should be unlinked and should not be present in the `list of linked channels` in the RHS of the MS Teams sync plugin on MM.
After step 3, the `list of linked channels` should be empty and the user should be able to see the `Link a channel` button in the RHS of the MS Teams sync plugin on MM.