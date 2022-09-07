---
name: "RN apps: "commented on" line is NOT shown on the post below the "new messages" line if it is from the different authors but part of the same thread/conversation"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T79: RN apps: "commented on" line is NOT shown on the post below the "new messages" line if it is from the different authors but part of the same thread/conversation

---

**Step 1**

RN apps: "commented on" line is NOT shown on the post below the "new messages" line if it is from the different authors but part of the same thread/conversation\
\--------------------\
1\. With 3 test accounts, start a conversation in any test channel\
2\. User1 make a post\
3\. User2 reply\
4\. User1 switches to a different channel\
5\. User3 reply to thread\
6\. User1 switches back to test channel to view new message

**Test Data**

FIXED v1.26 <https://mattermost.atlassian.net/browse/MM-18054>

**Expected**

\- User1 sees a post above the "new messages" line from User2 and a post below the "new messages" line from User3\
\- There is NO "commented on" line on User3's post below the "new messages" line as the post is from the same thread/conversation but a different author
