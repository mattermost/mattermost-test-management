---
key: MM-T31
title: MM-17515 — Mobile browser view: A long email address is not fully visible in Profile Settings
---

## MM-T31: MM-17515 — Mobile browser view: A long email address is not fully visible in Profile Settings

### Details

| Name     | Value                |
| :------- | :------------------- |
| Priority | Normal               |
| Status   | Draft                |
| Folder   | Ticket coverage      |
| Created  | 2019-08-28T10:40:52Z |

### Steps

<hr/>

**Step 1**

> <article><ol><li>Register a new account using a long email address such as "my.name+somethingreallylong@mattermost.com" (or similar)</li><li>Toggle Google Chrome Device Emulation<br /><strong>Windows</strong>:<br />CTRL+Shift+I<br />then<br />CTRL+Shift+M<br /><strong>Mac</strong>:<br />⌘⌥I (Command+Option+I)<br />then<br />⌘⇧M (Command+Shift+M)</li><li>Select "iPad" and "100%" zoom</li><li>Navigate to User menu &gt; Profile &gt; Profile Settings </li></ol></article>

**Expected**

> <article><ul><li>The email address is fully visible</li><li>There is no period at the end of "Click to upload an image"</li></ul><br /><strong>Related bug</strong>: <a href="https://mattermost.atlassian.net/browse/MM-17515" rel="noopener noreferrer" target="_blank">MM-17515</a></article>

<hr/>

### More Info

| Name           | Value           |
| :------------- | :-------------- |
| Team Ownership | QA Platform     |
| Location       | Ticket coverage |
