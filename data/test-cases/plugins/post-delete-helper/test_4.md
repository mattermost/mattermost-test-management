---
# (Required) Ensure all values are filled up
name: "Permission-Based Root Post Deletion"
status: Active
priority: Normal
folder: Post Delete Helper
authors: "@saturninoabril"
team_ownership:
- Deployment Eng
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

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

1. Create two threads: one with a root post where the user has the `Edit Own Posts` permission (configured in `System Console > Permission`), and another without such permission.
2. Check if the "Remove root post" option is available for each root post.
3. If available, select "Remove root post".

**Expected**

- The "Remove root post" option should be available only for root posts where the user has permission to edit their own posts.
- When the root post is deleted by its own user with the correct permission, the root post message is replaced with `*Deleted*` (default), marked as `Edited`, and the thread remains unchanged.
- If the user lacks permission, the option to delete the root post should not be available.

---

**Step 2**

1. Post two threads: one with root post where the user has `Edit Others' Posts` permission (configured in `System Console > Permission`), and another without such permission.
2. Verify if the "Remove root post" option is available for each root post.
3. If available, select "Remove root post".

**Expected**

- The "Remove root post" option should be available only for root posts where the user has permission to edit others' posts.
- When the root post is deleted by other user with the correct permission, the root post message is replaced with `*Deleted*` (default), marked as `Edited`, and the thread remains unchanged.
- If the user lacks permission, the option to delete the root post of others should not be available.
