---
# (Required) Ensure all values are filled up
name: "MM-17441 — Cannot toggle between Safari windows on macOS using (command + `)"
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
manual_test_environments: 
- Desktop - macOS

# (Optional)
component: null
priority_p1_to_p4: null
location: Ticket coverage
tags: []
labels: []

# Do not change
id: 2761126
key: MM-T32
folder_path: ticket-coverage
created_on: "2019-08-28T11:36:30Z"
last_updated: ""
case_hashed: 22df9c1b71549f8a716925bc8120236e8bfef5fecfe367412d0076b363e4bed16ff69c91b6ed1e67358d3f7cc147d938
steps_hashed: e276112ab36378227f2184d52ce7b9fb880d8987c7fa6638163c777ef88ecb41e1e90dc0a2735da320b5966a72ea2e2d
---

## MM-T32: MM-17441 — Cannot toggle between Safari windows on macOS using (command + `)

---

**Step 1**

1. Login to a Mattermost server on Safari
2. Create a new, separate — i.e., not tabbed — Safari window with any site
3.  With the webapp window in focus, hit ⌘\~ (Command+backtick/tilde)

**Expected**

- This should toggle back and forth between open, _separate_ Safari windows

**Related bug**: [MM-17441](https://mattermost.atlassian.net/browse/MM-17441)
