---
# (Required) Ensure all values are filled up
name: "Reply to older message"
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
id: 3741721
key: MM-T90
folder_path: channels/messaging
created_on: "2019-12-20T16:32:59Z"
last_updated: ""
case_hashed: 76af16bed49ce37102bc997c7de4746260b9271d8f9917c63db843cf11c099e70082348754f077b31f12a7c50bd0e5cb
steps_hashed: b8a736b4a42548fe8fa6ae9ec27d925b91035fda1ff1ac5df8d2d3227fdce7188d7e97e2962e2ee249e230ff28483434
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
