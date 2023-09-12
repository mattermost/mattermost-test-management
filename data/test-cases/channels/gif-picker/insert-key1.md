---
# (Required) Ensure all values are filled up
name: "Should search, select and post correct Gif when Gif picker is opened from center textbox"
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

Searching for and inserting a GIF from the GIF picker into a post in the center:
1. If the GIF picker is not enabled, enable it from the System Console.
2. Open a channel and click on the Emoji picker icon within the message text box in the center.
3. Navigate to the GIF picker tab.
4. Perform a search for a GIF.
5. Click on the any GIF.

**Expected Results:**
1. The GIF picker search should display relevant GIFs.
2. When clicked, the selected GIF should be inserted into the post in the center.
