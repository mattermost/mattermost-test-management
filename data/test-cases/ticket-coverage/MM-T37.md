---
# (Required) Ensure all values are filled up
name: "Unable to type in any other channel after leaving a draft post in preview mode in one channel then switching to another channel"
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
id: 2765097
key: MM-T37
folder_path: ticket-coverage
created_on: "2019-08-28T17:41:42Z"
last_updated: ""
case_hashed: 9c28026ef8e07cd938ec2e41eed48489b205795f009d703d87f1768a8132ae04972d4fce4c912fb0a01b9adc37b15a3e
steps_hashed: 076bc7f4a4afa0874ead7fa65cf295bfe7fe1a9e89a322aab0edb7fb543e15c8fc9458b5a47c786532d132f4a20b450c
---

## MM-T37: Unable to type in any other channel after leaving a draft post in preview mode in one channel then switching to another channel

---

**Step 1**

1. Draft a post in any channel and click on "preview"
2. Switch to another channel

**Expected**

- Able to focus cursor in the text input box and post

**Related bug**: [MM-17360](https://mattermost.atlassian.net/browse/MM-17360)
