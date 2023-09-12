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

Searching for and inserting a GIF from the GIF picker into a post on the RHS:
1. If the GIF picker is not enabled, enable it from the System Console.
1. Open a channel and send a message.
1. Click the "Reply" button on the last message to open the RHS.
1. Click on the Emoji picker icon located within the message text box in the RHS.
1. Navigate to the GIF picker tab.
1. Perform a search for a GIF.
1. Click on any GIF.

**Expected Results:**
1. The GIF picker search should display relevant GIFs.
1. When clicked, the selected GIF should be inserted into the post on the RHS.
