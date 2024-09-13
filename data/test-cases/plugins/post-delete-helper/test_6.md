---
# (Required) Ensure all values are filled up
name: "Delete Root Post via Slash Command"
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

1. Post a thread, retrieve its root post ID, and execute the slash command `/deleterootpost <root_post_id>`.

**Expected**

- No autocompletion is available when typing `/deleterootpost`.
- A dialog appears with the header `Delete Root Post` and the message `Are you sure you want to delete this post? The thread will remain.`, along with `Cancel` and `Delete` buttons.
- Selecting `Cancel` keeps the attachment intact.
- Selecting `Delete` successfully deletes the root post provided all deletion conditions are met. Otherwise, a system message appears in the channel indicating the reason for failure, such as:
  - `Can't delete root post: Invalid post ID` if `root_post_id` is not valid.
  - `Can't delete root post: Post does not exist` if `root_post_id` cannot be found.
  - `Can't delete root post: Not authorized` if the user has no permission.
  - `Can't delete root post: Post is too old to edit` if the edit time limit has expired.

**Step 2**

1. Create a root post without any replies, retrieve its post ID, and execute the slash command `/deleterootpost <root_post_id>`.

**Expected**

- The `Delete Root Post` dialog should not appear, and the post should not be deleted, as the root post has no replies.


**Step 3**

1. Post a thread, retrieve the post ID of any reply within the thread, and execute the slash command `/deleterootpost <post_id>`.

**Expected**

- The `Delete Root Post` dialog should not appear, and the post should not be deleted, as the command is intended only for root posts.
