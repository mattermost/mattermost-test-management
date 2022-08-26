---
key: MM-T74
title: Mobile view: Post options menu (3-dots) is present on a reply post in RHS
---

## MM-T74: Mobile view: Post options menu (3-dots) is present on a reply post in RHS

### Details

| Name     | Value                                                |
| :------- | :--------------------------------------------------- |
| Priority | Low                                                  |
| Status   | Active                                               |
| Folder   | Channels / Messaging                                 |
| Labels   | TM4J-Key-Mapped-In-Cypress-Release,cy-prod,messaging |
| Created  | 2019-12-19T15:28:55Z                                 |

### Steps

<hr/>

**Step 1**

> <article>Mobile view: Post options menu (3-dots) is present on a reply post in RHS<br />--------------------<br />1. On Webapp mobile view, click on reply to an existing post.<br />2. Type a message and click on Add comment.</article>

**Test Data**

> <article>FIXED v5.15 <a href="https://mattermost.atlassian.net/browse/MM-17409" rel="noopener noreferrer" target="_blank">https://mattermost.atlassian.net/browse/MM-17409</a></article>

**Expected**

> <article>After 2) you can still see the 3-dot post options menu visible to the right of your post and clicking on the menu opens it and displays post options</article>

<hr/>

### More Info

| Name                     | Value                                                                                              |
| :----------------------- | :------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P2 - Core Functions (Do core functions work?)                                                      |
| Update notes             | Steve Mudie — Tuesday, September 22, 2020 2:53 PM<br>• Removed from manual testing                 |
| Rainforest               | N/A                                                                                                |
| Cypress Reports          | RELEASE - TM4J-Key-Mapped-In-Cypress-Release - TM4J key found Cypress release run report (SDET/QA) |
| Team Ownership           | Channels                                                                                           |
| Manual Test Environments | Automated - No manual tests needed                                                                 |
| Cypress                  | in Production                                                                                      |
| Location                 | Messaging                                                                                          |
