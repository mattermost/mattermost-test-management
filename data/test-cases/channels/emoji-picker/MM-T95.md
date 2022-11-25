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
case_hashed: 5dd3163e4ff2261380daf1239ffd6b4ca6961ff3baa97db71819747b1f2e8272419e78174dc0d6d0b7c21ab06e0933fb
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
