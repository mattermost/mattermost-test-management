---
# (Required) Ensure all values are filled up
name: "Verify User can download the files after restoring old post with attachments"
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

### Scenario 1: User should be able to download files after restoring a old version.

Preconditions:

- A post with attachment should have been edited.
- Current edited version of post should not have attachment.

Steps:

1. Navigate to a post.
2. Click on the "Edited" option shown beside the post.
3. Verify an RHS panel is shown to the user with the date and time when the post was edited.
4. Restore the old version of post that has attachment.
5. Download the attachment from the post.
6. Verify the file is successfully downloaded.
