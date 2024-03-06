---
# (Required) Ensure all values are filled up
name: "List of linked channels in RHS"
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

1. Click on the MS Teams sync icon in the app bar or channel header to open the RHS when there are MM channels linked to the MS Teams channel and the logged-in user is a `member` without admin permissions.

**Step 2**

1. Click on the MS Teams sync icon in the app bar or channel header to open the RHS when there are MM channels linked to the MS Teams channel and the logged-in user is a `system admin`.

**Step 3**

1. Click on the MS Teams sync icon in the app bar or channel header to open the RHS when there are no MM channels linked to the MS Teams channel.

**Step 4**
1. Disconnect the user on MM from the RHS or using slash command `/msteams-sync disconnect`.
2. Click on the MS Teams sync icon in the app bar or channel header to open the RHS when there are MM channels linked to the MS Teams channel

**Expected**

The user should be able to see the list of linked channels in the RHS of the MS Teams sync plugin in which they are added as a member in MM.
After step 2, the user should be able to see the list of all the linked channels in the RHS of the MS Teams sync plugin on MM.
After step 3, the `list of linked channels` should be empty and the user should be able to see the `Link a channel` button in the RHS of the MS Teams sync plugin on MM.
After step 4, the user should be able to see the `Request message` to connect their MS Teams account along with the `list of linked channels` in the RHS and the toast message regarding the successful disconnection of their MS Teams account.