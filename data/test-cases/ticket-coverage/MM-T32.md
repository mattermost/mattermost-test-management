---
# (Required) Ensure all values are filled up
name: "MM-17441 — Cannot toggle between Safari windows on macOS using (command + `)"
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
manual_test_environments:
- Desktop - macOS

# Do not change
id: 2761126
key: MM-T32
created_on: "2019-08-28T11:36:30Z"
last_updated: "2022-12-01T21:17:48Z"
case_hashed: 557b774d46963feecd135d9cbfd725d6aaf9db2df08702b048f0186ec2815c948422f9de1a1346045bd0f7c6e73c9696
steps_hashed: ee1267c727223e42f64e224ccb5c69822ef91c92d59a78ae0b7a9c5d7b0bef2ed100267a8c08cc305d966f1e493c057c
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T32: MM-17441 — Cannot toggle between Safari windows on macOS using (command + `)

---

**Step 1**

1. Login to a Mattermost server on Safari
2. Create a new, separate — i.e., not tabbed — Safari window with any site
3. With the webapp window in focus, hit ⌘\~ (Command+backtick/tilde)

**Expected**

- This should toggle back and forth between open, _separate_ Safari windows

**Related bug**: [MM-17441](https://mattermost.atlassian.net/browse/MM-17441)
