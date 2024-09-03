---
# (Required) Ensure all values are filled up
name: "Attachment Removal from Posts Without Text"
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

1. Post a message that has only an attachment (no text), then remove the attachment.
2. Post a root message with only an attachment (no text), reply to this root post, and then remove the attachment from the root post.
3. Post a root message with text, reply to it with only an attachment (no text), and then remove the attachment from the reply.

**Expected**

- The post that originally contained only an attachment is successfully cleared (attachment removed), marked as `Edited`, and displayed as a blank post, without being deleted.
