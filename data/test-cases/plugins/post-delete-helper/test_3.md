---
# (Required) Ensure all values are filled up
name: "Delete a root post"
status: Active
priority: Normal
folder: Post Delete Helper
authors: "@saturninoabril"
team_ownership:
- Deployment Eng
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Plugins
component: null
tags: []
labels: []
tested_by_contributor: ""

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

1. Post a root message with one or more replies. A root post could be:
- with or without attachments
- with or without reactions
- with attachment only and without message
2. Verify that the "Remove root post" option is visible in the root post's menu.
3. Select "Remove root post".

**Expected**

The "Remove root post" option should be available for a root post. When selected, the root message is replaced with `*Deleted*` (default), attachments and reactions are removed, the root post is marked as `Edited`, and the thread remains unchanged. After deletion, the "Remove root post" option is no longer visible for the root post.

**Step 2**

1. Navigate to `System Console > PLUGINS > Post Delete Helper` and change the `Message text to be used after deletion` to a custom value (e.g. `(root post deleted)`)
2. Post a root message with one or more replies.
3. Verify that the "Remove root post" option is visible in the root post's menu.
4. Select "Remove root post".

**Expected**

The "Remove root post" option should be available for the root post. When selected, the root message is replaced with the custom text `(root post deleted)`, the root post is marked as `Edited`, and the thread remains unchanged.
