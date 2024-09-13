---
# (Required) Ensure all values are filled up
name: "Verify 'Remove root post' Post Option Availability"
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

1. Confirm that the "Remove root post" option is available in the "Message Actions" menu of posts, except for:

- System messages
- Not a root post
- Root post without any reply
- Posts where the user lacks permission to edit
- Posts created after the edit time limit has expired

2. Create posts of each type listed above and confirm that the "Remove root post" option is not available.

**Expected**

The "Remove root post" option should not appear in the "Message Actions" menu for the specified posts.
