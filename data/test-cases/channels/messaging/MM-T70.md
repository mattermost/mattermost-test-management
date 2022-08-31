---
key: MM-T70
title: At-mention user autocomplete is legible when it overlaps with channel header when drafting a long message containing a file attachment
---

## MM-T70: At-mention user autocomplete is legible when it overlaps with channel header when drafting a long message containing a file attachment

### Details

| Name     | Value                                                                                   |
| :------- | :-------------------------------------------------------------------------------------- |
| Priority | Low                                                                                     |
| Status   | Active                                                                                  |
| Folder   | Channels / Messaging                                                                    |
| Labels   | TM4J-Key-Mapped-In-Cypress-Release,cy-prod,messaging,fix-versions-not-empty-2022cleanup |
| Created  | 2019-12-19T15:28:54Z                                                                    |

### Steps

<hr/>

**Step 1**

> <article>At-mention user autocomplete is legible when it overlaps with channel header when drafting a long message containing a file attachment<br>–––––––––––––––––––––––––<ul><li>Go to a public channel and attach a file in a message draft</li><li>Copy the string of 'h' letters to the right into the message box</li><li>On a new line, type "@" to open the at-mention user autocomplete</li></ul></article>

**Test Data**

> <article>h<br>h<br>h<br>h<br>h<br>h<br>h<br>h<br>h<br>h<br>h<br>h</article>

**Expected**

> <article><ul><li>If autocomplete overlaps with channel header, it is still legible (channel header elements are not visible behind the drop-down)</li></ul></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | v5.11 (May 2019),v5.20 (Feb 2020) |
| Related ticket(s) | <ul><li><a href="https://mattermost.atlassian.net/browse/MM-14872">At-mention user autocomplete overlaps with channel header when drafting a long message containing a file attachment — MM-14872</a></li><li>(<span style="color: rgb(184, 49, 47);">Invalid</span>) <a href="https://mattermost.atlassian.net/browse/MM-17623">RC 5.14 testing: At-mention autocomplete overlaps with channel header — MM-17623</a></li><li>(<strong><span style="color: rgb(65, 168, 95);">Story</span></strong>)&nbsp;<a href="https://mattermost.atlassian.net/browse/MM-18667">UI Automation: Write an automated test using Cypress for "At-mention user autocomplete does not overlap with channel header when drafting a long message containing a file attachment" — MM-18667</a></li></ul> |
| Important notes about this step | Updated to clarify it can overlap but drop-down should be legible and header elements should not be visible behind |

<hr/>

**Step 2**

> <article>Test in a different dimension like 1280 x 900</article>

**Expected**

> <article><ul><li>If autocomplete overlaps with channel header, it is still legible (channel header elements are not visible behind the drop-down)</li></ul></article>

<hr/>

### More Info

| Name                     | Value                                                                                                                            |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| Priority P1 to P4        | P4 - Low-Impact (Edge or unsuitable to repeat?)                                                                                  |
| Update notes             | Added new "Broken-Arrow" label which simply means that the test appears to be automated but lacks any automated test executions. |
| Rainforest               | N/A                                                                                                                              |
| Team Ownership           | Channels                                                                                                                         |
| Manual Test Environments | Automated - No manual tests needed                                                                                               |
| Cypress                  | in Production                                                                                                                    |
| Location                 | Messaging                                                                                                                        |
