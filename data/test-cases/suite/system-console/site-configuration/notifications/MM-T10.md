---
key: MM-T10
title: Disabling email notifications should not disable email invites
---

## MM-T10: Disabling email notifications should not disable email invites

### Details

| Name     | Value                                                       |
| :------- | :---------------------------------------------------------- |
| Priority | Normal                                                      |
| Status   | Active                                                      |
| Folder   | Suite / System Console / Site Configuration / Notifications |
| Labels   | Cloud-N/A,system-console,fix-versions-not-empty-2022cleanup |
| Created  | 2019-08-26T23:46:53Z                                        |

### Steps

<hr/>

**Step 1**

> <article>Disabling email notifications should not disable email invites<br>–––––––––––––––––––––––––<ol><li>As system admin, go to System Console → Site Configuration → Notifications and set `Enable Email Notifications` to `false`, then Save</li><li>Still in System Console, go to Authentication → Signup and set Enable Email Invitations to `true`, then Save</li><li>Go back to any team, click ☰ main menu and select Invite People</li><li>If necessary, click to Invite Member so you see the invite screen</li><li>Enter a valid email address that you can check in the Add or Invite People field, then click Invite Members</li></ol></article>

**Expected**

> <article><ul><li>Form allows sending an invite via email when email notifications are disabled</li><li>User who was invited receives the invite email</li></ul></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | v5.14 (August 2019) |
| Related ticket(s) | <a href="https://mattermost.atlassian.net/browse/MM-15661">Disabling email notifications also disables email invites — MM-15661</a> |

<hr/>

### More Info

| Name                     | Value                                                                                                                                                                               |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P2 - Core Functions (Do core functions work?)                                                                                                                                       |
| Update notes             | 11/24/2020 jelena gilliam<br>Adding Cloud-N/A label as Email Notifications are set to true by default through an environmental variable and can't be changed through system console |
| Team Ownership           | Channels                                                                                                                                                                            |
| Manual Test Environments | Webapp                                                                                                                                                                              |
| Cypress                  | Ticket Open                                                                                                                                                                         |
| Tags                     | Cloud N/A                                                                                                                                                                           |
| Location                 | System Console                                                                                                                                                                      |
