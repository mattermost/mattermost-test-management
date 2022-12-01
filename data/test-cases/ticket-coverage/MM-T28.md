---
# (Required) Ensure all values are filled up
name: "MM-17354 — Switching to a channel with unreads cuts off the date indicator if the post is the first one in channel"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform
priority_p1_to_p4: "P3 - Deep Functions (Do extensive scenarios work?)"

# (Optional)
location: Ticket coverage
component: null
tags: []
labels: []

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
last_updated: ""
case_hashed: 95011f4a666606e9bd0977cdfa14ecf16488a700261ac5ea37203f821b843fc64685fb17b18339a6d8185420e5c34b24
steps_hashed: 4388f3d74b658e5038ebc983d0b61849764a9f7fbd642c8587fc955e4bdb1a515cbcab7901eda3d3506c0861c0e8dab2
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
