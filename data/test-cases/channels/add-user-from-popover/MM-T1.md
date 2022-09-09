---
# (Required) Ensure all values are filled up
name: "Add User — System Admin only"
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
id: 5618902
key: MM-T1
folder_path: channels/add-user-from-popover
created_on: "2020-06-03T07:26:59Z"
last_updated: "2022-09-09T21:27:29Z"
case_hashed: c053a01665fb299108b88e374ba503fee4a3f162034dcb92dd99c44d14dd40fdeb5927af9382d1cb6fd064b09db5494f
steps_hashed: 02eb244024bf74924bcaa14bc7f96d24a8e970f5e090fd596f5beb1312f6c04168dd6c475d0f41bf1d1aa94c8608ba18
---

## MM-T1: Add User — System Admin only

**Objective**

\*\*Original test name from testing spreadsheet → \*\*Only the System Admin sees the option to add a user to a channel on the profile pop-up if permissions to manage private and public channels is switched off for All members, Team and Channel Admins

---

**Step 1**

1. Login as a System Admin and navigate to User Management → Permissions → Edit Scheme

2. **Uncheck** "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top

3. Logout then login as a [**member**](https://docs.mattermost.com/help/getting-started/managing-members.html#member) to the same serve. Click the name of any user in a public or private channel.

4. Login as a System Admin and change/ensure that the Manage Public/Private Channels setting under the Team Administrators section is \*disabled\*.

   1. Login as a [**channel admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#channel-admin) to the same server
   2. Click the name of any user in a public or private channel

5. Login as a System Admin and change/ensure that  the Manage Public/Private Channels setting under the Team Administrators section is \*disabled\*.

   1. Login as a [**team**\*\* admin\*\*](https://docs.mattermost.com/help/getting-started/managing-members.html#team-admin) to the same server
   2. Click the name of any user in a public or private channel

6. Login as a [**system**\*\* admin\*\*](https://docs.mattermost.com/help/getting-started/managing-members.html#system-admin) to the same server and click the name of any user in a public or private channel

**Expected**

1. System Scheme settings appear
2. "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**
3. You should NOT see the option to add a user to a channel in the profile pop-up
4. You should NOT see the option to add a user to a channel in the profile pop-up
5. You should NOT see the option to add a user to a channel in the profile pop-up
6. You **should** see the option to add a user to a channel in the profile pop-up
