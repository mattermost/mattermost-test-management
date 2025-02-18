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

### Scenario 1: Verify the "Reschedule" action allows selecting a new date and time.

1. Open the message options and select "Reschedule".
2. Choose a new date from the date picker.
3. Select a new time from the time picker.
4. Confirm the rescheduling action.
5. Verify that the message displays the newly selected date and time.

**Step 2**

### Scenario 2: Confirm the updated time is displayed correctly after rescheduling.

**Step 3**

### Scenario 3: Validate the confirmation message after successful rescheduling.
