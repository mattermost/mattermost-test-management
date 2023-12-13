---
# (Required) Ensure all values are filled up
name: "Should be able to move a threaded post less than or equal to the Max Thread Count Move Size"
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

Test Setup:

1. Feature flag `moveThreadsEnabled` should be enabled.
2. Enable `Enable Moving Threads From Public Channels` option from the System Console > Move thread.
3. Have 1 user with mattermost.com domain, let's say User A.
4. Set `Max Thread Count Move Size` to 10.

Scenario 1: Should be able to move a threaded post that is less than or equal to `Max Thread Count Move Size`.

Steps:

1. Log into mattermost with User A.
2. Create a Threaded Post in a public channel with Max threads to be less than or equal to 10. Including the root post.
3. Hover on the post and click on the dot menu to see message actions.
4. Click on `Move Thread` option.
5. Verify a pop up with `Move thread` header appears.
6. Select the channel from `Select channel or people` dropdown.
7. Click on `Move` button.
8. Verify the post appears in the new channel.
9. Navigate to previous channel from where the thread was moved.
10. Verify a system message `A thread with N messages has been moved: http://<instance-name>/<team-name>/pl/<channel-id>` is shown.

Scenario 2: Should not be able to move a threaded post that is greater than `Max Thread Count Move Size`.

Steps:

1. Log into mattermost with User B.
2. Create a Threaded Post in a public channel with Max threads to be less than or equal to 10. Including the root post.
3. Hover on the post and click on the dot menu to see message actions.
4. `Move Thread` option should not be shown to the user.
