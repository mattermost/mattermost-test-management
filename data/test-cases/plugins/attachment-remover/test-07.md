---
# (Required) Ensure all values are filled up
name: "Verify Attachment Removal from Search and Channel Files"
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

1. Post a message with an attachment and then search for the file or click on `Channel files`.
2. Confirm that the file is searchable and listed in `Channel files`.
3. Remove the attachment from the post.

**Expected**

- The file should no longer appear in search results or be listed in `Channel files` after the attachment is removed.
