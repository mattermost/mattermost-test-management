---
key: MM-T9
title: Add User — Any user (can add users)
---

## MM-T9: Add User — Any user (can add users)

**Objective**

> <article>Only the users who have permissions to manage channel members should see the option to add a user to a channel on the profile pop-up.<br><br><br><strong>Original test name from testing spreadsheet → </strong>Only the users who have permissions to manage channel members will be able to see this option.</article>

**Precondition**

> <article><br><br></article>

### Details

| Name     | Value                            |
| :------- | :------------------------------- |
| Priority | Low                              |
| Status   | Active                           |
| Folder   | Channels / Add user from popover |
| Labels   | cy-prod                          |
| Created  | 2019-08-26T23:03:55Z             |

### Steps

<hr/>

**Step 1**

> <article><ol><li>Login as a System Admin and navigate to System Console → Navigate to User Management → Permissions → Edit Scheme</li><li><strong>Check</strong> "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top.</li><li>Login as a Member to the same server<ol style="list-style-type: lower-alpha;"><li>Click the name of any user in a public or private channel</li></ol></li><li>Click Add to a channel and type in the first few letters of the channel name<ol style="list-style-type: lower-alpha;"><li><strong>Note</strong>: Users are only able to add users to channels to which they belong. Channel names you don't belong to will not appear as you type by default.</li></ol></li><li>Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)<ol style="list-style-type: lower-alpha;"><li>Click Add</li></ol></li></ol></article>

**Test Data**

> <article><br><br></article>

**Expected**

> <article><ol><li>System Scheme settings appear</li><li>"Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are <strong>checked/enabled</strong>.</li><li>You should see the option to add a user to a channel in the profile pop-up</li><li>The list filters to match what you've typed</li><li>Should expect the ff:<ol style="list-style-type: lower-alpha;"><li>The user is added to the channel</li><li>You are returned to your previous state</li><li>There is no direct feedback to you directly that the user has been added</li><li>A system message is posted in that channel saying they have been added to the channel by you</li></ol></li></ol></article>

<hr/>

### More Info

| Name                     | Value                                         |
| :----------------------- | :-------------------------------------------- |
| Priority P1 to P4        | P2 - Core Functions (Do core functions work?) |
| Rainforest               | N/A                                           |
| Team Ownership           | Channels                                      |
| Manual Test Environments | Automated - No manual tests needed            |
| Cypress                  | in Production                                 |
| Location                 | Add user to channel from popover              |
