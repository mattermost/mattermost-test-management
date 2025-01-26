---
# (Required) Ensure all values are filled up
name: "Deleting a scheduled messages in mobile."
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

### Scenario 1: Verify the "Delete" action removes a scheduled message from the list.

**Step 2**

### Scenario 2: Ensure a confirmation prompt is displayed before deletion.

**Step 3**

### Scenario 3: Confirm the message is no longer visible in the "Scheduled" tab after deletion.

Negative Scenarios

**Step 4**

### Scenario 4: Test behavior when deleting a message during network interruptions.

**Step 5**

### Scenario 5: Attempt to delete a message that was already sent or canceled.
