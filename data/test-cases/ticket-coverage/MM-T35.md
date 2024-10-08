---
# (Required) Ensure all values are filled up
name: "MM-17579 — Stuttery dropdowns in Safari"
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
manual_test_environments: []

# Do not change
id: 2763221
key: MM-T35
created_on: "2019-08-28T16:08:57Z"
last_updated: "2022-12-01T21:17:50Z"
case_hashed: cdafbb137bfe361aca24ff806a42611823ab81bc0b373da5ea5c05257120b4b29180990f9c9803413005ed6b2cb17b18
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
