---
# (Required) Ensure all values are filled up
name: "Edit Post to add attachments on Desktop app/Web app"
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

### Scenario 1: User should be able to add attachments while editing a post.

Steps:

1. Navigate to a channel post.
2. Click the "Edit" option in the post actions menu.
3. Use the "Attach" button (paperclip icon) to upload a file.
4. Save the edited post.
5. Verify the attachment is visible.
6. Verify a `Added today` label is shown.

### Scenario 2: User should be able to drag and drop attachments while editing a post.

Steps:

1. Navigate to a channel post.
2. Click the "Edit" option in the post actions menu.
3. Drag and drop a file into the editable area.
4. Verify the attachment is visible.

### Scenario 3: User should be able to add attachments while editing a threaded post.

Steps:

1. Navigate to a threaded post in a channel.
2. Click the "Edit" option in the post actions menu.
3. Use the "Attach" button (paperclip icon) to upload a file or drag and drop a file into the editable area.
4. Save the edited post.
5. Verify the attachment is visible.
