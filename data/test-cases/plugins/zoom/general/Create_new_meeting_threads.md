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
3. Select any desired thread from the `followed threads` list and set the zoom setting to `Personal Meeting ID` for meeting using the slash command `/zoom settings`.
4. Create a meeting in the desired thread using either the slash command `/zoom start<meeting topic>` or clicking on the zoom icon in the app bar on MM.
5. Navigate to the desired thread without ending the meeting and again create a meeting using either the slash command `/zoom start<meeting topic>` or clicking on the zoom icon in the app bar on MM.
6. Click on the `Create new meeting` option in the slack attahcment in the desired thread.

**Step 2**

1. Connect your Zoom account to your MM account.
2. Enable the CRT from the settings on MM and open the threads from the LHS on MM.
3. Select any desired thread from the `followed threads` list and set the zoom setting to `Unique Meeting ID` for meeting using the slash command `/zoom settings`.
4. Create a meeting in the desired thread using either the slash command `/zoom start<meeting topic>` or clicking on the zoom icon in the app bar on MM.
5. Navigate to the desired thread without ending the meeting and again create a meeting using either the slash command `/zoom start<meeting topic>` or clicking on the zoom icon in the app bar on MM.
6. Click on the `Create new meeting` option in the slack attahcment in the desired thread.

**Step 3**

1. Connect your Zoom account to your MM account.
2. Enable the CRT from the settings on MM and open the threads from the LHS on MM.
3. Select any desired thread from the `followed threads` list and set the zoom setting to `Ask everytime` for meeting using the slash command `/zoom settings`.
4. Create a meeting in the desired thread using either the slash command `/zoom start<meeting topic>` or clicking on the zoom icon in the app bar on MM.
5. Navigate to the desired thread without ending the meeting and again create a meeting using either the slash command `/zoom start<meeting topic>` or clicking on the zoom icon in the app bar on MM.
6. Click on the `Create new meeting` option in the slack attahcment in the desired thread.

**Step 4**

1. After step 1, again navigate to the desired thread on MM.
2. Click on the `Create new meeting` option on the existing slack attachment in the desired thread.

**Step 5**

1. After step 2, again navigate to the desired thread on MM.
2. Click on the `Create new meeting` option on the existing slack attachment in the desired thread.

**Expected**

The user should get directed to the existing meeting on the Zoom.
After step 2, the user should get directed to a new meeting on Zoom.
After step 3, the user should get the slack attachment regarding to choose the type of meeting in the desired thread on MM.
After step 4, the user should get directed to the existing meeting on Zoom.
After step 5, the user should get directed to a new meeting on Zoom.