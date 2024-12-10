---
# (Required) Ensure all values are filled up
name: "Verify Edit History with Attachments"
status: Active
priority: Normal
folder: Edited Post
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

### Scenario 1: User should be able to restore the previous version of an edited post that had no attachments.

Preconditions: A post with at least one attachment exists.

Steps:

1. Navigate to a post that was edited with new attachments.
2. Click on the "Edited" option shown beside the post.
3. Verify an RHS panel is shown to the user with the date and time when the post was edited.
4. Restore the version of the post that does not have the attachment.
5. Verify the post is updated. The files are not visible to other users.

### Scenario 2: Verify public links do not work once the retention policy date is passed.

Preconditions: A post with at least one attachment exists. Enable Public link for the attachment.

Steps:

1. Navigate to a post that was edited with new attachments.
2. Click on the "Edited" option shown beside the post.
3. Verify an RHS panel is shown to the user with the date and time when the post was edited.
4. Restore the version of the post that does not have the attachment.
5. Verify the post is updated. The files are not visible to other users.
6. Verify the file public link shows a file not found error.
   - From Admin account, verify the file public link shows a file not found error.

### Scenario 3: Verify the files do not show under Channel files.

Steps:

1. Verify the attachment is visible in Channel files.
2. Navigate to a post that was edited with new attachments.
3. Click on the "Edited" option shown beside the post.
4. Verify an RHS panel is shown to the user with the date and time when the post was edited.
5. Restore the version of the post that does not have the attachment.
6. Verify the post is updated. The files are not visible to other users.
7. Verify the Channel files do not have the attachment anymore.

### Scenario 4: Verify user cannot see the post and file in the edit history if the data retension policy date has past.

Preconditions:

- A post with at least one attachment exists. This post should have been edited.
- Data retention policy is enabled.
- The edited date of the post with attachments should be beyond the file retention and post retention days set.

Steps:

1. Navigate to the post and open the Edit version panel.
2. Verify the user cannot see the post and files of an edit version beyoud data retention date.
