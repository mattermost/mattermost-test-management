---
name: "Reply to older message"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T90: Reply to older message

---

**Step 1**

Reply to older message\
\--------------------\
\*\*Test this one on a server that has older data, such as postgres.test or mysql.test if necessary (as opposed to rctesting, e.g. where there may not be older messages)\*\*\
\
1\. Click "reply" from \[...] menu to reply to a message that is at least one day old (and has had newer messages posted after it in the channel)\
2\. In right hand sidebar (RN apps: open reply thread), attach a file\
3\. Send and verify reply appears (non-RN apps will see comment with shaded background)\
4\. Close the RHS / go back to center channel view

**Expected**

\- Date timestamp for first and subsequent posts are correct.\
\- Comment appears at the bottom of the center channel with an intro line "Commented on username's message:" and a line beside the comment
