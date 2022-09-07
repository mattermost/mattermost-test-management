---
name: "RN apps: "commented on" line is NOT shown on the post below the "new messages" line if it is from the same author as the post above the "new messages" line"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T78: RN apps: "commented on" line is NOT shown on the post below the "new messages" line if it is from the same author as the post above the "new messages" line

---

**Step 1**

RN apps: "commented on" line is NOT shown on the post below the "new messages" line if it is from the same author as the post above the "new messages" line\
\--------------------\
1\. With 2 test accounts start a conversation in any test channel\
2\. User1 make a post\
3\. User2 reply\
4\. User1 reply\
5\. User2 views above reply then switches to a different channel\
6\. User1 replies again\
7\. User2 goes back to the channel to view new message

**Test Data**

FIXED v1.25 <https://mattermost.atlassian.net/browse/MM-19707>

**Expected**

\- User2 sees two posts from User1 - one above the new messages line and one below it\
\- There is NO "user1 commented on" on the 2nd post as the posts above and below the new messages line are from the same author
