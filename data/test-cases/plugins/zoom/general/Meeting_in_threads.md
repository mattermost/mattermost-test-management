---
# (Required) Ensure all values are filled up
name: "Create a Zoom meeting in the threads on MM."
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

1. Connect the Zoom account to you MM account.
2. Enable the Collapsed Reply Threads(CRT) in the system console on MM and open the `threads` from the LHS on MM.
3. Select any desried thread from the list of `followed threads` and run the slash command `/zoom start <meeting topic>` in the thread on MM.

**Expected**

The slack attachment for new Zoom meeting should get generated in the desired thread on MM.

**Step 2**

1. Connect the Zoom account to your MM account.
2. Enable the `Collapsed Reply Threads(CRT)` in the system console on MM and open the `threads` from the LHS on MM.
3. Select any desired thread from the list of `followed threads` and click on the Zoom icon in the app bar on MM.

**Expected**

The slack attachment for new Zoom meeting should get generated in the desired thread on MM.

**Step 3**

1. Connect the Zoom account to your MM account.
2. Enable the Collapsed Reply Threads(CRT) in the system console on MM and open the `threads` from the LHS on MM.
3. Select any desired thread from the list of `followed threads` in which a meeting is already created and create a new meeting with either slash command `/zoom start <meeting topic>` or by clicking the Zoom icon in the app bar on MM.

**Expected**

The slack attachment for Zoom meeting to `Create new meeting` or `Join existing meeting` should get generated in the desired thread on MM. 
