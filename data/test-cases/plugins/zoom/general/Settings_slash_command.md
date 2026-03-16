---
# (Required) Ensure all values are filled up
name: "Settings slash command should not accept any arguments after `/zoom settings`"
status: Active
priority: Normal
folder: General
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

1. Enter and run the slash command `/zoom settings` in any desired channel or DM/GM on MM.

**Expected**

The user should get the following message regarding the choice for using the personal ID for Zoom meeting, `Do you want to use your Personal Meeting ID when starting a meeting?`, `Yes, No, Ask`.

**Step 2**

1. Enter and run the slash command `/zoom` in any desired channel or DM/GM on MM.

**Expected**

The user should get the following message in the channel or DM/GM, `Please specify an action for /zoom command.` 

**Step 3**

1. Enter and run the slash command `/zoom settings <command>` in any desired channel or DM/GM on MM.

**Expected**

The user should get a message regarding the `unknown action` in the desired channel or DM/GM on MM.

**Step 4**

1. Enter and run the slash command `/zoom settings` in any desired channel or DM/GM on MM.

**Expected**

The user should get the message regarding the use of Personal Meeting ID in the desired channel or DM/GM on MM.