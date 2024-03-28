---
# (Required) Ensure all values are filled up
name: "Connection prompt in group message with one Teams primary user"
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

**Step 1**

Disconnect from MS Teams, if necessary, via `/msteams disconnect`.

**Step 2**

Send a group message to a user who has chosen Teams as their primary platform and a user who has chosen Mattermost as their primary platform (or simply not connected to Teams).

**Expected**

Very ephemeral message displayed in chat:

> Some users in this conversation rely on Microsoft Teams to receive your messages, but your account isn't connected. _Click here to connect your account_.

Clicking the embedded link should initiate the oAuth2 flow to connect your account to MS Teams.
