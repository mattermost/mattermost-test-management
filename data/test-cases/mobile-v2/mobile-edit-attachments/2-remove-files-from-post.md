---
# (Required) Ensure all values are filled up
name: "Remove Files from a post"
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

Scenario 1: Remove files from a post.

Steps:

1. Login to Mobile and go to a channel.
2. Edit a Message with files attached.
3. Verify the Edit page opens.
4. Verify the already attached Files icons are shown with a Cross mark.
5. Click on the cross mark on the files to remove them from the post.
6. Save the post.
7. Verify the files are removed from the Post in the Channel.
8. Go to Channel files list.
9. Verify the removed files are not displayed in the channel files.
