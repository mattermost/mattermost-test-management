---
# (Required) Ensure all values are filled up
name: "Simultaneous slash Start Meeting command.md"
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

1. Connect your Zoom account to Mattermost.
2. In a channel, run the slash command `/zoom start`.
3. End the meeting within 30 seconds.
4. Run `/zoom start` again in the same channel.

**Expected**

The user should not see the Zoom Bot confirmation message. A new Zoom meeting should start directly.

**Step 2**

1. Connect your Zoom account to Mattermost.
2. In a channel, run the slash command `/zoom start`.
3. Keep the meeting running for more than 30 seconds, then end it.
4. Run `/zoom start` again in the same channel.

**Expected**

The user should not see the Zoom Bot confirmation message. A new Zoom meeting should start directly.

**Step 3**

1. Connect your Zoom account to Mattermost.
2. In a channel, run the slash command `/zoom start`.
3. Join the meeting.
4. Without ending the meeting, run `/zoom start` again in the same channel.

**Expected**

The user should see the Zoom Bot confirmation message with options to create a new meeting or join the existing one.

**Step 4**

1. Connect your Zoom account to Mattermost.
2. In a channel, run the slash command `/zoom start`.
3. Join the meeting.
4. Without ending the meeting, run `/zoom start` again in the same channel.
5. Click on the `join existing meeting`.

**Expected**

The user should get added to the existing zoom meeting.

**Step 5**

1. Connect your Zoom account to Mattermost.
2. In a channel, run the slash command `/zoom start`.
3. Join the meeting.
4. Without ending the meeting, run `/zoom start` again in the same channel.
5. Click on the `create new meeting`.

**Expected**

The user should be joined to the new zoom meeting.
