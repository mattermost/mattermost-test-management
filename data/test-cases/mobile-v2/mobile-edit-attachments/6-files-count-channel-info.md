---
# (Required) Ensure all values are filled up
name: "User should verify the file appears in the Channel files"
status: Active
priority: Normal
folder: Mobile Edit Attachments
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

Scenario 1: Verify Users can view the file in the Channel Info.

Steps:

1. Login to Mobile and go to a channel.
2. Edit a post.
3. Click on paper clip icon to add attachments.
4. Add a file to post.
5. Verify the file is added to the post in the channel.
6. Go to Channel Info page.
7. Verify the files count is increased.
8. Click on Files.
9. Verify Users can view the file in the list.

Scenario 2: Verify Users cannot view the file in the Channel Info.

Steps:

1. Login to Mobile and go to a channel.
2. Edit a post.
3. Click on Cross icon on the already attached files to remove them.
4. Verify the files is remove from the post in the channel.
5. Go to Channel Info page.
6. Verify the files count is decreased.
7. Click on Files.
8. Verify Users can view the file in the list.
