---
# (Required) Ensure all values are filled up
name: "Connection prompt in group message with only Mattermost primary users"
status: Active
priority: Normal
folder: connection-prompt
authors: "@lieut-data"
team_ownership: 
- MS Teams
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

**Precondition**

Disconnect from MS Teams, if necessary, via `/msteams disconnect`.

**Step 1**

Send a group message to two users who have chosen chosen Mattermost as their primary platform (or simply not connected to Teams).

**Expected**

Verify no ephemeral message displayed in chat, as there is no need to connect to Microsoft Teams.
