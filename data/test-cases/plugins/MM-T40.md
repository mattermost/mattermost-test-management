---
key: MM-T40
title: Plugin remains enabled when upgraded
---

## MM-T40: Plugin remains enabled when upgraded

**Objective**

> <article>To verify that when a plugin is upgraded, it maintains the "Enabled" status.</article>

**Precondition**

> <article>Logged in as admin</article>

### Details

| Name     | Value                                                              |
| :------- | :----------------------------------------------------------------- |
| Priority | Low                                                                |
| Status   | Active                                                             |
| Folder   | Plugins                                                            |
| Labels   | E2E-1,Cloud-N/A,TM4J-Key-Mapped-In-Cypress-Release,plugins,cy-prod |
| Created  | 2019-08-30T01:47:11Z                                               |

### Steps

<hr/>

**Step 1**

> <article>1. Go to system console<br>2. Install any plugin (by uploading a file or installing via url <a href="https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.1.0/com.mattermost.demo-plugin-0.1.0.tar.gz)" rel="nofollow" title="Follow link">https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.1.0/com.mattermost.demo-plugin-0.1.0.tar.gz)</a><br>3. Enable plugin<br>4. Install the following newer version of the plugin in step 1 by overwriting version 0.1.0:&nbsp;<a href="https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.2.0/com.mattermost.demo-plugin-0.2.0.tar.gz" rel="noopener noreferrer" target="_blank">https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.2.0/com.mattermost.demo-plugin-0.2.0.tar.gz</a></article>

**Expected**

> <article>1. After step 3, the plugin is enabled and running.<br>2. After step 4, plugin version 0.2.0 is enabled and running.</article>

<hr/>

### More Info

| Name                     | Value                                                 |
| :----------------------- | :---------------------------------------------------- |
| Priority P1 to P4        | P2 - Core Functions (Do core functions work?)         |
| Update notes             | JB - Friday, December 4, 2020<br>- Moved to automated |
| Team Ownership           | Integration Frameworks                                |
| Manual Test Environments | Automated - No manual tests needed                    |
| Detox                    | N/A                                                   |
| Cypress                  | in Production                                         |
| Tags                     | Cloud N/A                                             |
| Location                 | Plugins                                               |
