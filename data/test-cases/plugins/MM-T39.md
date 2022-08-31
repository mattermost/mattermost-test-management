---
key: MM-T39
title: Disable Plugin on Removal
---

## MM-T39: Disable Plugin on Removal

**Objective**

> <article>To verify that plugins don't automatically run upon reinstalling.</article>

**Precondition**

> <article>Logged in as admin</article>

### Details

| Name     | Value                                                              |
| :------- | :----------------------------------------------------------------- |
| Priority | Low                                                                |
| Status   | Active                                                             |
| Folder   | Plugins                                                            |
| Labels   | E2E-1,Cloud-N/A,TM4J-Key-Mapped-In-Cypress-Release,plugins,cy-prod |
| Created  | 2019-08-30T01:25:31Z                                               |

### Steps

<hr/>

**Step 1**

> <article><ol><li>Go to system console</li><li>Install any plugin (by uploading a file or installing via url <a href="https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.1.0/com.mattermost.demo-plugin-0.1.0.tar.gz)" rel="nofollow" title="Follow link">https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.1.0/com.mattermost.demo-plugin-0.1.0.tar.gz)</a></li><li>Enable plugin</li><li>Remove plugin</li><li>Install previously installed plugin</li></ol></article>

**Expected**

> <article>Plugin is installed and is disabled</article>

<hr/>

### More Info

| Name                     | Value                                                 |
| :----------------------- | :---------------------------------------------------- |
| Priority P1 to P4        | P2 - Core Functions (Do core functions work?)         |
| Update notes             | JB - Friday, December 4, 2020<br>- Moved to automated |
| Team Ownership           | Integration Frameworks                                |
| Manual Test Environments | Automated - No manual tests needed                    |
| Cypress                  | in Production                                         |
| Tags                     | Cloud N/A                                             |
| Location                 | Plugins                                               |
