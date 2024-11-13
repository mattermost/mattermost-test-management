---
# (Required) Ensure all values are filled up
name: "Verify User schedule a message in a shared channel"
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

### Scenario 1: Able to see schedule a message in a shared channel.

Test setup:

1. Have 2 mattermost instances that have a shared channel.

Steps:

1. Log into First mattermost instance.
2. Go to the shared channel and schedule a message.
3. Log into Sendond mattermost instance.
4. Go to the shared channel.
5. Verify the scheduled message has arrived successfully
