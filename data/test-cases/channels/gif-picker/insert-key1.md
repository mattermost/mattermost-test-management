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

Searching a gif from gif picker and inserting it in the post in the center
1. Enable Gif picker from Systom console if not enabled
2. Open a channel and click on Emoji picker icon from message text box in center
3. Tab to Gif picker
4. Search a gif
5. Click on the gif

**Expected**
1. Gif picker search should show revelant gifs
2. Gif should be inserted in the post in the center when clicked on it
