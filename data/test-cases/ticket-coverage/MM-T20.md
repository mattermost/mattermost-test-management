---
# (Required) Ensure all values are filled up
name: "MM-16922 — Web: Opening a permalink from last few messages of a channel has a loading indicator at the bottom"
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
id: 2758403
key: MM-T20
folder_path: ticket-coverage
created_on: "2019-08-27T20:02:16Z"
last_updated: ""
case_hashed: 557e4c301082263a5da909ee2d49876372c25e699bd823429937afe555891b902d4b045b407e0de09522d0d3b2efbf69
steps_hashed: db7400ccc942ad4b4aae4a2844f1d0d6fa9007eb7e7e7568ef643f2974ef2f400d056a6d58124929cacc5098ca041cca
---

## MM-T20: MM-16922 — Web: Opening a permalink from last few messages of a channel has a loading indicator at the bottom

---

**Step 1**

1. Get permalink of a post from last 10 posts in a channel.
2.  Paste it in browser and open the permalink

**Expected**

- No loader at the bottom as user is at latest bunch of posts

**Related bug**: [MM-16922](https://mattermost.atlassian.net/browse/MM-16922)
