---
# (Required) Ensure all values are filled up
name: "New meeting is being created after clicking `Create new meeting` in the threads view. "
status: Active
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

1. Go to your Zoom settings and disable `Personal Meeting ID` on Zoom.
2. Navigate to any desired channel or DM/GM on MM and run the slash command `/zoom settings` and select `Yes` to use `Use your Personal Meeting ID` on MM.
3. Create a new meeting in the desired channel or DM/GM by running the slash command `/zoom start <meeting topic>` on MM.

**Expected**

The user should get an ephemeral message that the meeting created is having a `Unique Meeting ID` and to use personal meeting ID they should enable `Personal Meeting ID` in the Zoom setting and below should be the slack attachment to join the new meeting generated with `Unique Meeting ID` in the desired channel or DM/GM on MM.

**Step 2**

1. Go to your Zoom settings and disable `Personal Meeting ID` on Zoom.
2. Navigate to any desired channel or DM/GM on MM and run the slash command `/zoom settings` and select `No` to use `Use your Personal Meeting ID` on MM.
3. Create a new meeting in the desired channel or DM/GM by running the slash command `/zoom start <meeting topic>` on MM.

**Expected**

The user should not receive any ephemeral message and the slack attachment to join the new meeting should get generated in the desired channel or DM/GM on MM.

**Step 3**

1. Go to your Zoom settings and disable `Personal Meeting ID` on Zoom.
2. Navigate to any desired channel or DM/GM on MM and run the slash command `/zoom settings` and select `Ask` to use `Use your Personal Meeting ID` on MM.
3. Create a new meeting in the desired channel or DM/GM by running the slash command `/zoom start <meeting topic>` on MM.
4. Select `Personal Meeting ID` option in the slack attachment in the desired channel or DM/GM or DM/GM on MM.

**Expected**

The user should not receive any ephemeral message and the slack attachment to join the new meeting should get generated in the desired channel or DM/GM on MM.

**Step 4**

1. Go to your Zoom settings and disable `Personal Meeting ID` on Zoom.
2. Navigate to MM and open threads from the LHS.
3. Open any desired thread from the `Followed threads` list and run the slash command `/zoom settings` and select `Yes` to use `Use your Personal Meeting ID` on MM.
5. Create a new meeting in the desired thread by running the slash command `/zoom start <meeting topic>` on MM.

**Expected**

The user should get an ephemeral message that the meeting created is having a `Unique Meeting ID` and to use personal meeting ID they should enable `Personal Meeting ID` in the Zoom setting and below should be the slack attachment to join the new meeting generated with `Unique Meeting ID` in the desired thread on MM.

**Step 5**

1. Go to your Zoom settings and disable `Personal Meeting ID` on Zoom.
2. Navigate to MM and open threads from the LHS.
3. Open any desired thread from the `Followed threads` list and run the slash command `/zoom settings` and select `No` to use `Use your Personal Meeting ID` on MM.
4. Create a new meeting in the desired thread by running the slash command `/zoom start <meeting topic>` on MM.

**Expected**

The user should not receive any ephemeral message and the slack attachment to join the new meeting should get generated in the desired thread on MM.

**Step 6**

1. Go to your Zoom settings and disable `Personal Meeting ID` on Zoom.
2. Navigate to MM and open threads from the LHS.
3. Open any desired thread from the `Followed threads` list and run the slash command `/zoom settings` and select `Ask` to use `Use your Personal Meeting ID` on MM.
4. Create a new meeting in the desired channel or DM/GM by running the slash command `/zoom start <meeting topic>` on MM.
5. Select `Personal Meeting ID` option in the slack attachment in the desired channel or DM/GM or DM/GM on MM.

**Expected**

The user should get an ephemeral message after selecting `Personal Meeting ID` that the meeting created is having a `Unique Meeting ID` and to use personal meeting ID they should enable `Personal Meeting ID` in the Zoom setting and below should be the slack attachment to join the new meeting created with `Unique Meeting ID` in the desired thread on MM.