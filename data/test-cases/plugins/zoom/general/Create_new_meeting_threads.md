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

1. Connect your Zoom account to your MM account.
2. Enable the CRT from the settings on MM and open the threads from the LHS on MM.
3. Select any desired thread from the `followed threads` list on MM.
4. Set the zoom setting to `Personal Meeting ID` for meeting using the slash command `/zoom settings`.
5. Create a meeting in the desired thread using either the slash command `/zoom start<meeting topic>` or clicking on the zoom icon in the app bar on MM.
6. Navigate to the desired thread without ending the meeting and again create a meeting using either the slash command `/zoom start<meeting topic>` or clicking on the zoom icon in the app bar on MM.
7. Click on the `Create new meeting` option in the slack attahcment in the desired thread.

**Expected**

The user should get directed to the existing meeting on the Zoom.

**Step 2**

1. Connect your Zoom account to your MM account.
2. Enable the CRT from the settings on MM and open the threads from the LHS on MM.
3. Select any desired thread from the `followed threads` list on MM.
4. Set the zoom setting to `Unique Meeting ID` for meeting using the slash command `/zoom settings`.
5. Create a meeting in the desired thread using either the slash command `/zoom start<meeting topic>` or clicking on the zoom icon in the app bar on MM.
6. Navigate to the desired thread without ending the meeting and again create a meeting using either the slash command `/zoom start<meeting topic>` or clicking on the zoom icon in the app bar on MM.
7. Click on the `Create new meeting` option in the slack attahcment in the desired thread.

**Expected**

The user should get directed to a new meeting on Zoom.

**Step 3**

1. Connect your Zoom account to your MM account.
2. Enable the CRT from the settings on MM and open the threads from the LHS on MM.
3. Select any desired thread from the `followed threads` list on MM.
4. Set the zoom setting to `Ask every time` for meeting using the slash command `/zoom settings`.
5. Create a meeting in the desired thread using either the slash command `/zoom start <meeting topic>` or clicking on the zoom icon in the app bar on MM.
6. Navigate to the desired thread without ending the meeting and again create a meeting using either the slash command `/zoom start<meeting topic>` or clicking on the zoom icon in the app bar on MM.
7. Click on the `Create new meeting` option in the slack attahcment in the desired thread.

**Expected**

The user should get the slack attachment regarding to choose the type of meeting in the desired thread on MM.

**Step 4**

1. After step 1, again navigate to the desired thread on MM.
2. Click on the `Create new meeting` option on the existing slack attachment in the desired thread.

**Expected**

The user should get redirected to the existing meeting on Zoom.

**Step 5**

1. After step 2, again navigate to the desired thread on MM.
2. Click on the `Create new meeting` option on the existing slack attachment in the desired thread.

**Expected**

The user should get directed to a new meeting on Zoom.