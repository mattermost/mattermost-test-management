---
# (Required) Ensure all values are filled up
name: "Global Drafts > Deleted messages by others"
status: Active
priority: Normal
folder: Global Drafts
authors: "@m-zubairahmed"
team_ownership: 
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: in Production
rainforest: []
manual_test_environments: 
- Webapp
- Desktop

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

- As a user 1, open a channel and send a message
- Start reply to that thread
- As a user 2, open the same channel and start replying to the same thread
- Type another message and dont send it, instead click anywhere outside the reply box
- The message should be saved as a draft
- As a user 1, open the same channel and go to the same thread
- Delete the root message
- As a user 2, open the same channel and go to the same thread
- Verify that the draft is still present
- The original root message should show as deleted
- Click on 'x' to remove the deleted message
- Verify that the draft is removed

**Expected**

- The draft should be removed
- No Global Draft link should be shown in sidebar

---

**Step 2**

- As a user 1, open a channel and send a message
- Start reply to that thread
- Write a message and dont send it, instead click anywhere outside the reply box
- The message should be saved as a draft
- Delete the root message

**Expected**
- The draft should be removed
- No Global Draft link should be shown in sidebar
