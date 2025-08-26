---
# (Required) Ensure all values are filled up
name: "MM-16511 — 'Someone is typing'"
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
id: 2758684
key: MM-T22
created_on: "2019-08-27T20:49:05Z"
last_updated: "2022-12-01T21:17:43Z"
case_hashed: 63222fde00c4183d22acb7829ce3a38adcbf25d480f70cb06e917b42050b73c9f2271d7ea23d1a796e6a628d2c26952a
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
