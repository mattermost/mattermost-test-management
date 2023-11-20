---
# (Required) Ensure all values are filled up
name: "Promote slash command"
status: Active
priority: Normal
folder: Slash commands
authors: "@AayushChaudhary0001"
team_ownership: 
- Change Team Name
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

1. Run the `/msteams-sync promote <MM_username> <new_username>` command in any channel or DM/GM by the system admin account.

**Step 2**

1. The user to be promoted(whose MM username will be provided) should be already promoted.
2. Run the `/msteams-sync promote <MM_username> <new_username>` command in any channel or DM/GM by the system admin account.

**Expected**

The user should be promoted to a normal user with the new assigned username. On step 2, the user should be returned an error message that the desired user was not found.
