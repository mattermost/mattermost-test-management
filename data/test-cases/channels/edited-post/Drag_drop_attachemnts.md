---
# (Required) Ensure all values are filled up
name: "User should be able to drag and drop attachments while editing a post."
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

**Step 1**

### Scenario 1: User should be able to drag and drop attachments while editing a post.

Steps:

1. Navigate to a Channel/Gm/DM where current user has a post to edit.
2. Click the "Edit" option in the post actions menu.
3. Drag and drop a file into the editable area.
4. Verify the attachment is visible.
