---
key: MM-T95
title: Selecting an emoji from emoji picker should insert it at the cursor position
---

## MM-T95: Selecting an emoji from emoji picker should insert it at the cursor position

### Details

| Name     | Value                                                                |
| :------- | :------------------------------------------------------------------- |
| Priority | Low                                                                  |
| Status   | Active                                                               |
| Folder   | Channels / Emoji picker                                              |
| Labels   | TM4J-Key-Mapped-In-Cypress-Release,cy-prod,rf-cloud-webapp,messaging |
| Created  | 2019-12-20T16:33:00Z                                                 |

### Steps

<hr/>

**Step 1**

> <article>Selecting an emoji from emoji picker should insert it at the cursor position<br />--------------------<br />1. Write some text in the send box of the channel (or RHS Thread)<br />2. Move the cursor to the middle of the text<br />3. Select an emoji from the emoji picker<br />4. Hit enter</article>

**Test Data**

> <article>NEW v5.18 <a href="https://mattermost.atlassian.net/browse/MM-17388" rel="noopener noreferrer" target="_blank">https://mattermost.atlassian.net/browse/MM-17388</a></article>

**Expected**

> <article>After 3) Emoji should be inserted where the cursor is at the time of selection<br />After 4) Emoji should be displayed in the post at the position it was inserted in step 3)</article>

<hr/>

### More Info

| Name                     | Value                                                                                                                                                                                 |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Priority P1 to P4        | P2 - Core Functions (Do core functions work?)                                                                                                                                         |
| Update notes             | Steve Mudie — Monday, December 21, 2020 10:18 AM<br />• Added link to Cypress code<br />• Reviewed Rainforest test and it does appear to be identical to the one being run in Cypress |
| Rainforest               | Webapp,Cloud,in Production                                                                                                                                                            |
| Cypress Reports          | RELEASE - TM4J-Key-Mapped-In-Cypress-Release - TM4J key found Cypress release run report (SDET/QA)                                                                                    |
| Team Ownership           | Channels                                                                                                                                                                              |
| Manual Test Environments | Automated - No manual tests needed                                                                                                                                                    |
| Cypress                  | in Production                                                                                                                                                                         |
| Location                 | Messaging                                                                                                                                                                             |
