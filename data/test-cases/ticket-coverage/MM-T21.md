---
# (Required) Ensure all values are filled up
name: "MM-17043 — Downgrade errors from the OpenGraph API"
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
id: 2758416
key: MM-T21
folder_path: ticket-coverage
created_on: "2019-08-27T20:07:51Z"
last_updated: ""
case_hashed: ed50a0f91d6e8267ae25d82781b0d8f79cd8a5557816e871579b7ed1464434bbc8e0c6aa136d3d9b3198224507972145
steps_hashed: f69312791904356f6b01e679b5b68a3dd4bae3b49ad4ea27f399832a988a2da3f439faefdc73f71c79cb6c6f80082fdb
---

## MM-T21: MM-17043 — Downgrade errors from the OpenGraph API

---

**Step 1**

**On the RN mobile app**:

1. Make a post containing an invalid or internal URL such as `http\://notarealurlatall.com/index.html`

**On the desktop**:

1. Log in as an admin
2. Navigate to System Console → Reporting → Server Logs

**Expected**

- No errors should be seen in the logs

**Related bug**: [MM-17043](https://mattermost.atlassian.net/browse/MM-17043)
