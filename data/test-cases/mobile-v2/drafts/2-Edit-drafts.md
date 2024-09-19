---
# (Required) Ensure all values are filled up
name: "Edit Drafts on mobile app"
status: Active
priority: Normal
folder: Drafts
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: N/A
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

Steps:

1. Log into user's account on a Mobile device.
2. Verify there is no Draft option seen in the channel list screen.
3. Goto any DM/GM/Channel and type a message (with or without attachments) but dont send it.
4. Navigate back to the channel list.
5. Verify the draft option is shown. Click on Drafts.
6. Verify the typed message is shown.
7. Verify the Draft message has information of `To:` DM/GM/Channel.
8. Long press on the Draft message.
9. Verify option to Edit, Send Draft and Delete pops up.
10. Click on Edit option.
11.
