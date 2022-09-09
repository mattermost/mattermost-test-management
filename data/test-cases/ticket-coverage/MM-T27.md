---
# (Required) Ensure all values are filled up
name: "MM-17460 — Remove focus trap"
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
id: 2759608
key: MM-T27
folder_path: ticket-coverage
created_on: "2019-08-28T02:06:28Z"
last_updated: ""
case_hashed: 3b0154a8b4cb3eeab590e12ff40105a327567ffa5640d54199e90900aba5d9240df26f1f5e0927cff7563d418d65e283
steps_hashed: 55f60d3463c54f339025f44cec7c8bf0cd6e31abe6730f7a89b444cb3b5dec115244d0816ddc44c401410bc04f9eb667
---

## MM-T27: MM-17460 — Remove focus trap

---

**Step 1**

1. Open Mattermost on a web browser
2. Use the Tab ⇥ key to navigate

**Expected**

- The menu can be closed using escape
- Once the tab moves to another element after the end of the menu, the menu closes automatically

**Related bug**: [MM-17460](https://mattermost.atlassian.net/browse/MM-17460)
