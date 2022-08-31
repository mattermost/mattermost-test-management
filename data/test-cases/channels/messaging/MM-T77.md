---
key: MM-T77
title: Consecutive message does not repeat profile info (center and reply thread)
---

## MM-T77: Consecutive message does not repeat profile info (center and reply thread)

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

> <article>Consecutive message does not repeat profile info (center and reply thread)<br />--------------------<br />1. Post `One`<br />2. Post `Two`<br />3. Post `Three`<br />4. Click reply arrow to also observe in RHS (mobile apps: observe first in center, then open reply screen to view there)</article>

**Test Data**

> <article>N/A in compact view</article>

**Expected**

> <article>On desktop app, RN apps, and browser in full-width view:<br />Name and profile pic display on `One` post only, not on `Two` or `Three`<br /><br />Browser in mobile view: Profile pic appears on `One` post. User's name (but not profile pic) appears on all three posts in center panel. When clicking &quot;reply&quot; on each post, profile pic is shown in RHS view.<br /><br />When new post is added, the information should not flicker</article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Important notes about this step | Compact view RHS consecutive posts being considered in UI redesign:<ul><li><a href="https://mattermost.atlassian.net/browse/MM-12946" rel="noopener noreferrer" target="_blank">https://mattermost.atlassian.net/browse/MM-12946</a></li><li><a href="https://mattermost.atlassian.net/browse/MM-12915" rel="noopener noreferrer" target="_blank">https://mattermost.atlassian.net/browse/MM-12915</a></li><li><a href="https://mattermost.atlassian.net/browse/MM-17293" rel="noopener noreferrer" target="_blank">https://mattermost.atlassian.net/browse/MM-17293</a></li></ul> |

<hr/>

### More Info

| Name                     | Value                                                                                                                                                     |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P4 - Low-Impact (Edge or unsuitable to repeat?)                                                                                                           |
| Update notes             | Steve Mudie — Wednesday, September 16, 2020 6:44 PM<br>• Added links to Cypress code and Rainforest (mobile only) tests<br>• Removed from manual rotation |
| Rainforest               | Mobile                                                                                                                                                    |
| Team Ownership           | Channels                                                                                                                                                  |
| Manual Test Environments | Automated - No manual tests needed                                                                                                                        |
| Cypress                  | in Production                                                                                                                                             |
| Location                 | Messaging                                                                                                                                                 |
