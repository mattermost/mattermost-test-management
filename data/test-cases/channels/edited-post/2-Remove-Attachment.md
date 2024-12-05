---
# (Required) Ensure all values are filled up
name: "Edit Post to remove attachments on Desktop app/Web app"
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

### Scenario 1: User should be able to remove attachments while editing a post.

Preconditions: A post with at least one attachment exists.

Steps:

1. Navigate to a post with an attachment.
2. Click "Edit" in the post actions menu.
3. Remove the attachment by clicking the delete icon (X) on the attachment thumbnail.
4. Verify a confirmation modal pops up.
5. Click on the `Delete` button.
6. Save the edited post.
7. Verify the attachment is not visible.
8. Verify a message `Attachment deleted` is shown.
   - If multiple attachments are deleted, the message should indicate `<Number of> attachments deleted`.
9. Hover on the label, and verify a tooltip with attachment names is displayed.
