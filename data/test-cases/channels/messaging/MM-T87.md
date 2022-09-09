---
# (Required) Ensure all values are filled up
name: "Text in bullet points is the same size as text above and below it"
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
rainforest: []
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P4 - Low-Impact (Edge or unsuitable to repeat?)
location: Messaging
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# Do not change
id: 3741718
key: MM-T87
folder_path: channels/messaging
created_on: "2019-12-20T16:32:58Z"
last_updated: ""
case_hashed: 0935996b034e6997796def1be7da372700305e405f650a1ba58746d6fc51691807e551fa825ab031b19414cca73164db
steps_hashed: ff2bf353943b4390e3f26a6770c39b672fe9153757ea432955777b024908fa6afc462e04d7b98dc5f2779b7c7e658bb8
---

## MM-T87: Text in bullet points is the same size as text above and below it

---

**Step 1**

Text in bullet points is the same size as text above and below it\
–––––––––––––––––––––––––

1. In a test channel, post as described in Test Data field

**Test Data**

This is a normal sentence.\
\<newline>(just make a new line - don't type this in)\
1\. this is point 1\
 - this is a bullet under 1 with a space before the dash at the beginning\
\<newline>(just make a new line - don't type this in)\
this is more normal text

**Expected**

- All text in the post should be the same size. Text in the bullet point should not be larger than the text above or below it.
