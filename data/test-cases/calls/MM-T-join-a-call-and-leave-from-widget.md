---
# (Required) Ensure all values are filled up
name: "Calls - Start Call"
status: Active
priority: Normal
folder: Calls
authors: "DHaussermann"
team_ownership:
- Calls
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: null
key: MM-T-start-call
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T-start-call: Calls - Start Call

---

**Step 1**

Start a call in a channel by clicking the "Start call" button in the channel header.

**Expected**

- The Calls widget becomes visible in the bottom left corner of the screen
- A message is posted in the channel indicating that a call has started

---

**Step 2**

Leave the call by:

1. Clicking the Leave call button in the bottom right corner of the widget
2. Clicking Leave call from the pop-out options

**Expected**

- The call ends
- the widget disapears