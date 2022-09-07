---
name: "MM-17354 — Switching to a channel with unreads cuts off the date indicator if the post is the first one in channel"
status: Draft
priority: Normal
team_ownership: "QA Platform"
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

\
**Related bug**: [MM-17354](https://mattermost.atlassian.net/browse/MM-17354)
