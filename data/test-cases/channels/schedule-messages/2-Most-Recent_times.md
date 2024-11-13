---
# (Required) Ensure all values are filled up
name: "Verify User can see most recent time used in the Send button dropdown option"
status: Active
priority: Normal
folder: Schedule Messages
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Messaging
component: null
tags: []
labels: []
tested_by_contributor: ""

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

### Scenario 1: Able to see most recent custom time when scheduling a message

Steps:

1. Log into User's account.
2. Type a message in the GM/Channel post text box.
3. Click on the Dropdown beside Send button.
4. Click on `Choose a custom time`.
5. Choose a future date and time.
6. Click on scehdule button.
7. Verify the message is scehduled.
8. Compose another schedule message and click on the Dropdown beside Send button.
9. Verify the user can see the recent custom Date and time used to schedule.
