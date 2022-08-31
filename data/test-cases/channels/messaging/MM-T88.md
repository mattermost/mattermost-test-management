---
key: MM-T88
title: An elipsis indicates the channel header is too long - public or private channel(newline)(newline)Quote icon displays at beginning of channel header
---

## MM-T88: An elipsis indicates the channel header is too long - public or private channel(newline)(newline)Quote icon displays at beginning of channel header

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

> <article>An elipsis indicates the channel header is too long - public or private channel<br><br>Quote icon displays at beginning of channel header<br>--------------------<br>1. In a public or private channel, click on the channel name and select "Edit Channel Header"<br><br>2. Enter the text in Test Data --&gt;<br>(Note: Must include the &gt;quote - does not reproduce without a quote in the header)<br><br>3. Hit "Enter" to Save</article>

**Test Data**

> <article>&gt;quote<br>newheader newheader newheader newheader newheader newheader newheader newheader newheader newheader</article>

**Expected**

> <article>After 3) you should see the quotation marks displaying in the channel header, and elipses (...) indicating the header is too long to fit across the top of the screen.<br><br>Clicking on the channel header should still display it in its entirety.</article>

<hr/>

### More Info

| Name                     | Value                                                                              |
| :----------------------- | :--------------------------------------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?)                                 |
| Update notes             | Steve Mudie — Tuesday, September 22, 2020 3:08 PM<br>• Removed from manual testing |
| Team Ownership           | Channels                                                                           |
| Manual Test Environments | Automated - No manual tests needed                                                 |
| Cypress                  | in Production                                                                      |
| Location                 | Messaging                                                                          |
