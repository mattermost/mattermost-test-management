---
# (Required) Ensure all values are filled up
name: "No file attachment warning when disabled and sending to a group message with only Mattermost primary users"
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

Send a group message with a file attachment to two users who have chosen chosen Mattermost as their primary platform (or simply not connected to Teams).

**Expected**

Verify no warning message displayed in chat, as attachments are delivered to Mattermost users normally.
