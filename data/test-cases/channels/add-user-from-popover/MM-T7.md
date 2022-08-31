---
key: MM-T7
title: Add User — Team admins (Private only)
---

## MM-T7: Add User — Team admins (Private only)

**Objective**

> <article><strong>Original test name from testing spreadsheet → </strong>If manage channel member permissions is disabled for all members but manage private channels is enabled for Team Admins, <span style="background-color: rgb(255,255,0);">the Team Admin will have permission to add members to <strong>private channels&nbsp;</strong>on the current team</span></article>

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

> <article><ol><li>Login as a System Admin and navigate to System Console → User Management → Permissions → Edit Scheme</li><li><strong>Uncheck</strong> "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top</li><li><strong>Uncheck</strong> "Manage Public Channels" and <strong>C</strong><strong>heck</strong> "Manage Private Channels" in the Team Admins section part way down the page</li><li>Using the desktop app log in as a <a href="https://docs.mattermost.com/help/getting-started/managing-members.html#team-admin"><strong>Team Admin</strong></a> and click the name of any user in a public or private channel</li><li>Click Add to a channel and type in the first few letters of the channel name</li><li>Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)<ol style="list-style-type: lower-alpha;"><li>Click Add</li></ol></li></ol></article>

**Test Data**

> <article><br><br></article>

**Expected**

> <article><ol><li>System Scheme settings appear</li><li>"Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are <strong>unchecked/disabled</strong></li><li>"Manage Public Channels" are unchecked/disabled and "Manage Private Channels" boxes and all sub-settings under them are checked/enabled</li><li>You <strong>should</strong> see the option to add a user to a channel in the profile pop-up</li><li>The list should filter to show only <strong>Private</strong> channels on the <strong>current team&nbsp;</strong>to match what you have typed</li><li>Should expect the ff:<ol style="list-style-type: lower-alpha;"><li>The user is added to the channel</li><li>You are returned to your previous state</li><li>There is no direct feedback to you directly that the user has been added</li><li>A system message is posted in that channel saying they have been added to the channel by you</li></ol></li></ol></article>

<hr/>

### More Info

| Name                     | Value                                              |
| :----------------------- | :------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?) |
| Rainforest               | N/A                                                |
| Team Ownership           | Channels                                           |
| Manual Test Environments | Automated - No manual tests needed                 |
| Cypress                  | in Production                                      |
| Location                 | Add user to channel from popover                   |
