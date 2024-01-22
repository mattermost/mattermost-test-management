---
# (Required) Ensure all values are filled up
name: "Creating meeting using Zoom icon in the app bar/channel header."
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

1. Connect your MM account to your Zoom account using the slash command `/zoom connect`.
2. Set the Zoom setting by running the slash command `/zoom settings` to `Yes` for using Personal Meeting ID when creating a meeting.
3. Click on the Zoom icon in the app bar/channel header when there is no recent Zoom meeting in the channel or DM/GM on MM.

**Step 2**

1. Connect your MM account to your Zoom account using the slash command `/zoom connect`.
2. Set the Zoom setting by running the slash command `/zoom settings` to `No` for using Personal Meeting ID when creating a meeting.
3. Click on the Zoom icon in the app bar/channel header when there is no recent Zoom meeting in the channel or DM/GM on MM.

**Step 3**

1. Connect your MM account to your Zoom account using the slash command `/zoom connect`.
2. Set the Zoom setting by running the slash command `/zoom settings` to `Ask` for using Personal Meeting ID when creating a meeting.
3. Click on the Zoom icon in the app bar/channel header when there is no recent Zoom meeting in the channel or DM/GM on MM.

**Step 4**

1. Connect your MM account to your Zoom account using the slash command `/zoom connect`.
2. Create a meeting by running the slash command `/zoom start <meeting topic>` in any desired channel or DM/GM on MM.
3. Click on the Zoom icon in the app bar/channel header in the desired channel or DM/GM on MM.

**Step 5**

1. Connect your MM account to your Zoom account using the slash command `/zoom connect`.
2. Create a meeting by  clicking the Zoom icon in the app bar/channel header in any desired channel or DM/GM on MM.
3. Click on the Zoom icon in the app bar/channel header in the desired channel or DM/GM on MM.

**Expected**

The user should be navigated to the Zoom meeting with the Personal Meeting ID on Zoom.
After step 2, the user should be navigated to the Zoom meeting with Unique Meeting ID on Zoom.
After step 3, the user should get the slack attachment to select the type of meeting to create in the desired channel or DM/GM on MM.
After step 4, the user should get the message about an already created Zoom meeting and should get the slack attachment with the option to select `Create New Meeting` or `Join Existing Meeting` in the desired channel or DM/GM on MM.
After step 5, the user should get the message about an already created Zoom meeting and should get the slack attachment with the option to select `Create New Meeting` or `Join Existing Meeting` in the desired channel or DM/GM on MM.