---
# (Required) Ensure all values are filled up
name: "Toggling autoplay GIFs and emojis off or on shows a static or animated emoji reaction respectively"
status: Active
priority: Normal
folder: Messaging
authors: "@Victor-Nyagudi"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: in Production
detox: N/A
mmctl: N/A
playwright: N/A
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

1. Post a test message.
2. React to the message with a custom animated emoji.
3. Turn the "Autoplay GIFs and Emojis" setting off.
4. Turn the "Autoplay GIFs and Emojis" setting on.

**Expected**

A static post emoji reaction is shown after step 3, and an animated post emoji reaction is shown after step 4.
