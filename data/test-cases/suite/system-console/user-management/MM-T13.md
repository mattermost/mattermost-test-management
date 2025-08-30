---
# (Required) Ensure all values are filled up
name: 'Option should be hidden to update own email via System Console'
status: Active
priority: Normal
folder: User Management
authors: ''
team_ownership:
  - Channels
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: System Console
component: null
tags: []
labels:
  - se-prod
  - system-console
  - fix-versions-not-empty-2022cleanup
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: To Do
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: 2746634
key: MM-T13
created_on: '2019-08-27T00:41:48Z'
last_updated: ''
case_hashed: 15eba8b018b7b42b3dc50d5329da942c120c3ad0bef6ad617d6e3843d5d0c6981b9c6deb70223e8d3de58e10278c4c61
steps_hashed: e9cc57ec7cad653894eb12044bdbc79c43c998634b0dde1e6d7ce68b52cf2cc191f306287fd37ede56044993d341c081
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T13: Option should be hidden to update own email via System Console

---

**Step 1**

Option should be hidden to update own email via System Console\
–––––––––––––––––––––––––

1. Log in as an Admin
2. Navigate to System Console → User Management → Users
3. Locate currently logged in account using search
4. Click "System Admin" to right of name to reveal menu

_Related ticket(s):_

[Unclear error message when attempting to update own email via System Console — MM-16727](https://mattermost.atlassian.net/browse/MM-16727)

**Expected**

- The option to change your email address should **not** be present
