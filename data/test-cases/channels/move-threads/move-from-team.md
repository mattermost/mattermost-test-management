---
# (Required) Ensure all values are filled up
name: "Move a post from one team to another"
status: Active
priority: Normal
folder: Move Threads
authors: "@yasserfaraazkhan"
team_ownership: 
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
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

Scenario 1: Move root post from one team's public channel to another team's public channel

Test Setup:

1. Feature flag `moveThreadsEnabled` should be enabled.
2. Enable `Enable Moving Threads To Different Teams` option from the System Console > Move thread.
3. Create 2 teams Team 1 and Team 2.
4. In Team 1, add User A, User B and User C.
5. In Team 2, add User B and User C.

Steps:

1. Log into mattermost with User B.
2. Post a message in the Team 1's public channel.
3. Hover on the post and click on the dot menu to see message actions.
4. Click on `Move Thread` option.
5. Verify a pop up with `Move thread` header appears.
6. Select the channel from Team 2 in the `Select channel or people` dropdown.
7. Click on `Move` button.
8. Verify the post appears in the new channel.
9. Navigate to previous channel from where the thread was moved.
10. Verify a system message `A thread with N messages has been moved: http://<instance-name>/<team-name>/pl/<channel-id>` is shown.
11. Log into mattermost with User A.
12. Verify User A can see the system message that reads `This thread was moved from another channel`.
