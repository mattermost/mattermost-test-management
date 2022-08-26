---
key: MM-T87
title: Text in bullet points is the same size as text above and below it
---

## MM-T87: Text in bullet points is the same size as text above and below it

### Details

| Name     | Value                                                |
| :------- | :--------------------------------------------------- |
| Priority | Low                                                  |
| Status   | Active                                               |
| Folder   | Channels / Messaging                                 |
| Labels   | TM4J-Key-Mapped-In-Cypress-Release,cy-prod,messaging |
| Created  | 2019-12-20T16:32:58Z                                 |

### Steps

<hr/>

**Step 1**

> <article>Text in bullet points is the same size as text above and below it<br>–––––––––––––––––––––––––<ol><li>In a test channel, post as described in Test Data field</li></ol></article>

**Test Data**

> <article>This is a normal sentence.<br>&lt;newline&gt;(just make a new line - don't type this in)<br>1. this is point 1<br>&nbsp;- this is a bullet under 1 with a space before the dash at the beginning<br>&lt;newline&gt;(just make a new line - don't type this in)<br>this is more normal text</article>

**Expected**

> <article><ul><li>All text in the post should be the same size. Text in the bullet point should not be larger than the text above or below it.</li></ul></article>

<hr/>

### More Info

| Name                     | Value                                                                                              |
| :----------------------- | :------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P4 - Low-Impact (Edge or unsuitable to repeat?)                                                    |
| Update notes             | Steve Mudie — Tuesday, September 22, 2020 3:07 PM<br>• Removed from manual testing                 |
| Cypress Reports          | RELEASE - TM4J-Key-Mapped-In-Cypress-Release - TM4J key found Cypress release run report (SDET/QA) |
| Team Ownership           | Channels                                                                                           |
| Manual Test Environments | Automated - No manual tests needed                                                                 |
| Cypress                  | in Production                                                                                      |
| Location                 | Messaging                                                                                          |
