---
# (Required) Ensure all values are filled up
name: "Verify User can Edit a scheduled message in DM/GM/Channel"
status: Active
priority: Normal
folder: Schedule Messages
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

Prerequisites:

1. Should have scheduled messages in a DM/GM/Channel.

### Scenario 1: Able to Edit the contents of a scheduled message.

Steps:

1. Log into User's account.
2. Goto `Scheduled` tab under drafts page.
3. Hover on the message you want to edit.
4. Click on `Edit` icon.
5. Update the post text.
6. Click on Save.
7. Verify the post is updated.

### Scenario 2: Able to reschedule the time.

Steps:

1.
   1. Log into User's account.
2. Goto `Scheduled` tab under drafts page.
3. Hover on the message you want to edit.
4. Click on `Reschedule` icon.
5. Verify a Modal is opened.
6. Update the date and time.
7. Click on Save button.
8. Verify the Scheduled message time is updated.

### Scenario 3:
