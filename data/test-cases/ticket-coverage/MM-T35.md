---
# (Required) Ensure all values are filled up
name: "MM-17579 — Stuttery dropdowns in Safari"
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
id: 2763221
key: MM-T35
folder_path: ticket-coverage
created_on: "2019-08-28T16:08:57Z"
last_updated: ""
case_hashed: 3efdf123859779356b15d1ec42ed1f93ef4f72d13f929e44b4d3c3943416942a34e60337b6142eae876543c192b7654f
steps_hashed: e86975ecc7d4bdf849055876317a693fb45e997a798500d0eb24de0fd489209d4d4a79d0f984189918972b1270de1600
---

## MM-T35: MM-17579 — Stuttery dropdowns in Safari

---

**Step 1**

1. Login to <https://rc.test.mattermost.com> using Safari
2. Click on the ☰ menu several times
3. Click on the channel header dropdown several times

**Expected**

- The menus appear without hesitation and are smooth (no jitter)

**Related bug**: [MM-17579](https://mattermost.atlassian.net/browse/MM-17579)
