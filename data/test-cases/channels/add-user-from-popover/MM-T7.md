---
# (Required) Ensure all values are filled up
name: "Add User — Team admins (Private only)"
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
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Add user to channel from popover
tags: []
labels: 
- cy-prod

# Do not change
id: 2746256
key: MM-T7
folder_path: channels/add-user-from-popover
created_on: "2019-08-26T23:03:55Z"
last_updated: "2022-09-09T21:27:32Z"
case_hashed: af93de8f4ab26bce57a61a47e9b7d887a09b92fec31d60ce5c31ea0e0a345aaffaa0ee1de6e2e4f7c64d27b948886bef
steps_hashed: 14aac845bf85ecb6ebdbdccf682cedc731715c5a4cfc50486b358918a6ba0862dfcf8a54b3699a6e6d8564826a6b5bc8
---

## MM-T7: Add User — Team admins (Private only)

**Objective**

\*\*Original test name from testing spreadsheet → \*\*If manage channel member permissions is disabled for all members but manage private channels is enabled for Team Admins, the Team Admin will have permission to add members to \*\*private channels \*\*on the current team

---

**Step 1**

1. Login as a System Admin and navigate to System Console → User Management → Permissions → Edit Scheme

2. **Uncheck** "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top

3. **Uncheck** "Manage Public Channels" and **C\*\*\*\*heck** "Manage Private Channels" in the Team Admins section part way down the page

4. Using the desktop app log in as a [**Team Admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#team-admin) and click the name of any user in a public or private channel

5. Click Add to a channel and type in the first few letters of the channel name

6. Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)

   1. Click Add

**Expected**

1. System Scheme settings appear

2. "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**

3. "Manage Public Channels" are unchecked/disabled and "Manage Private Channels" boxes and all sub-settings under them are checked/enabled

4. You **should** see the option to add a user to a channel in the profile pop-up

5. The list should filter to show only **Private** channels on the \*\*current team \*\*to match what you have typed

6. Should expect the ff:

   1. The user is added to the channel
   2. You are returned to your previous state
   3. There is no direct feedback to you directly that the user has been added
   4. A system message is posted in that channel saying they have been added to the channel by you
