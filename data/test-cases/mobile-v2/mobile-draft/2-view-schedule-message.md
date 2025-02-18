---
# (Required) Ensure all values are filled up
name: "User should be able to view scheduled message"
status: Active
priority: Normal
folder: Mobile Draft
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
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

Positive Scenarios

### Scenario 1: Ensure the "Drafts" page displays all scheduled messages.

- Verify the scheduled messages displayed are from the current team.
- Verify changing teams will display scheduled messages from that team's Channel/DM/GM.

**Step 2**

### Scenario 2: Validate scheduled messages are sorted chronologically.

**Step 3**

### Scenario 3: Confirm the "Scheduled" tab shows only scheduled messages, excluding unsent drafts.

**Step 4**

### Scenario 4: Verify long-press on a scheduled message opens the edit view.

Negative Scenarios

**Step 5**

### Scenario 5: Check the behavior when there are no scheduled messages (empty state UI).

**Step 6**

### Scenario 6: Simulate a scenario where the scheduled message data fails to load (e.g., API failure).
