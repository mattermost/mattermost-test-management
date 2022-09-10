---
# (Required) Ensure all values are filled up
name: "MM-16833 — Web: Scroll position is wrong when entering a permalink view with loaded messages > 120"
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
id: 2759189
key: MM-T25
folder_path: ticket-coverage
created_on: "2019-08-27T23:01:27Z"
last_updated: "2022-09-09T20:25:02Z"
case_hashed: 3b0d2165a0c916387b55c559791c2e2363d3ea6e954b0353bb5ced63cf723546fb5deab831e39e620dff605d8b36bcd1
steps_hashed: 8bc90f3b38770a29fc4395f5f81b4162d4c7eb1deb5aa3d3ae78fa987c6720e2c095c270b414140ff046298a0fc8e478
---

## MM-T25: MM-16833 — Web: Scroll position is wrong when entering a permalink view with loaded messages > 120

---

**Step 1**

1. Post a permalink in a channel
2. Click on the permalink and go to the permalink view
3. Load more posts a couple of times
4. Go back to the previous channel
5. Click on the permalink

**Expected**

- Loads permalink and scrolls to the position

**Related bug**: [MM-16833](https://mattermost.atlassian.net/browse/MM-16833)
