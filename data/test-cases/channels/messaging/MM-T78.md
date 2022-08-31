---
key: MM-T78
title: RN apps: "commented on" line is NOT shown on the post below the "new messages" line if it is from the same author as the post above the "new messages" line
---

## MM-T78: RN apps: "commented on" line is NOT shown on the post below the "new messages" line if it is from the same author as the post above the "new messages" line

### Details

| Name     | Value                |
| :------- | :------------------- |
| Priority | Low                  |
| Status   | Active               |
| Folder   | Channels / Messaging |
| Labels   | messaging            |
| Created  | 2019-12-19T15:28:55Z |

### Steps

<hr/>

**Step 1**

> <article>RN apps: &quot;commented on&quot; line is NOT shown on the post below the &quot;new messages&quot; line if it is from the same author as the post above the &quot;new messages&quot; line<br />--------------------<br />1. With 2 test accounts start a conversation in any test channel<br />2. User1 make a post<br />3. User2 reply<br />4. User1 reply<br />5. User2 views above reply then switches to a different channel<br />6. User1 replies again<br />7. User2 goes back to the channel to view new message</article>

**Test Data**

> <article>FIXED v1.25 <a href="https://mattermost.atlassian.net/browse/MM-19707" rel="noopener noreferrer" target="_blank">https://mattermost.atlassian.net/browse/MM-19707</a></article>

**Expected**

> <article>- User2 sees two posts from User1 - one above the new messages line and one below it <br />- There is NO &quot;user1 commented on&quot; on the 2nd post as the posts above and below the new messages line are from the same author</article>

<hr/>

### More Info

| Name              | Value                                              |
| :---------------- | :------------------------------------------------- |
| Priority P1 to P4 | P3 - Deep Functions (Do extensive scenarios work?) |
| Rainforest        | Mobile                                             |
| Team Ownership    | Channels                                           |
| Detox             | N/A                                                |
| Cypress           | N/A                                                |
| Location          | Messaging                                          |
