---
# (Required) Ensure all values are filled up
name: "Verify User deleted files are not listed under channel files"
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

### Scenario 1: Verify the files do not show under Channel files.

Steps:

1. Verify the attachment is visible in Channel files.
2. Navigate to a post that was edited with new attachments.
3. Click on the "Edited" option shown beside the post.
4. Verify an RHS panel is shown to the user with the date and time when the post was edited.
5. Restore the version of the post that does not have the attachment.
6. Verify the post is updated. The files are not visible to other users.
7. Verify the Channel files do not have the attachment anymore.

### Scenario 1: Verify the User deleted files are not accessible by Sysadmin through file's public link.

Preconditions:

- Enable Public link to the files.

Steps:

1. Verify the attachment is visible in Channel files.
2. Navigate to a post that was edited with new attachments.
3. Copy the public link of the files and paste it in the channel.
4. Edit the Post and remove attachments.
5. Verify the post is updated. The files are not visible to other users.
6. Verify the Channel files do not have the attachment anymore.
7. Click on the public file link shared in the channel.
8. Verify User and System admin both see File not found error.
