---
# (Required) Ensure all values are filled up
name: "Root Post Deletion with Time Limit"
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

1. Enable `Edit Own Posts` in `System Console > Permission` and set the `Edit Post Time Limit` (e.g., `60` seconds).
2. Post a thread and delete the root post within the time limit.
3. Post another thread, then verify whether the "Remove root post" option is still available after the time limit has expired.

**Expected**

- The "Remove root post" option should only be available within the edit time limit.
- Deleting within the time limit successfully deleted the root post with its message replaced with `*Deleted*` (default) and the post is marked as `Edited`, and its thread remains unchanged.
- Once the edit time limit has passed, the option to remove the root post should no longer be available.
- These expectations apply both to users who own the post and users with permission to edit others' posts.
