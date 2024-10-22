---
# (Required) Ensure all values are filled up
name: "Reply to older message"
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
id: 3741721
key: MM-T90
created_on: "2019-12-20T16:32:59Z"
last_updated: ""
case_hashed: 06e4e6cd6fc31aadc22b1b43f55c68cbe61262be8b2f318fa5db0c224280197a036b18bb207dc4ffb6c14bc5f510fd43
steps_hashed: ce6d4186a108dab455b12a6552dd92c066d0a7578d214e620ac4a31f914c4139a8072ccfd5df466cdff1c706b3b76063
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
