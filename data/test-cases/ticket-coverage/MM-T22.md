---
key: MM-T22
title: MM-16511 — "Someone is typing"
---

## MM-T22: MM-16511 — "Someone is typing"

### Details

| Name     | Value                |
| :------- | :------------------- |
| Priority | Normal               |
| Status   | Draft                |
| Folder   | Ticket coverage      |
| Created  | 2019-08-27T20:49:05Z |

### Steps

<hr/>

**Step 1**

> <article><ol><li>Log in and create a new channel</li><li>Have another user has never DMed the first user join that channel</li><li>Delete the "User has joined the channel" message</li><li>Refresh</li><li>Have the other user start typing</li></ol></article>

**Expected**

> <article><ul><li>"Someone is typing" may still appear briefly, but the user's name should be loaded shortly after (replacing "Someone")</li></ul><br><strong>Related bug</strong>: <a href="https://mattermost.atlassian.net/browse/MM-16511" rel="noopener noreferrer" target="_blank">MM-16511</a><br><br></article>

<hr/>

### More Info

| Name           | Value           |
| :------------- | :-------------- |
| Team Ownership | QA Platform     |
| Location       | Ticket coverage |
