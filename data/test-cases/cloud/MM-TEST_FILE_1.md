---
# (Required) Ensure all values are filled up
name: "Cloud signup"
status: Active
priority: Smoke test
folder: Cloud
authors: ""
team_ownership: 
- Growth
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Cloud
component: null
tags: 
- Never tested
labels: []

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: 
- Cloud

# Do not change
id: 7528518
key: MM-T3411
created_on: "2020-10-19T14:07:26Z"
last_updated: "2022-12-01T21:07:26Z"
case_hashed: ee5a0d9bdb4e89645f52268f5c9e9f50bc5ecd9dd9447e1b2e9e7b1f2fb5366c00999ee6e51a0861130a92a60b3bbf01
steps_hashed: 4fbdc4eeb4cb537bd19a85ffbcd8fa6beb75dcfe6ab469e2cf7e28df9d97a7d311ef874c028591a5005b69bc4680c3f8
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T3411: Cloud signup

---

**Step 1**

1. Go to <https://mattermost.com/cloud-signup/>
2. Fill out and submit the form

_Related ticket(s):_

['Number of End users' field climbs out of control when arrow button clicked — MM-29816](https://mattermost.atlassian.net/browse/MM-29816)

**Expected**

- Form works as expected
- "Welcoe to Mattrmost Cloud" email recived
- All links in email work
- "Create your new workspace now." link brigs you to <https://customers.mattermost.com/cloud/signup?beta_code=mjm7e1pzo4wk0p64clrs> where you first set your work email and password before continuing on to define your workspace UR
