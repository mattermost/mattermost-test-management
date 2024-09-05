---
# (Required) Ensure all values are filled up
name: "Verify User can identify the cases for Failed scheduled message"
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

### Scenario 1: Should not send message if User is not in the Channel anymore.

Steps:

1. Log into User's account.
2. Leave the channel where a message was scheduled to be sent.
3. Goto Scheduled Tab in Drafts page.
4. Verify the Error message is on the top of the list.
5. Verify there is a Header `<number> of your scheduled drafts cannot be sent`.
6. Verify the User can see Error message `You’re not a member anymore of the channel.`.

### Scenario 2: Should not send message if Channel is Archived.

1. Log into User's account.
2. Archive the channel where a message was scheduled to be sent.
3. Goto Scheduled Tab in Drafts page.
4. Verify the User can see Error message `Channel is archived`.

### Scenario 3: Should not send message if Channel is Read-only.

1. Log into Admin's account.
2. Goto Channel settings.
3. Disable `Create Posts` permission for the channel.
4. Log into User's account.
5. Goto Scheduled Tab in Drafts page.
6. Verify the User can see Error message `Channel is now read only`.

### Scenario 4: Verify LHS Count displayed when scheduled message fails to be sent.

1. Log into User's account.
2. Verify there is no error icon near Drafts on the LHS
3. Leave the channel where a message was scheduled to be sent.
4. Verify the user can see Error icon in red color.
5. Hover on the Icon a tooltip saying `One of your scheduled drafts cannot be sent`.
6. Goto Scheduled Tab in Drafts page.
7. Hoven on the Failed message and delete it.
8. Verify the Error message is not shown on the LHS anymore.
