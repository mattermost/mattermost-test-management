---
# (Required) Ensure all values are filled up
name: "File attachment warning when disabled and sending to a Teams primary user"
status: Active
priority: Normal
folder: file-attachments
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

Disable synchronization of file attachments. (Set `syncfileattachments` to `false` in plugin configuration.)

**Step 2**

Connect to MS Teams.

**Step 3**

Send a direct message with a file attachment to a user who has chosen Teams as their primary platform.

**Expected**

Very message displayed in chat:

> Attachments sent from Mattermost aren't yet delivered to Microsoft Teams.
