---
name: "Add User — System Admin only"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T1: Add User — System Admin only

**Objective**

**Original test name from testing spreadsheet → **Only the System Admin sees the option to add a user to a channel on the profile pop-up if permissions to manage private and public channels is switched off for All members, Team and Channel Admins

**Precondition**

---

**Step 1**

1. Login as a System Admin and navigate to User Management → Permissions → Edit Scheme

2. **Uncheck** "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top

3. Logout then login as a [**member**](https://docs.mattermost.com/help/getting-started/managing-members.html#member) to the same serve. Click the name of any user in a public or private channel.

4. Login as a System Admin and change/ensure that the Manage Public/Private Channels setting under the Team Administrators section is \*disabled\*.

   1. Login as a [**channel admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#channel-admin) to the same server
   2. Click the name of any user in a public or private channel

5. Login as a System Admin and change/ensure that  the Manage Public/Private Channels setting under the Team Administrators section is \*disabled\*.

   1. Login as a [**team**** admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#team-admin) to the same server
   2. Click the name of any user in a public or private channel

6. Login as a [**system**** admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#system-admin) to the same server and click the name of any user in a public or private channel

**Test Data**

**Expected**

1. System Scheme settings appear
2. "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**
3. You should NOT see the option to add a user to a channel in the profile pop-up
4. You should NOT see the option to add a user to a channel in the profile pop-up
5. You should NOT see the option to add a user to a channel in the profile pop-up
6. You **should** see the option to add a user to a channel in the profile pop-up
