---
# (Required) Ensure all values are filled up
name: "Permission-Based Attachment Removal"
status: Active
priority: Normal
folder: Attachment Remover
authors: "@saturninoabril"
team_ownership:
- Deployment Eng
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

1. Post two messages with attachments: one where the user has permission to edit others' posts, and one without that permission.
2. Check if the "Remove attachments" option is available.
3. Attempt to remove attachments for both posts.

**Expected**

- The "Remove attachments" option is available for both posts.
- If the user has permission, the attachment is removed, and the post is marked as `Edited`.
- If the user lacks permission, the attachment is not removed, and a system message displays `Can't remove attachments: Not authorized`.
