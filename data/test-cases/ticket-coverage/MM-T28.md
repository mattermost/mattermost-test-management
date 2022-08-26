---
key: MM-T28
title: MM-17354 — Switching to a channel with unreads cuts off the date indicator if the post is the first one in channel
---

## MM-T28: MM-17354 — Switching to a channel with unreads cuts off the date indicator if the post is the first one in channel

### Details

| Name     | Value                |
| :------- | :------------------- |
| Priority | Normal               |
| Status   | Draft                |
| Folder   | Ticket coverage      |
| Created  | 2019-08-28T02:12:57Z |

### Steps

<hr/>

**Step 1**

> <article><ol><li>Find a channel with no messages that day. Call it ChannelA</li><li>Switch away from ChannelA</li><li>Use a secondary account to post enough messages in ChannelA that it fills up your screen</li><li>Use a primary account to view ChannelA</li></ol></article>

**Test Data**

> <article><img src="https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566960235728-Image+Pasted+at+2019-7-26+12-57.png" style="width: 300px;" class="fr-fil fr-dib"></article>

**Expected**

> <article><ul><li>Date indicator not cut off</li></ul><br><strong>Related bug</strong>: <a href="https://mattermost.atlassian.net/browse/MM-17354" rel="noopener noreferrer" target="_blank">MM-17354</a></article>

<hr/>

### More Info

| Name           | Value           |
| :------------- | :-------------- |
| Team Ownership | QA Platform     |
| Location       | Ticket coverage |
