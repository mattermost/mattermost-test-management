---
# (Required) Ensure all values are filled up
name: "Rescheduled messages in mobile."
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

### Scenario 1: Verify the "Reschedule" action allows selecting a new time.

**Step 2**

### Scenario 2: Confirm the updated time is displayed correctly after rescheduling.

**Step 3**

### Scenario 3: Validate the confirmation message after successful rescheduling.

Negative Scenarios

**Step 4**

### Scenario 4: Attempt to reschedule a message to a past date (expect error handling).

**Step 5**

### Scenario 5: Simulate a failure scenario when rescheduling due to server issues.
