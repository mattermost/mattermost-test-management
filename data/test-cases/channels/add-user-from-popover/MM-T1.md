---
key: MM-T1
title: Add User — System Admin only
---

## MM-T1: Add User — System Admin only

**Objective**

> <article><strong>Original test name from testing spreadsheet → </strong>Only the System Admin sees the option to add a user to a channel on the profile pop-up if permissions to manage private and public channels is switched off for All members, Team and Channel Admins</article>

**Precondition**

> <article><br><br></article>

### Details

| Name     | Value                            |
| :------- | :------------------------------- |
| Priority | Low                              |
| Status   | Active                           |
| Folder   | Channels / Add user from popover |
| Labels   | cy-prod                          |
| Created  | 2020-06-03T07:26:59Z             |

### Steps

<hr/>

**Step 1**

> <article><ol><li>Login as a System Admin and navigate to User Management → Permissions → Edit Scheme</li><li><strong>Uncheck</strong> "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top</li><li>Logout then login as a <a href="https://docs.mattermost.com/help/getting-started/managing-members.html#member"><strong>member</strong></a> to the same serve. Click the name of any user in a public or private channel.</li><li>Login as a System Admin and change/ensure that the Manage Public/Private Channels setting under the Team Administrators section is *disabled*.<ol style="list-style-type: lower-alpha;"><li>Login as a <a href="https://docs.mattermost.com/help/getting-started/managing-members.html#channel-admin"><strong>channel admin</strong></a> to the same server</li><li>Click the name of any user in a public or private channel</li></ol></li><li>Login as a System Admin and change/ensure that &nbsp;the Manage Public/Private Channels setting under the Team Administrators section is *disabled*.<ol style="list-style-type: lower-alpha;"><li>Login as a <a href="https://docs.mattermost.com/help/getting-started/managing-members.html#team-admin"><strong>team</strong><strong>&nbsp;admin</strong></a> to the same server</li><li>Click the name of any user in a public or private channel</li></ol></li><li>Login as a <a href="https://docs.mattermost.com/help/getting-started/managing-members.html#system-admin"><strong>system</strong><strong>&nbsp;admin</strong></a> to the same server and click the name of any user in a public or private channel</li></ol></article>

**Test Data**

> <article><br><br></article>

**Expected**

> <article><ol><li>System Scheme settings appear</li><li>"Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are <strong>unchecked/disabled</strong></li><li>You should NOT see the option to add a user to a channel in the profile pop-up</li><li>You should NOT see the option to add a user to a channel in the profile pop-up</li><li>You should NOT see the option to add a user to a channel in the profile pop-up</li><li>You <strong>should</strong> see the option to add a user to a channel in the profile pop-up</li></ol></article>

<hr/>

### More Info

| Name                     | Value                                                                                                |
| :----------------------- | :--------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                                   |
| Rainforest               | N/A                                                                                                  |
| Cypress Reports          | STABLE - TM4J-Key-Mapped-In-Cypress-Stable - TM4J key found Cypress master-prod run report (SDET/QA) |
| Team Ownership           | Channels                                                                                             |
| Manual Test Environments | Automated - No manual tests needed                                                                   |
| Cypress                  | in Production                                                                                        |
| Location                 | Add user to channel from popover                                                                     |
