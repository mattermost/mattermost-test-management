---
key: MM-T8
title: Add User — UserA & UserB (not on team)
---

## MM-T8: Add User — UserA & UserB (not on team)

**Objective**

> <article><ul><li>If <strong>UserA</strong> has never been a member of the current team, <strong>UserB</strong> should not see "Add to channel" option on <strong>UserA's</strong> profile pop-over</li><li><strong>Original test name from testing spreadsheet →&nbsp;</strong>"If UserA has never been a member of the current team, UserB should not see "Add to channel" option on UserA's profile pop-over (this test assumes permissions are in place for users to see the option on other users who belong to the team's profile pop-overs)"</li></ul></article>

**Precondition**

> <article><ul><li><span style="color: rgb(184, 49, 47);">This test assumes permissions are in place for users to see the option on other users who belong to the team's profile pop-overs</span></li></ul></article>

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

> <article><ol><li>Create a new team</li><li>@ mention a user in a channel on the new team that is not a member of your new team</li><li>Click the @ mention in the post you just made</li></ol></article>

**Expected**

> <article>On 2, @ mention is accepted as a post.<br>On 3,<ul><li>User's profile popover opens</li><li>"Add to Channel" should not be present as the member isn't part of the team</li></ul></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | v5.14 (August 2019) |
| Related ticket(s) | <a href="https://mattermost.atlassian.net/browse/MM-16056">Non-obvious error when trying to add a user via "Add to a Channel" profile popover option to a channel within a team they don't belong to — MM-16056</a> |

<hr/>

### More Info

| Name                     | Value                                                                                                                                                                                                                                                                                                                                                                                                      |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fix Versions             | v5.14 (August 2019)                                                                                                                                                                                                                                                                                                                                                                                        |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                                                                                                                                                                                                                                                                                                                                         |
| Update notes             | Steve Mudie — Wednesday, December 23, 2020 9:43 PM<br />• Cypress Automation working as expected 🎉<br />• Set Cypress status to ✅ in Production<br />• Removed from relevant Manual Environments<br />• Removed No Automated Executions label<br />• Removed TM4J-Key-Missing-In-Cypress label<br />• Added TM4J-Key-Mapped-In-Cypress-Release label<br />• Added link to Cypress code in Traceability tab |
| Rainforest               | N/A                                                                                                                                                                                                                                                                                                                                                                                                        |
| Cypress Reports          | STABLE - TM4J-Key-Mapped-In-Cypress-Stable - TM4J key found Cypress master-prod run report (SDET/QA)                                                                                                                                                                                                                                                                                                       |
| Team Ownership           | Channels                                                                                                                                                                                                                                                                                                                                                                                                   |
| Manual Test Environments | Automated - No manual tests needed                                                                                                                                                                                                                                                                                                                                                                         |
| Cypress                  | in Production                                                                                                                                                                                                                                                                                                                                                                                              |
| Location                 | Add user to channel from popover                                                                                                                                                                                                                                                                                                                                                                           |
