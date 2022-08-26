---
key: MM-T21
title: MM-17043 — Downgrade errors from the OpenGraph API
---

## MM-T21: MM-17043 — Downgrade errors from the OpenGraph API

### Details

| Name     | Value                |
| :------- | :------------------- |
| Priority | Normal               |
| Status   | Draft                |
| Folder   | Ticket coverage      |
| Created  | 2019-08-27T20:07:51Z |

### Steps

<hr/>

**Step 1**

> <article><strong>On the RN mobile app</strong>:<ol><li>Make a post containing an invalid or internal URL such as `http://notarealurlatall.com/index.html`</li></ol><br><strong>On the desktop</strong>:<ol><li>Log in as an admin</li><li>Navigate to System Console → Reporting → Server Logs</li></ol></article>

**Expected**

> <article><ul><li>No errors should be seen in the logs</li></ul><br><strong>Related bug</strong>: <a href="https://mattermost.atlassian.net/browse/MM-17043" rel="noopener noreferrer" target="_blank">MM-17043</a></article>

<hr/>

### More Info

| Name           | Value           |
| :------------- | :-------------- |
| Team Ownership | QA Platform     |
| Location       | Ticket coverage |
