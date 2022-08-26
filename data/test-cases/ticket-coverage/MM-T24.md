---
key: MM-T24
title: MM-16632 — Mobile Web App View: non-mobile view Search Options popover appears on top of mobile view page
---

## MM-T24: MM-16632 — Mobile Web App View: non-mobile view Search Options popover appears on top of mobile view page

### Details

| Name     | Value                |
| :------- | :------------------- |
| Priority | Normal               |
| Status   | Draft                |
| Folder   | Ticket coverage      |
| Created  | 2019-08-27T22:52:09Z |

### Steps

<hr/>

**Step 1**

> <article><ol><li>Open Mattermost in a mobile browser or snap desktop browser to mobile view</li><li>View a channel or DM/GM</li><li>Tap the Search icon in the header</li></ol></article>

**Expected**

> <article><ul><li>Should open the Search page</li></ul></article>

<hr/>

**Step 2**

> <article><ul><li>Tap in the search input and type anything</li><li>Use the 'X' to clear the input</li><li>Tap in the search input again</li></ul></article>

**Expected**

> <article><ul><li>The non-mobile web app Search Options popover <strong>should not</strong> appear on top of the web app mobile view page with the Search Options list</li></ul><br><strong>Related bug</strong>: <a href="https://mattermost.atlassian.net/browse/MM-16632" rel="noopener noreferrer" target="_blank">MM-16632</a></article>

<hr/>

### More Info

| Name           | Value           |
| :------------- | :-------------- |
| Team Ownership | QA Platform     |
| Location       | Ticket coverage |
