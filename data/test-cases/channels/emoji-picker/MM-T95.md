---
# (Required) Ensure all values are filled up
name: "Selecting an emoji from emoji picker should insert it at the cursor position"
status: Active
priority: Low
folder: Emoji picker
authors: ""
team_ownership: 
- Channels
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
component: null
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- rf-cloud-webapp
- messaging
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- Webapp
- Cloud
- in Production
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3741726
key: MM-T95
created_on: "2019-12-20T16:33:00Z"
last_updated: ""
case_hashed: 4315e4a72a587c83a504ea1264446ff0eb6903545d321000a8d39d88babff76668faf3c278fce18283fdcab1569930da
steps_hashed: c9ba45765ba3f44592fd73035cb6087baafb50b6bbcffedc1805fbcd8f59f6e9c6fb20605ee5cbe1553bfd217c4307b8
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T95: Selecting an emoji from emoji picker should insert it at the cursor position

---

**Step 1**

Selecting an emoji from emoji picker should insert it at the cursor position\
\--------------------\
1\. Write some text in the send box of the channel (or RHS Thread)\
2\. Move the cursor to the middle of the text\
3\. Select an emoji from the emoji picker\
4\. Hit enter

**Test Data**

NEW v5.18 <https://mattermost.atlassian.net/browse/MM-17388>

**Expected**

After 3) Emoji should be inserted where the cursor is at the time of selection\
After 4) Emoji should be displayed in the post at the position it was inserted in step 3)
