---
# (Required) Ensure all values are filled up
name: "MM-16511 — 'Someone is typing'"
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
id: 2758684
key: MM-T22
created_on: "2019-08-27T20:49:05Z"
last_updated: "2022-09-09T17:57:25Z"
case_hashed: 40a79bd2a31e808657d33406f6228455cc27e7e24c0eafde95957075a09d2c4f1eef71aff5b4a84c8825e213ae7123a5
steps_hashed: 68b13d15242019d2856ab91cb49502fbc8f7beed5ef5ee0fd92d7bb6fd304cc8516f3968dc6aa8ea1ccc461510a71dfb
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T22: MM-16511 — 'Someone is typing'

---

**Step 1**

1. Log in and create a new channel
2. Have another user has never DMed the first user join that channel
3. Delete the "User has joined the channel" message
4. Refresh
5. Have the other user start typing

**Expected**

- "Someone is typing" may still appear briefly, but the user's name should be loaded shortly after (replacing "Someone")

**Related bug**: [MM-16511](https://mattermost.atlassian.net/browse/MM-16511)
