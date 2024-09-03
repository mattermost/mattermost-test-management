---
# (Required) Ensure all values are filled up
name: 'Verify "Remove Attachments" Post Option Availability'
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

1. Confirm that the "Remove attachments" option is available in the "Message Actions" menu, except for:
- System messages
- Posts without attachment
2. Create the above types of messages/posts and verify that the "Remove attachments" option is not present.

**Expected**

The "Remove attachments" option is not available in the "Message Actions" menu for system messages and posts without attachment.
