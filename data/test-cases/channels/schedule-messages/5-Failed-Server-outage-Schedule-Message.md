---
# (Required) Ensure all values are filled up
name: "Verify if the Failed scheduled message is sent out after server recovered from an outage issue"
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

Prerequisites:

1. Should have scheduled messages in a DM/GM/Channel.

### Scenario 1: The server recovers within a timestamp of 30 minutes and the message is sent out

Steps:

1. Log into User's account.
2. Simulate server outage for a time period when the message was scheduled.
   - Option 1: Use Jmeter or k6 tool to generate huge traffic on the server.
   - Option 2: If the instance is created using Cloud plugin, try options like `--database` or `hibernate`
3. Wait till the scheduled message fails due to server outage
4. Once the serer recovers, Verify if the scheduled message is sent out within 30 mins.

### Scenario 2: The server does not recover within a timestamp of 30 minutes. Message is marked as Failed.

1. Log into User's account.
2. Simulate server outage for a longer time period when the message was scheduled.
3. Verify that the message is not sent to the channel.
4. Hover on the message.
5. Verify User only gets option to Copy text and Delete option.
