---
# (Required) Ensure all values are filled up
name: "When on preview mode, it does not allow to submit a post from the main post input"
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
id: 2759570
key: MM-T26
folder_path: ticket-coverage
created_on: "2019-08-28T01:56:36Z"
last_updated: ""
case_hashed: 1bd86111e641463851280adc6d9853f3fea2e3ec895e01d7cdd4997b1cc2d0b7b3f18abacbc8f52d558b62651c700099
steps_hashed: 81efb0ab573da544984896445e84a4f95403bf8800173f1ddda4727a6ff1cd5c897cb76f5e54e1a636f31865e9901d52
---

## MM-T26: When on preview mode, it does not allow to submit a post from the main post input

---

**Step 1**

Enter some text in the Center panel and click on the Preview button

**Expected**

Able to send/post new comment in center channel using Enter button

---

**Step 2**

Enter some text on the RHS and click Preview

**Expected**

- Able to send/post by using Enter or by clicking ‘Add Comment’ button

**Related bug**: [MM-17361](https://mattermost.atlassian.net/browse/MM-17361)
