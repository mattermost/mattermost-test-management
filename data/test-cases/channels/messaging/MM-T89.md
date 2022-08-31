---
key: MM-T89
title: An ellipsis indicates the channel header is too long - DM
---

## MM-T89: An ellipsis indicates the channel header is too long - DM

### Details

| Name     | Value                                                |
| :------- | :--------------------------------------------------- |
| Priority | Low                                                  |
| Status   | Active                                               |
| Folder   | Channels / Messaging                                 |
| Labels   | TM4J-Key-Mapped-In-Cypress-Release,cy-prod,messaging |
| Created  | 2019-12-20T16:32:59Z                                 |

### Steps

<hr/>

**Step 1**

> <article>An ellipsis indicates the channel header is too long - DM<br>--------------------<br>1. Open a DM with any other user<br>2. Click the channel name and select "Edit Channel Header"<br>3. Enter the following:<br><br>&gt;quote<br>newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader<br><br>(must include the &gt;quote - does not reproduce without a quote in the header)<br>4. Press or click "Enter" to Save</article>

**Expected**

> <article>After 4) you should see the quotation marks displaying in the channel header, and ellipses (...) indicating the header is too long to fit across the top of the screen.<br /><br />Clicking on the channel header should still display it in it's entirety.</article>

<hr/>

### More Info

| Name                     | Value                                              |
| :----------------------- | :------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?) |
| Team Ownership           | Channels                                           |
| Manual Test Environments | Automated - No manual tests needed                 |
| Cypress                  | in Production                                      |
| Location                 | Messaging                                          |
