---
# (Required) Ensure all values are filled up
name: "MM-17354 — Switching to a channel with unreads cuts off the date indicator if the post is the first one in channel"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Ticket coverage
component: null
tags: []
labels: []
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: 2759609
key: MM-T28
created_on: "2019-08-28T02:12:57Z"
last_updated: "2022-12-01T21:17:45Z"
case_hashed: 0d51084eb99d4fd8c49dcf6c20f16acbbdc4cfa0f16723bad43b44521b8ad34705d9b41354928a8a42a1d6b8e97d984c
steps_hashed: 2c61845c0962b5588c056ca610a3116c642a0aad09da17a2c4f4412637fa2300df22192a3af716b267f4aad14e479c93
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T28: MM-17354 — Switching to a channel with unreads cuts off the date indicator if the post is the first one in channel

---

**Step 1**

1. Find a channel with no messages that day. Call it Channel A
2. Switch away from Channel A
3. Use a secondary account to post enough messages in Channel A that it fills up your screen
4. Use a primary account to view Channel A

**Test Data**

![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566960235728-Image+Pasted+at+2019-7-26+12-57.png)

**Expected**

- Date indicator not cut off

**Related bug**: [MM-17354](https://mattermost.atlassian.net/browse/MM-17354)
