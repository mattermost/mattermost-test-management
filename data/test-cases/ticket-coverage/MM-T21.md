---
# (Required) Ensure all values are filled up
name: "MM-17043 — Downgrade errors from the OpenGraph API"
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

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: 2758416
key: MM-T21
created_on: "2019-08-27T20:07:51Z"
last_updated: "2022-12-01T21:17:42Z"
case_hashed: 73db7e2cbc8420a8bc3af187117ebb02213e0126bedddb7187e4e432f316d33a5143ce6e0176dec24007b3cd20c96eb4
steps_hashed: e738a95eaf3a6bb322f79b9ac827458734d7b43e12b0b09fc8dc9338571f99f4fc6ba80a7956e799c0df98bdc56245a5
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
