---
# (Required) Ensure all values are filled up
name: "Verify User can Copy scheduled message contents"
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

### Scenario 1: Able to add schedule to the Draft message.

Steps:

1. Log into User's account.
2. Type a message in the GM/Channel post text box.
3. Click on the Dropdown beside Send button.
4. Click on `Choose a custom time`.
5. Click On `Schedule` button with the default date and time of scheduled post.
6. Go to Scheduled tab and verify the messages appears.
7. Hover on the scheduled message.
8. Click on `Copy` icon.
9. Go to the channel and post the copied content as a message.
10. Verify the Scheduled message content and recent posted message content are same.
