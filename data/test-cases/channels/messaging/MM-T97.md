---
key: MM-T97
title: Open edit modal immediately after making a post
---

## MM-T97: Open edit modal immediately after making a post

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

> <article>Open edit modal immediately after making a post<br />--------------------<br />1. Post a message in a channel<br />2. Type a second post, with different text from the first one, into the input box<br />3. Hit 'enter' key and then immediately (as FAST as you can) hit 'arrow-up' to open the edit box<br />4. If pressed while the new post was still pending, observe the edit box opens for the first post<br />5. Press ESC to close edit modal<br />6. Press UP again</article>

**Expected**

> <article>Step 4: If you pressed UP while the post was still pending, edit modal opens for previous post<br /><br />Step 6: Edit modal opens for the second post</article>

<hr/>

### More Info

| Name                     | Value                                                                                              |
| :----------------------- | :------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                                 |
| Cypress Reports          | RELEASE - TM4J-Key-Mapped-In-Cypress-Release - TM4J key found Cypress release run report (SDET/QA) |
| Team Ownership           | Channels                                                                                           |
| Manual Test Environments | Automated - No manual tests needed                                                                 |
| Cypress                  | in Production                                                                                      |
| Location                 | Messaging                                                                                          |
