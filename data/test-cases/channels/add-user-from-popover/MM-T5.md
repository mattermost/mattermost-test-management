---
key: MM-T5
title: Add User — UserA & UserB (removed from team)
---

## MM-T5: Add User — UserA & UserB (removed from team)

**Objective**

> <article>If <strong>UserB</strong> has been removed from the current team, <strong>UserA</strong> should not see "Add to channel" option on <strong>UserB's</strong> profile pop-over<br><br><strong>Original test name from testing spreadsheet → </strong>"If UserA has been removed from the current team, UserB should not see ""Add to channel"" option on UserA's profile pop-over<br>(this test assumes permissions are in place for users to see the option on other users who belong to the team's profile pop-overs)"</article>

**Precondition**

> <article><ul><li>This test assumes permissions are in place for users to see the option on other users who belong to the team's profile pop-overs</li></ul></article>

### Details

| Name     | Value                                      |
| :------- | :----------------------------------------- |
| Priority | Low                                        |
| Status   | Active                                     |
| Folder   | Channels / Add user from popover           |
| Labels   | cy-prod,fix-versions-not-empty-2022cleanup |
| Created  | 2019-08-26T23:03:55Z                       |

### Steps

<hr/>

**Step 1**

> <article><ol><li>Remove a member from a team</li><li>@ mention the user you just removed in a channel </li><li>Click the @ mention in the post you just made</li></ol></article>

**Expected**

> <article>After #2,<ul><li>@ mention is accepted as a post</li></ul><br />After #3,<ul><li>"Add to Channel" should not be present as the member has been removed from the team</li></ul></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | v5.18 (Dec 2019) |
| Related ticket(s) | (<strong><span style="color:rgb(65, 168, 95)">Story</span></strong>) <a href="https://mattermost.atlassian.net/browse/MM-17413">"Add to channel" option is visible on a user's profile pop-over when they've been removed from a team — MM-17413</a> |

<hr/>

### More Info

| Name                     | Value                                                   |
| :----------------------- | :------------------------------------------------------ |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)      |
| Update notes             | JB - Friday, December 4, 2020<br />- Moved to automated |
| Rainforest               | N/A                                                     |
| Team Ownership           | Channels                                                |
| Manual Test Environments | Automated - No manual tests needed                      |
| Cypress                  | in Production                                           |
| Location                 | Add user to channel from popover                        |
