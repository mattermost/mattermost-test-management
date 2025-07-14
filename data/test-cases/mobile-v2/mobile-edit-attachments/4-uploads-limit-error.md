---
# (Required) Ensure all values are filled up
name: "User should see an error message if more than 10 files are uploaded"
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

Scenario 1: Verify Users can see error if more than 10 files are uploaded while editing a post.

Steps:

1. Login to Mobile and go to a channel.
2. Edit a post.
3. Click on paper clip icon to add attachments.
4. Select more than 10 files.
5. Verify User can see an error message and only 10 files are uploaded.

Scenario 2: Verify Users can see error if large file size is uploaded while editing.

Steps:

1. Login to Mobile and go to a channel.
2. Edit a post.
3. Click on paper clip icon to add attachments.
4. Select more than FileSize limit of the server.
5. Verify User can see an error message.
