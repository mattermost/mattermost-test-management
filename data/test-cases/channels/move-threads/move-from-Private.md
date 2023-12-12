---
# (Required) Ensure all values are filled up
name: "Move a post Private channel"
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

Scenario 1: Move root post from Private Channel

Test Setup:

1. Feature flag `moveThreadsEnabled` should be enabled.
2. Enable `Enable Moving Threads From Private Channels` option from the System Console > Move thread.

Steps:

1. Log into mattermost with User A. Create a Private channel `Private Test Channel` with 3 users example: User A, User B and User C.
2. Post a message in the Private channel.
3. Hover on the post and click on the dot menu to see message actions.
4. Click on `Move Thread` option.
5. Verify a pop up with `Move thread` header appears.
6. Select the `Town Square` channel from `Select channel or people` dropdown.
7. Click on `Move` button.
8. Verify the post appears in the `Town Square` channel.
9. Navigate to previous channel from where the thread was moved.
10. Verify a system message `A thread with N messages has been moved: http://<instance-name>/<team-name>/pl/<channel-id>` is shown.

Scenario 2: Should not be able to Move root post Private Channel

Test Setup:

1. Feature flag `moveThreadsEnabled` should be enabled.
2. Disable `Enable Moving Threads From Private Channels` option from the System Console > Move thread.

Steps:

1. Log into mattermost with User A. Create a Private channel `Private Test Channel` with 3 users example: User A, User B and User C.
2. Post a message in the Private channel.
3. Hover on the post and click on the dot menu to see message actions.
4. `Move Thread` option should not be show to the user.

Scenario 3: Should not be able to Move root post other Private Channel in which current user has no access.

Test Setup:

1. Feature flag `moveThreadsEnabled` should be enabled.
2. Disable `Enable Moving Threads From Private Channels` option from the System Console > Move thread.
3. Create a Private channel with name `New Private test Channel` with User B and User C as members.

Steps:

1. Log into mattermost with User A. Create a Private channel `Private Test Channel` with 3 users example: User A, User B and User C.
2. Post a message in the Private channel.
3. Hover on the post and click on the dot menu to see message actions.
4. `Move Thread` option should not be show to the user.
5. Verify a pop up with `Move thread` header appears.
6. Verify User A is not seeing `New Private test Channel` in the Drop Down

7. Login as User B.
8. Go to the `Private Test Channel`.
9. Move the thread to `New Private test Channel`.
10. Verify the thread is moved and system message is displayed with the link to `New Private test Channel`.
11. Try to access the link to `New Private test Channel` in new tab.
12. Verify the Team not found error is displayed.
