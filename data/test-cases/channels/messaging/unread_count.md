---
# (Required) Ensure all values are filled up
name: "Should handle mention counts correctly when marking a thread as unread and unfollowing it"
status: Active
priority: Normal
folder: Messaging
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
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

1. Post a root post as another user mentioning the test user.
2. Post a reply to the root post mentioning the test user.
3. Post another reply to the root post mentioning the test user.
4. Click on the root post to open the RHS (Right-Hand Sidebar).
5. Wait for the RHS to open.
6. Mark the thread as unread by selecting "Mark as Unread" from the post dropdown menu.
7. Wait for the unread status to be marked correctly.
8. Close the RHS.
9. Switch to a different team.
10. Verify that the mention count is visible on the original team's button.
11. Switch back to the original team.
12. Unfollow the thread by clicking "Following" in the post thread footer.
13. Switch to a different team and then back to the original team.
14. Verify that there is no mention count on the original team's button.
