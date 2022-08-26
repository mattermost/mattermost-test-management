---
key: MM-T93
title: Replying to an older bot post that has no post content and no attachment pretext
---

## MM-T93: Replying to an older bot post that has no post content and no attachment pretext

**Precondition**

> <article><strong><span style="color: rgb(184, 49, 47);">Test on</span>&nbsp;</strong><a href="https://community-release.mattermost.com/"><strong>community-release.mattermost.com</strong></a></article>

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

> <article>Replying to an older bot post that has no post content and no attachment pretext<br />--------------------<br />**Test this one on community-release.mattermost.com**<br /><br />1. Go to &quot;UI Automation&quot; channel, scroll up to find a Mattermost Build post that is at least one day old, and has had subsequent messages posted after it in the channel (those are the posts with the big Jenkins pictures)<br />2. Click &quot;reply&quot; from [...] menu to reply to a message <br />3. In right hand sidebar, make a reply post (it's okay to make a test post in that channel)<br />4. Verify the reply appears (non-RN apps will see comment with shaded background)<br />5. Close the RHS / go back to center channel view<br />6. When you're done testing, please delete your test post</article>

**Test Data**

> <article>Test on <a href="https://community-release.mattermost.com" rel="noopener noreferrer" target="_blank">https://community-release.mattermost.com</a></article>

**Expected**

> <article>After 5) you should see &quot;Commented on [bot]&sbquo;&Auml;&ocirc;s message: [attachment_title]&quot;<br /><br />e.g. &quot;Commented on Mattermost Build's message: UI Automation Build #1110 SUCCESS!&quot;</article>

<hr/>

### More Info

| Name                     | Value                                                                                              |
| :----------------------- | :------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                                 |
| Rainforest               | N/A                                                                                                |
| Cypress Reports          | RELEASE - TM4J-Key-Mapped-In-Cypress-Release - TM4J key found Cypress release run report (SDET/QA) |
| Team Ownership           | Channels                                                                                           |
| Manual Test Environments | Automated - No manual tests needed                                                                 |
| Cypress                  | in Production                                                                                      |
| Location                 | Messaging                                                                                          |
