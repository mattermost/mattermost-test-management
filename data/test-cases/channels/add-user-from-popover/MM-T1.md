---
# (Required) Ensure all values are filled up
name: "Add User — System Admin only"
status: Active
priority: Low
folder: Add user from popover
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Add user to channel from popover
component: null
tags: []
labels: 
- cy-prod

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 5618902
key: MM-T1
created_on: "2020-06-03T07:26:59Z"
last_updated: "2022-09-10T10:54:33Z"
case_hashed: e22c3831d1db2a3d31283a83a774ad8ef655b653d20356053af9ecdbe5dd1688ab7c7e6afe5c9556f6685119bd4f74fc
steps_hashed: 93c651c4c3636026faad484ce8f8f6083176aef85942234d0885a63a8a3e2b1e705db69ad52d7ee2ad1031c1de353b16
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T1: Add User — System Admin only

**Objective**

Only the System Admin sees the option to add a user to a channel on the profile pop-up if permissions to manage private and public channels is switched off for All members, Team and Channel Admins

---

**Step 1**

1. Login as a System Admin and navigate to User Management → Permissions → Edit Scheme

2. **Uncheck** "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top

3. Logout then login as a [**member**](https://docs.mattermost.com/help/getting-started/managing-members.html#member) to the same serve. Click the name of any user in a public or private channel.

4. Login as a System Admin and change/ensure that the Manage Public/Private Channels setting under the Team Administrators section is \*disabled\*.

   1. Login as a [**channel admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#channel-admin) to the same server
   2. Click the name of any user in a public or private channel

5. Login as a System Admin and change/ensure that the Manage Public/Private Channels setting under the Team Administrators section is \*disabled\*.

   1. Login as a [**team admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#team-admin) to the same server
   2. Click the name of any user in a public or private channel

6. Login as a [**system admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#system-admin) to the same server and click the name of any user in a public or private channel

**Expected**

1. System Scheme settings appear
2. "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**
3. You should NOT see the option to add a user to a channel in the profile pop-up
4. You should NOT see the option to add a user to a channel in the profile pop-up
5. You should NOT see the option to add a user to a channel in the profile pop-up
6. You **should** see the option to add a user to a channel in the profile pop-up
