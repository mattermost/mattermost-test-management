---
# (Required) Ensure all values are filled up
name: "Remove Attachments from Posts"
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

1. Post two messages: one with a single attachment and another with multiple attachments.
2. Ensure the "Remove attachments" option is available in the menu.
3. Select "Remove Attachments" for each post.

**Expected**

The "Remove attachments" option is available for both posts. Upon selection, the attachments are removed, and the post is marked as `Edited`.
