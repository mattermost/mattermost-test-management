---
name: "Replying to an older post by a user that has no content (only file attachments)"
status: Active
priority: Low
team_ownership: "Channels"
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
