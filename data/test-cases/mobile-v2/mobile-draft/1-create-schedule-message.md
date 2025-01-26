---
# (Required) Ensure all values are filled up
name: "Create Scheduled message in a Channel."
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

### Scenario 1: Verify the user can type a message and schedule it for a specific time.

**Step 2**

### Scenario 2: Validate the "Schedule draft" button becomes active only when a valid time is selected.

**Step 3**

### Scenario 3: Ensure the user can choose a custom time or predefined options like "Tomorrow at 9:00 AM."

**Step 4**

### Scenario 4: Confirm that the schedule is correctly displayed after saving.

**Step 5**

### Scenario 5: Verify the confirmation message appears after successfully scheduling a message.

Negative Scenarios

**Step 6**

### Scenario 6: Attempt to schedule a message without typing any content (expect an error or disabled button).

**Step 7**

### Scenario 7: Try to schedule a message without selecting a time (expect an error or disabled button).

**Step 8**

### Scenario 8: Test invalid time inputs (e.g., past dates, invalid time format).

**Step 9**

### Scenario 9: Verify behavior when the device is offline during scheduling.
