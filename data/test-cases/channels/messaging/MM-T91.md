---
key: MM-T91
title: Replying to an older post by a user that has no content (only file attachments)
---

## MM-T91: Replying to an older post by a user that has no content (only file attachments)

**Precondition**

> <article><strong>**Test this one on a server that has older data, such as postgres.test or mysql.test if necessary (as opposed to rc.test, e.g. where there may not be older messages)**</strong></article>

### Details

| Name     | Value                                                |
| :------- | :--------------------------------------------------- |
| Priority | Low                                                  |
| Status   | Active                                               |
| Folder   | Channels / Messaging                                 |
| Labels   | TM4J-Key-Mapped-In-Cypress-Release,cy-prod,messaging |
| Created  | 2019-12-20T16:32:59Z                                 |

### Steps

<hr/>

**Step 1**

> <article>Replying to an older post by a user that has no content (only file attachments)<br>--------------------<br>**Test this one on a server that has older data, such as postgres.test or mysql.test if necessary (as opposed to rc.test, e.g. where there may not be older messages)**<br><br>1. On a post that has only file attachments, that is at least one day old (and has had subsequent messages posted after it in the channel),<br>2. Click "reply" from [...] menu to reply to a message<br>3. In right hand sidebar, make a reply post<br>4. Send and verify reply appears<br>5. Close the RHS / go back to center channel view</article>

**Expected**

> <article>After 5) You should see &quot;Commented on [user]&sbquo;&Auml;&ocirc;s message: [File name 1] plus 1 other file&quot; on the line below your username on the post showing at the bottom of the center panel<br /><br />NOTE: If the post you replied to had only ONE file attached, the &quot;plus 1 other file&quot; part of the &quot;commented on...&quot; line will not show</article>

<hr/>

### More Info

| Name                     | Value                                                                                              |
| :----------------------- | :------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                                 |
| Update notes             | Steve Mudie — Tuesday, September 22, 2020 3:10 PM<br>• Removed from manual testing                 |
| Rainforest               | N/A                                                                                                |
| Cypress Reports          | RELEASE - TM4J-Key-Mapped-In-Cypress-Release - TM4J key found Cypress release run report (SDET/QA) |
| Team Ownership           | Channels                                                                                           |
| Manual Test Environments | Automated - No manual tests needed                                                                 |
| Cypress                  | in Production                                                                                      |
| Location                 | Messaging                                                                                          |
