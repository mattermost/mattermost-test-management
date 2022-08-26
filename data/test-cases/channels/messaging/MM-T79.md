---
key: MM-T79
title: RN apps: "commented on" line is NOT shown on the post below the "new messages" line if it is from the different authors but part of the same thread/conversation
---

## MM-T79: RN apps: "commented on" line is NOT shown on the post below the "new messages" line if it is from the different authors but part of the same thread/conversation

### Details

| Name     | Value                |
| :------- | :------------------- |
| Priority | Low                  |
| Status   | Active               |
| Folder   | Channels / Messaging |
| Labels   | messaging            |
| Created  | 2019-12-19T15:28:56Z |

### Steps

<hr/>

**Step 1**

> <article>RN apps: &quot;commented on&quot; line is NOT shown on the post below the &quot;new messages&quot; line if it is from the different authors but part of the same thread/conversation<br />--------------------<br />1. With 3 test accounts, start a conversation in any test channel<br />2. User1 make a post<br />3. User2 reply<br />4. User1 switches to a different channel<br />5. User3 reply to thread<br />6. User1 switches back to test channel to view new message</article>

**Test Data**

> <article>FIXED v1.26 <a href="https://mattermost.atlassian.net/browse/MM-18054" rel="noopener noreferrer" target="_blank">https://mattermost.atlassian.net/browse/MM-18054</a></article>

**Expected**

> <article>- User1 sees a post above the &quot;new messages&quot; line from User2 and a post below the &quot;new messages&quot; line from User3<br />- There is NO &quot;commented on&quot; line on User3's post below the &quot;new messages&quot; line as the post is from the same thread/conversation but a different author</article>

<hr/>

### More Info

| Name              | Value                                              |
| :---------------- | :------------------------------------------------- |
| Priority P1 to P4 | P3 - Deep Functions (Do extensive scenarios work?) |
| Rainforest        | Mobile                                             |
| Team Ownership    | Channels                                           |
| Detox             | N/A                                                |
| Cypress           | N/A                                                |
| Selenium          | N/A                                                |
| Location          | Messaging                                          |
