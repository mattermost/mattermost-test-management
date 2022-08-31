---
key: MM-T92
title: Replying to an older bot post that has some attachment pretext before the message attachment
---

## MM-T92: Replying to an older bot post that has some attachment pretext before the message attachment

**Precondition**

> <article><strong><span style="color: rgb(184, 49, 47);">Test on</span>&nbsp;</strong><a href="https://community-release.mattermost.com/"><strong>community-release.mattermost.com</strong></a></article>

### Details

| Name     | Value                                                                                   |
| :------- | :-------------------------------------------------------------------------------------- |
| Priority | Low                                                                                     |
| Status   | Active                                                                                  |
| Folder   | Channels / Messaging                                                                    |
| Labels   | No-Automated-Executions,TM4J-Key-Missing-In-Cypress,messaging,cy-rep-missing-or-skipped |
| Created  | 2019-12-20T16:32:59Z                                                                    |

### Steps

<hr/>

**Step 1**

> <article>Replying to an older bot post that has some attachment pretext before the message attachment<br>–––––––––––––––––––––––––<br><span style="color: rgb(184, 49, 47);">Test this on community-release.mattermost.com</span><ol><li>Find a Jira Bot post in ~Bugs channel, that is at least one day old (and has had subsequent messages posted after it in the channel),</li><li> Click "reply" from [...] menu to reply to a message</li><li> In right hand sidebar, make a reply post</li><li> Send and verify reply appears (non-RN apps will see comment with shaded background)</li><li>Close the RHS / go back to center channel view</li></ol></article>

**Test Data**

> <article>Test on community-release.mattermost.com</article>

**Expected**

> <article><ul><li>You should see "Commented on [bot] "message: Attachment pretext" on the line below your username on the post showing at the bottom of the center channel<br>e.g. "Commented on Jira's message: [username] created Bug MM-XXXXX"</li></ul><br><strong><em>When you're done testing, please delete your test post</em></strong></article>

<hr/>

### More Info

| Name                     | Value                                                                         |
| :----------------------- | :---------------------------------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                            |
| Update notes             | Steve Mudie — Wednesday, January 20, 2021 5:11 PM<br>• Added link to E2E file |
| Rainforest               | N/A                                                                           |
| Team Ownership           | Channels                                                                      |
| Manual Test Environments | Desktop                                                                       |
| Cypress                  | Update                                                                        |
| Tags                     | Never tested                                                                  |
| Location                 | Messaging                                                                     |
