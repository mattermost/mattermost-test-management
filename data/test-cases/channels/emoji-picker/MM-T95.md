---
name: "Selecting an emoji from emoji picker should insert it at the cursor position"
status: Active
priority: Low
team_ownership: "Channels"
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
