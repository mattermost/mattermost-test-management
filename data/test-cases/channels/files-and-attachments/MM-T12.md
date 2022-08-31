---
key: MM-T12
title: Loading indicator when posting images
---

## MM-T12: Loading indicator when posting images

### Details

| Name     | Value                                                                                                        |
| :------- | :----------------------------------------------------------------------------------------------------------- |
| Priority | Low                                                                                                          |
| Status   | Active                                                                                                       |
| Folder   | Channels / Files and Attachments                                                                             |
| Labels   | Hackfest,TM4J-Key-Mapped-In-Cypress-Release,cy-prod,files-and-attachments,fix-versions-not-empty-2022cleanup |
| Created  | 2019-08-27T00:36:47Z                                                                                         |

### Steps

<hr/>

**Step 1**

> <article>Loading indicator when posting images<br>–––––––––––––––––––––––––<ol><li>Post an image</li><li>Send another message&nbsp;</li></ol></article>

**Test Data**

> <article>You can find test files here: <a href="https://drive.google.com/drive/folders/178D_Tdc8rrZPEEmhtCKT4LlLEW6-v75Y?usp=sharing">https://drive.google.com/drive/folders/178D_Tdc8rrZPEEmhtCKT4LlLEW6-v75Y</a></article>

**Expected**

> <article><ul><li>The image stays visible and <strong>does not</strong> show a loading indicator each time a new post is made.</li></ul></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | v5.14 (August 2019) |
| Related ticket(s) | <a href="https://mattermost.atlassian.net/browse/MM-16908" rel="noopener noreferrer" target="_blank">Image attachments display loading indicator when receiving a new message — MM-16908</a> |

<hr/>

### More Info

| Name                     | Value                                              |
| :----------------------- | :------------------------------------------------- |
| Priority P1 to P4        | P3 - Deep Functions (Do extensive scenarios work?) |
| Team Ownership           | Channels                                           |
| Manual Test Environments | Automated - No manual tests needed                 |
| Cypress                  | in Production                                      |
| Location                 | Files and Attachments                              |
