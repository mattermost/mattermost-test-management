---
# (Required) Ensure all values are filled up
name: "MM-16833 — Web: Scroll position is wrong when entering a permalink view with loaded messages > 120"
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
id: 2759189
key: MM-T25
created_on: "2019-08-27T23:01:27Z"
last_updated: "2022-09-09T20:25:02Z"
case_hashed: 4f16a814064073b6daa1e6814b1cc3e14e1be70925fc69e1aa42ef3108995946333a32480ee9c29a9f99db26f9fcf52f
steps_hashed: 8bc90f3b38770a29fc4395f5f81b4162d4c7eb1deb5aa3d3ae78fa987c6720e2c095c270b414140ff046298a0fc8e478
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
