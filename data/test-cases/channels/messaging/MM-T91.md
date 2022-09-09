---
# (Required) Ensure all values are filled up
name: "Replying to an older post by a user that has no content (only file attachments)"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Messaging
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# Do not change
id: 3741722
key: MM-T91
folder_path: channels/messaging
created_on: "2019-12-20T16:32:59Z"
last_updated: "2022-09-09T20:49:56Z"
case_hashed: 382cf28a496b61ab26b6683412462f5dc99fd6c751a57f479ed744e0fa29e5b8f77c18c75ffb02702f03726a3475f219
steps_hashed: 2dc173b282c332955bf1318f3dae56ba59888a0a5c95fb12b47da22070601d0fc7728f258a76712fe5cffc9ee4181ef4
---

## MM-T91: Replying to an older post by a user that has no content (only file attachments)

**Precondition**

**\*\*Test this one on a server that has older data, such as postgres.test or mysql.test if necessary (as opposed to rc.test, e.g. where there may not be older messages)\*\***

---

**Step 1**

Replying to an older post by a user that has no content (only file attachments)\
\--------------------\
\*\*Test this one on a server that has older data, such as postgres.test or mysql.test if necessary (as opposed to rc.test, e.g. where there may not be older messages)\*\*\
\
1\. On a post that has only file attachments, that is at least one day old (and has had subsequent messages posted after it in the channel),\
2\. Click "reply" from \[...] menu to reply to a message\
3\. In right hand sidebar, make a reply post\
4\. Send and verify reply appears\
5\. Close the RHS / go back to center channel view

**Expected**

After 5) You should see "Commented on \[user]‚Äôs message: \[File name 1] plus 1 other file" on the line below your username on the post showing at the bottom of the center panel\
\
NOTE: If the post you replied to had only ONE file attached, the "plus 1 other file" part of the "commented on..." line will not show
