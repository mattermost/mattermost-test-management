---
# (Required) Ensure all values are filled up
name: "MM-17579 — Stuttery dropdowns in Safari"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform

# (Optional)
priority_p1_to_p4: null
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
id: 2763221
key: MM-T35
created_on: "2019-08-28T16:08:57Z"
last_updated: ""
case_hashed: 8f0571c004bf8e5c6170f5a9f08393680a4406e11df7e1baaaecdd86470c84319435729056c4dfd2cc85aac434cc385d
steps_hashed: e86975ecc7d4bdf849055876317a693fb45e997a798500d0eb24de0fd489209d4d4a79d0f984189918972b1270de1600
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T35: MM-17579 — Stuttery dropdowns in Safari

---

**Step 1**

1. Login to <https://rc.test.mattermost.com> using Safari
2. Click on the ☰ menu several times
3. Click on the channel header dropdown several times

**Expected**

- The menus appear without hesitation and are smooth (no jitter)

**Related bug**: [MM-17579](https://mattermost.atlassian.net/browse/MM-17579)
