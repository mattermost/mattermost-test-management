---
# (Required) Ensure all values are filled up
name: "Creating another new meeting on channel"
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

1. Connect the Zoom account to your MM account.
2. Create a Zoom meeting by running the slash command `/zoom start <meeting topic>` in any desired channel or DM/GM on MM.
3. Again run the slash command `/zoom start <meeting topic>` in the desired channel or DM/GM on MM.
4. Click on the `Create new meeting` option in the message attachment for Zoom meeting in the desired channel or DM/GM on MM.

**Expected**

The user should get redirected to the new Zoom meeting or should get a message attachment if the Zoom meeting setting is set to `Ask` for selecting the meeting ID in the desired channel or DM/GM on MM.

**Step 2**

1. Connect the Zoom account to your MM account.
2. Create a Zoom meeting by clicking on the Zoom icon in the app bar/channel header in any desired channel or DM/GM on MM.
3. Navigate to the desired thread and again click on the Zoom icon in the app bar/channel header in the desired channel or DM/GM on MM.
4. Click on the `Create new meeting` option in the message attachment for Zoom meeting in the desired channel or DM/GM on MM.

**Expected**

The user should get redirected to the new Zoom meeting or should get a message attachment if the Zoom setting is set to `Ask` for selecting the meeting ID in the desired channel or DM/GM on MM.

**Step 3**

1. After step 2, again navigate to the desired channel or DM/GM on MM without ending the meeting on Zoom and click on the `Create new meeting` option on the existing message attachment for Zoom meeting.

**Expected**

The user should get redirected to the new Zoom meeting or should get a message attachment if the Zoom setting is set to `Ask` for selecting the meeting ID in the desired channel or DM/GM on MM.