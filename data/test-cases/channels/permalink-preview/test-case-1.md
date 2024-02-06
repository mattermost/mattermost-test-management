---
# (Required) Ensure all values are filled up
name: "Non-channel-admin users can use message links in private channels"
status: Active
priority: Normal
folder: Permalink Preview
authors: "@yasserfaraazkhan"
team_ownership: 
- ICU
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

Preconditions:

1. Ensure that the Mattermost instance is accessible.
2. Make sure normal users do not have permissions to manage private channel members.
3. Have at least two users available: one as the channel admin and another as a member without admin privileges.

Test Steps:

1. Create a private channel with the channel admin user.
2. Type a message in the private channel using the channel admin user.
3. Select the message posted by the channel admin user and use the "Copy Link" option.
4. Paste the copied link in the same private channel.
5. Add another user (non-admin) to the private channel with member permissions.
6. Log into Mattermost with newly added user's account.
7. Navigate to the channel and click on the message link.
8. Verify that the non-admin user can access the message by clicking on the link without encountering any errors.
