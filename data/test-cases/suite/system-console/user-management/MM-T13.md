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
case_hashed: f126fe87e4d94c2cd3d32a10efd6ecccbad1a62b47764a2c7b8c846e879585c145e404051e8f9451a0ca8868bb751cc4
steps_hashed: a39fabddcb7887c189156f8d552940611750c152a95b5f471ca87c338e0a5bbf4bc0dae21dc305bc052ccfa3d7229740
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

![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566866937276-2019-08-26_20-48-35.png)

**Expected**

- The option to change your email address should **not** be present
