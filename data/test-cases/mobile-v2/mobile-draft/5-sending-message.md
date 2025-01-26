---
# (Required) Ensure all values are filled up
name: "Sending scheduled messages in mobile."
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

### Scenario 1: Ensure a scheduled message is sent automatically at the specified time.

**Step 2**

### Scenario 2: Verify scheduled message info in the channel is updated after successfully sending message.

**Step 3**

### Scenario 3: Validate that the message is removed from the "Scheduled" tab after being sent.

**Step 4**

### Scenario 4: Validate that user can long press on a scheduled message and send it before its scheduled time.

Negative Scenarios

**Step 5**

### Scenario 5: Test behavior when the app is in the background or closed at the scheduled time.

**Step 6**

### Scenario 6: Simulate a failed sending scenario (e.g., network issues).
