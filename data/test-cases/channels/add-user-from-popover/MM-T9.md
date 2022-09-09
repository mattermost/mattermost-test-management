---
# (Required) Ensure all values are filled up
name: "Add User — Any user (can add users)"
status: Active
priority: Low
folder: Add user from popover
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Add user to channel from popover
tags: []
labels: 
- cy-prod

# Do not change
id: 2746258
key: MM-T9
folder_path: channels/add-user-from-popover
created_on: "2019-08-26T23:03:55Z"
last_updated: "2022-09-09T21:27:30Z"
case_hashed: 44eaa8e9fab1f8346cde37350273dbf1e0dd041757a070fe7f72810c977fa4e4bcfba911af3d0085956165bbccdfb3bb
steps_hashed: 07fd3b2606c8566cc3d382127c0f21337c22c25636c7d3bd66f54f74bd93f16b1b1894b6c3a3f01148a3db1cd0317482
---

## MM-T9: Add User — Any user (can add users)

**Objective**

Only the users who have permissions to manage channel members should see the option to add a user to a channel on the profile pop-up.\
\
\
\*\*Original test name from testing spreadsheet → \*\*Only the users who have permissions to manage channel members will be able to see this option.

---

**Step 1**

1. Login as a System Admin and navigate to System Console → Navigate to User Management → Permissions → Edit Scheme

2. **Check** "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top.

3. Login as a Member to the same server

   1. Click the name of any user in a public or private channel

4. Click Add to a channel and type in the first few letters of the channel name

   1. **Note**: Users are only able to add users to channels to which they belong. Channel names you don't belong to will not appear as you type by default.

5. Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)

   1. Click Add

**Expected**

1. System Scheme settings appear

2. "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **checked/enabled**.

3. You should see the option to add a user to a channel in the profile pop-up

4. The list filters to match what you've typed

5. Should expect the ff:

   1. The user is added to the channel
   2. You are returned to your previous state
   3. There is no direct feedback to you directly that the user has been added
   4. A system message is posted in that channel saying they have been added to the channel by you
