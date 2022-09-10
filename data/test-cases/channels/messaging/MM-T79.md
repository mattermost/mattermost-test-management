---
# (Required) Ensure all values are filled up
name: "RN apps: 'commented on' line is NOT shown on the post below the 'new messages' line if it is from the different authors but part of the same thread/conversation"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: null
playwright: null
rainforest: 
- Mobile
manual_test_environments: []

# (Optional)
component: null
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Messaging
tags: []
labels: 
- messaging

# Do not change
id: 3736155
key: MM-T79
folder_path: channels/messaging
created_on: "2019-12-19T15:28:56Z"
last_updated: "2022-09-09T17:57:15Z"
case_hashed: 308ed89b36f7d0347aa9609a8ee416b9a00493f56a16bd3c3023bba46c2cce9d6c0e95191cbd1b44202ac0400de6d4d2
steps_hashed: 4c835a8310943261df72045077903e19fde386745f5849ca427b85f52750beb7822f52f8fccfc3aa12e289eff39e17b7
---

## MM-T79: RN apps: 'commented on' line is NOT shown on the post below the 'new messages' line if it is from the different authors but part of the same thread/conversation

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
