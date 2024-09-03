---
# (Required) Ensure all values are filled up
name: "Remove Attachments via Slash Command"
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

1. Post a message with an attachment, retrieve its post ID, and post a slash command `/removeattachments <post_id>`.

**Expected**

- No autocompletion is available when typing `/removeattachments`.
- A dialog appears with the header `Remove Attachments` and the message `Are you sure you want to remove all attachments from this post?`, along with `Cancel` and `Remove` buttons.
- Selecting `Cancel` keeps the attachment intact.
- Selecting `Remove` successfully removes the attachment if all conditions for removal are met. If not, a system message is posted in the channel indicating the reason.
