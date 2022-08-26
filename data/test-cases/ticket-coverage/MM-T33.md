---
key: MM-T33
title: MM-17392 — Invalid channel information in CSV exports
---

## MM-T33: MM-17392 — Invalid channel information in CSV exports

### Details

| Name     | Value                |
| :------- | :------------------- |
| Priority | Normal               |
| Status   | Draft                |
| Folder   | Ticket coverage      |
| Created  | 2019-08-28T12:11:41Z |

### Steps

<hr/>

**Step 1**

> <article><ol><li>Make a few posts in a DM or GM</li><li>Do the same in a different DM or GM</li></ol></article>

**Expected**

> <article>Able to post succesfully</article>

<hr/>

**Step 3**

> <article><ol><li>Open posts.csv</li><li>Look for the entries regarding the posts you made&nbsp;</li></ol></article>

**Expected**

> <article><ul><li>The exported data join/leave information have the proper channel information — i.e., <strong>Not</strong> the same channel information for all the entries of different channels —</li></ul><br><strong>Related bug</strong>: <a href="https://mattermost.atlassian.net/browse/MM-17392" rel="noopener noreferrer" target="_blank">MM-17392</a></article>

<hr/>

### More Info

| Name           | Value           |
| :------------- | :-------------- |
| Team Ownership | QA Platform     |
| Location       | Ticket coverage |
