---
# (Required) Ensure all values are filled up
name: "Verify User can identify the cases for failed scheduled message"
status: Active
priority: Normal
folder: Schedule Messages
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

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

1. Should have scheduled messages as root post in a DM/GM/Channel.

### Scenario 1: Should not send message if User is not in the Channel anymore.

Steps:

1. Log into User's account.
2. Leave the channel where a message was scheduled to be sent.
3. Go to Scheduled tab in Drafts page.
4. Verify the Error message is on the top of the list.
5. Verify there is a Header `<number> of your scheduled drafts cannot be sent`.
6. Verify the User can see Error message `You’re not a member anymore of the channel.`.
7. Verify the message has a tag `NOT IN THE CHANNEL` in red alert.

### Scenario 2: Should not send message if Channel is Archived.

1. Log into User's account.
2. Archive the channel where a message was scheduled to be sent.
3. Go to Scheduled tab in Drafts page.
4. Verify the User can see Error message `CHANNEL IS ARCHIEVED`.
5. Verify the message has a tag `CHANNEL IS ARCHIEVED` in red alert.

### Scenario 3: Should not send message if Channel is Read-only.

1. Log into Admin's account.
2. Go to Channel settings.
3. Disable `Create Posts` permission for the channel.
4. Log into User's account.
5. Go to Scheduled tab in Drafts page.
6. Verify the User can see Error message `CHANNEL IS READ-ONLY`.
7. Verify the message has a tag `CHANNEL IS READ-ONLY` in red alert.

### Scenario 4: Should not send message if User is removed from a Private Channel.

1. Log into User's account.
2. Leave the Private channel where User had some scheduled messages.
3. Go to Scheduled tab in Drafts page.
4. Verify the message has a tag `NOT IN THE CHANNEL` in red alert.
5. Verify the User can see `No Channel` in the Channels section.

### Scenario 5: Verify LHS Count displayed when scheduled message fails to be sent.

1. Log into User's account.
2. Verify there is no error icon near Drafts on the LHS
3. Leave the channel where a message was scheduled to be sent.
4. Verify the user can see Error icon in red color.
5. Hover on the Icon a tooltip saying `One of your scheduled drafts cannot be sent`.
6. Go to Scheduled tab in Drafts page.
7. Hover on the Failed message and delete it.
8. Verify the Error message is not shown on the LHS anymore.

### Scenario 6: Verify Schedule message fails if the root post is moved to Private channel on the same team.

1. Log into User A's account and create a Root post in a channel.
2. Reply to the root post with some messages.
3. Log into User B's account and create a threaded scheduled message on the root post.
4. From User A's account, Using **Move Threads** feature, move the root post to a private Channel where User B is not a member.
5. Log into User B's account.
6. Go to Scheduled messages tab.
7. Verify the message has a tag `NOT IN THE CHANNEL` in red alert.
8. Verify the User can see `No Channel` in the Channels section.

### Scenario 7: Verify Schedule message fails if the root post is moved to another team.

1. Log into User A's account and create a Root post in a channel.
2. Reply to the root post with some messages.
3. Log into User B's account and create a threaded scheduled message on the root post.
4. From User A's account, Using **Move Threads** feature, move the root post to another Team where User B is not a member.
5. Log into User B's account.
6. Go to Scheduled messages tab.
7. Verify the message has a tag `NOT IN THE CHANNEL` in red alert.
8. Verify the User can see `No Channel` in the Channels section.