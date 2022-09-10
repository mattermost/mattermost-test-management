---
# (Required) Ensure all values are filled up
name: "MM-17354 — Switching to a channel with unreads cuts off the date indicator if the post is the first one in channel"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# (Optional)
component: null
priority_p1_to_p4: null
location: Ticket coverage
tags: []
labels: []

# Do not change
id: 2759609
key: MM-T28
folder_path: ticket-coverage
created_on: "2019-08-28T02:12:57Z"
last_updated: ""
case_hashed: e2b935f68b015d3c745845fdb82c45691d8f286cb7aea9ca81de853f0d3e7090652e2eb034aac7415e058d4e969d69a8
steps_hashed: 4388f3d74b658e5038ebc983d0b61849764a9f7fbd642c8587fc955e4bdb1a515cbcab7901eda3d3506c0861c0e8dab2
---

## MM-T28: MM-17354 — Switching to a channel with unreads cuts off the date indicator if the post is the first one in channel

---

**Step 1**

1. Find a channel with no messages that day. Call it ChannelA
2. Switch away from ChannelA
3. Use a secondary account to post enough messages in ChannelA that it fills up your screen
4. Use a primary account to view ChannelA

**Test Data**

![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566960235728-Image+Pasted+at+2019-7-26+12-57.png)

**Expected**

- Date indicator not cut off

**Related bug**: [MM-17354](https://mattermost.atlassian.net/browse/MM-17354)
