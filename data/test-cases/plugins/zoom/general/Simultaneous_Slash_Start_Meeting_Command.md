---
# (Required) Ensure all values are filled up
name: "Add support for simultaneous /start meeting command"
status: Draft
priority: Normal
folder: General
authors: "@arush-vashishtha"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ""

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

1. Connect your `Zoom` account to Mattermost.
2. In any channel or DM/GM, run the slash command `/zoom start`.
3. End the meeting within 30 seconds by clicking `End Meeting for All` in `Zoom`.
4. In the same channel or DM/GM where the `/zoom start` command was first run, run `/zoom start` again.

**Expected**

A new `Zoom` meeting should start directly.

**Step 2**

1. Connect your `Zoom` account to Mattermost.
2. In any channel or DM/GM, run the slash command `/zoom start`.
3. Keep the meeting running for more than 30 seconds, then end it by clicking `End Meeting for All` in `Zoom`.
4. In the same channel or DM/GM where the `/zoom start` command was first run, run `/zoom start` again.

**Expected**

A new `Zoom` meeting should start directly.

**Step 3**

1. Connect your `Zoom` account to Mattermost.
2. In any channel or DM/GM, run the slash command `/zoom start`.
3. Join the meeting.
4. Without ending the meeting, run `/zoom start` again in the same channel or DM/GM where the `/zoom start` command was first run.

**Expected**

The user should see the `Zoom` Bot message with two buttons `Create New Meeting` and `Join Existing Meeting`.

**Step 4**

1. Connect your `Zoom` account to Mattermost.
2. In any channel or DM/GM, run the slash command `/zoom start`.
3. Join the meeting.
4. Without ending the meeting, run `/zoom start` again in the same channel or DM/GM where the `/zoom start` command was first run.
5. In the `Zoom` Bot message, click `Join Existing Meeting`.

**Expected**

The user should be added to the existing `Zoom` meeting.

**Step 5**

1. Connect your `Zoom` account to Mattermost.
2. In any channel or DM/GM, run the slash command `/zoom start`.
3. Join the meeting.
4. Without ending the meeting, run `/zoom start` again in the same channel or DM/GM where the `/zoom start` command was first run.
5. In the `Zoom` Bot message, click `Create New Meeting`.

**Expected**

The user should be added to a new `Zoom` meeting.
