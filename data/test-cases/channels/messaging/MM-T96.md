---
key: MM-T96
title: Trying to type in middle of text should not send the cursor to end of textbox
---

## MM-T96: Trying to type in middle of text should not send the cursor to end of textbox

### Details

| Name     | Value                                                |
| :------- | :--------------------------------------------------- |
| Priority | Low                                                  |
| Status   | Active                                               |
| Folder   | Channels / Messaging                                 |
| Labels   | TM4J-Key-Mapped-In-Cypress-Release,cy-prod,messaging |
| Created  | 2019-12-20T16:33:00Z                                 |

### Steps

<hr/>

**Step 1**

> <article>Trying to type in middle of text should not send the cursor to end of textbox<br />--------------------<br />1. Start typing in the post textbox<br />2. Click in the middle of the text you started typing<br />3. Start typing again</article>

**Expected**

> <article>Cursor stays where it is and it should not move to the end of text</article>

<hr/>

### More Info

| Name                     | Value                                              |
| :----------------------- | :------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?) |
| Team Ownership           | Channels                                           |
| Manual Test Environments | Automated - No manual tests needed                 |
| Cypress                  | in Production                                      |
| Location                 | Messaging                                          |
