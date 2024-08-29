---
# (Required) Ensure all values are filled up
name: "RN apps: 'commented on' line is NOT shown on the post below the 'new messages' line if it is from the same author as the post above the 'new messages' line"
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
- Mobile V2 iOS
- in Production
manual_test_environments: []

# Do not change
id: 3736154
key: MM-T78
created_on: "2019-12-19T15:28:55Z"
last_updated: "2022-09-09T17:57:14Z"
case_hashed: c1c4ff22a6b8833e63e4219216b9683738694aa4b7d4697a0c8945cd4ea260f5dd672aab4941fe16b9ad3ac36dfdedf1
steps_hashed: dc108c4482794be7dfc2d1c0533ab026636d6ede8f60027cf6233a39182a68c1de2b3fa0321a40a7b4977f143763f7f2
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T78: RN apps: 'commented on' line is NOT shown on the post below the 'new messages' line if it is from the same author as the post above the 'new messages' line

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
