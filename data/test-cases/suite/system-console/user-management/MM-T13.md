---
# (Required) Ensure all values are filled up
name: "Option should be hidden to update own email via System Console"
status: Active
priority: Normal
folder: User Management
authors: ""
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
tested_by_contributor: ""

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
created_on: "2019-08-27T00:41:48Z"
last_updated: ""
case_hashed: 15eba8b018b7b42b3dc50d5329da942c120c3ad0bef6ad617d6e3843d5d0c6981b9c6deb70223e8d3de58e10278c4c61
steps_hashed: 4629b768fe41dfe0b96570eb0f3c49d620c67cb5b67488064ae009720ea98954bce8f40abbd8a765a9fe5f495e59223e
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

**Test Data**

![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566866937276-2019-08-26_20-48-35.png)

**Expected**

- The option to change your email address should **not** be present
