---
# (Required) Ensure all values are filled up
name: "Editing text and emoji from MM to Teams"
status: Active
priority: Normal
folder: Message edit
authors: "@AayushChaudhary0001"
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

1. Enter any text/emoji on MM channel(already linked) or DM/GM.
2. Edit the message on the same MM channel(already linked) or DM/GM with any other text message/emoji.

**Expected**

The desired message should be edited and updated on the MS Teams side as well.