---
# (Required) Ensure all values are filled up
name: "Disconnect user slash command"
status: Active
priority: Normal
folder: Slash commands
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

1. Run the `/msteams-sync disconnect` command.

**Step 2**

1. Run the `/msteams-sync disconnect` command when the user is already disconnected.

**Expected**

The user should receive a message that the user account has been disconnected. Also, on step 2, the user should receive an error message that the user is not connected to any MS Teams account.
