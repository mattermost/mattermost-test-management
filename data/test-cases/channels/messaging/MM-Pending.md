---
# (Required) Ensure all values are filled up
name: "Navigating DM list using Up/Down arrow keys scrolls it"
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

1. Click the "+" next to the "Direct Messages" category header in the LHS to open the DM list modal.
2. Ensure there are enough list items such that you'll need to scroll to see the rest.
3. Press the down arrow key to navigate through items to an item out of view.
4. Press the up arrow key to navigate back up to an item out of view.

**Expected**

The DM list scrolls to reveal the hidden items in step 3 and 4.
