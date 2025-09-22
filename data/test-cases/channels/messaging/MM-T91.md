---
# (Required) Ensure all values are filled up
name: "Replying to an older post by a user that has no content (only file attachments)"
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
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest:
- N/A
manual_test_environments:
- Automated - No manual tests needed

# Do not change
id: 3741722
key: MM-T91
created_on: "2019-12-20T16:32:59Z"
last_updated: "2022-09-09T20:49:56Z"
case_hashed: 99e84d64677e274409726aef912e40e26bb5a8dae98a90a5fc8a8a5a08e82fd999fdb5cf2cedee6a593b10a03b7f3ab1
steps_hashed: 349aca556e6c8a7e565d577723a66ce00939d0b96d43fadd7658b16e60c4915cbad42c11345232dbde44e9dc5df30a81
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
