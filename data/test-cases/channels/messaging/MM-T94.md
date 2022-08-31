---
key: MM-T94
title: RHS fetches messages on socket reconnect when a different channel is in center
---

## MM-T94: RHS fetches messages on socket reconnect when a different channel is in center

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

> <article>RHS fetches messages on socket reconnect when a different channel is in center<br />--------------------<br />1. Reply to a post from another test user<br />2. Keep the RHS open but switch to a different channel in the center<br />3. Disconnect from internet<br />4. Have the other test user from step 1) comment on your reply from the RN app<br />5. Re-connect to the internet</article>

**Test Data**

> <article>FIXED v5.15 <a href="https://mattermost.atlassian.net/browse/MM-17634" rel="noopener noreferrer" target="_blank">https://mattermost.atlassian.net/browse/MM-17634</a></article>

**Expected**

> <article>The post made by the test user during your network disconnect appears in the RHS</article>

<hr/>

### More Info

| Name                     | Value                                                                                        |
| :----------------------- | :------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                           |
| Update notes             | 10/28/21 - Lindy - Cannot do this test in RF as VMs cannot be set to off-line via dev tools. |
| Rainforest               | N/A                                                                                          |
| Team Ownership           | Channels                                                                                     |
| Manual Test Environments | Automated - No manual tests needed                                                           |
| Cypress                  | in Production                                                                                |
| Location                 | Messaging                                                                                    |
