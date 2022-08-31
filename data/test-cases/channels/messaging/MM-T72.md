---
key: MM-T72
title: @here. @all. @channel. (containing a period) still highlight
---

## MM-T72: @here. @all. @channel. (containing a period) still highlight

### Details

| Name     | Value                                                |
| :------- | :--------------------------------------------------- |
| Priority | Low                                                  |
| Status   | Active                                               |
| Folder   | Channels / Messaging                                 |
| Labels   | TM4J-Key-Mapped-In-Cypress-Release,cy-prod,messaging |
| Created  | 2019-12-19T15:28:54Z                                 |

### Steps

<hr/>

**Step 1**

> <article>@here. @all. @channel. (containing a period) still highlight<br>–––––––––––––––––––––––––<ol><li>Post `@here. @channel. @all.`</li></ol>(Ensure each mention is followed by a period)</article>

**Expected**

> <article><ul><li>The @-mentions are highlighted but the period is not</li></ul></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Related ticket(s) | <a href="https://mattermost.atlassian.net/browse/MM-14320">UI Automation: Write an automated test using `cypress` for "at-here.", "at-all." and "at-channel." (ending in a period) still highlight" — MM-14320</a> |

<hr/>

### More Info

| Name                     | Value                                              |
| :----------------------- | :------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?) |
| Rainforest               | N/A                                                |
| Team Ownership           | Channels                                           |
| Manual Test Environments | Automated - No manual tests needed                 |
| Cypress                  | in Production                                      |
| Location                 | Messaging                                          |
