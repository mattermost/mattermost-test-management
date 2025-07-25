---
# (Required) Ensure all values are filled up
name: "Add Files to a post"
status: Active
priority: Normal
folder: Mobile Edit Attachments
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
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

Scenario 1: Edit a post and Add files to the post.

Steps:

1. Login to Mobile and go to a channel.
2. Edit a Message.
3. Verify the Edit page opens.
4. Attach Files to the message and save.
5. Verify the Files are visible in the channel.
