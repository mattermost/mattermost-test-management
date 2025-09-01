---
# (Required) Ensure all values are filled up
name: "RN apps: 'commented on' line is NOT shown on the post below the 'new messages' line if it is from the different authors but part of the same thread/conversation"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership:
- Channels
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Messaging
component: null
tags: []
labels:
- messaging
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: null
playwright: null
rainforest:
- Mobile v1
- Mobile V2 Android
- in Production
manual_test_environments: []

# Do not change
id: 3736155
key: MM-T79
created_on: "2019-12-19T15:28:56Z"
last_updated: "2022-09-09T17:57:15Z"
case_hashed: fa3471f6479bc04cc191858cebf13094c1595c6cb260cc827a2317a3b8990eb434ca484a3cc12bfa5a380e46e8c7d2c1
steps_hashed: 0ddf8b82bf23d0c86d1b40450fd7a8bbf099b1cf6efc33d1da8b1ca8894df749de9336003f24cb1bffa2227c1529795a
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T79: RN apps: 'commented on' line is NOT shown on the post below the 'new messages' line if it is from the different authors but part of the same thread/conversation

---

**Step 1**

NOTE:  Collapsed Reply Threads needs to be off\
\
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
