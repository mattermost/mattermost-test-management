---
# (Required) Ensure all values are filled up
name: "Verify User can download from Edit History of a post"
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

### Scenario 1: User should be able to download from Edit History of a post.

Preconditions: A post with at least one attachment exists.

Steps:

1. Navigate to a post that was edited with new attachments.
2. Click on the "Edited" option shown beside the post.
3. Verify an RHS panel is shown to the user with the date and time when the post was edited.
4. Download the attachment from the version other than the current one.
5. Verify the file is successfully downloaded.

### Scenario 2: User should not be able to download from Edit History of a post if the attachment is deleted.

Preconditions: A post with at least one attachment exists. Enable Public link for the attachment.

Steps:

1. Navigate to a post that was edited with new attachments.
2. Click on the "Edited" option shown beside the post.
3. Verify an RHS panel is shown to the user with the date and time when the post was edited.
4. Restore the version of the post that does not have the attachment.
5. Verify the post is updated. The files are not visible to other users.
6. Verify the file public link shows a file not found error.
