---
# (Required) Ensure all values are filled up
name: "Attachment Removal with Time Limit"
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

1. Set a post edit time limit (e.g., `60` seconds).
2. Post a message with an attachment and remove it within the time limit.
3. Post another message with an attachment and attempt to remove it after the time limit.

**Expected**

- The "Remove attachments" option is available for both posts.
- Removing within the time limit successfully removes the attachment, and the post is marked as `Edited`.
- Attempting removal after the time limit fails, with a system message: `Can't remove attachments: Post is too old to edit`.
