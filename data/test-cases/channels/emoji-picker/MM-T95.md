---
# (Required) Ensure all values are filled up
name: "Selecting an emoji from emoji picker should insert it at the cursor position"
status: Active
priority: Low
folder: Emoji picker
authors: ""
team_ownership: 
- Channels

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

# (Optional)
component: null
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Messaging
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- rf-cloud-webapp
- messaging

# Do not change
id: 3741726
key: MM-T95
folder_path: channels/emoji-picker
created_on: "2019-12-20T16:33:00Z"
last_updated: ""
case_hashed: baf47c888ad72c694d792837ba61306313ef550bbc08d5743089d28ef544baf6e27a3e837aee22658771ab0d061cb442
steps_hashed: 30d8c7c41c5f99e26ca2c806fb42882fd3e5ad9176a0cc1440cd507dbeb0213bdecc2ba05e5a8d13e1abf1ddc62b7c72
---

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
