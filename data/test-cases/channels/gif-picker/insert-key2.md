---
# (Required) Ensure all values are filled up
name: "Change Test Title"
status: Active
priority: Normal
folder: Gif picker
authors: "@m-zubairahmed"
team_ownership: 
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: in Production
rainforest: []
manual_test_environments: []

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

Searching a gif from gif picker and inserting it in the post in the RHS
1. Enable Gif picker from Systom console if not enabled
1. Open a channel and send a message.
1. Click reply on the last message to open RHS
1. Click on Emoji picker icon from message text box in RHS
1. Tab to Gif picker
1. Search a gif
1. Click on the gif

**Expected**
1. Gif picker search should show revelant gifs
1. Gif should be inserted in the post in the RHS when clicked on it
