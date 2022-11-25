---
# (Required) Ensure all values are filled up
name: "MM-17460 — Remove focus trap"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform
priority_p1_to_p4: null

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
id: 2759608
key: MM-T27
created_on: "2019-08-28T02:06:28Z"
last_updated: ""
case_hashed: 2f2253903c2b808316907b707d33afc64b1f7cddd4a5f2f8c37a13980daf86bcc8e16e4602f8a334266b0ba56fb408ab
steps_hashed: 2790462f52ab07c97736e456695ac79d7a7c533fdd3f0c3065ff18ea803f4d68de1a1fe6a2537bf6bb3ba8876f5923a4
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T27: MM-17460 — Remove focus trap

---

**Step 1**

1. Open Mattermost on a web browser
2. Use the Tab ⇥ key to navigate

**Expected**

- The menu can be closed using escape
- Once the tab moves to another element after the end of the menu, the menu closes automatically

**Related bug**: [MM-17460](https://mattermost.atlassian.net/browse/MM-17460)
