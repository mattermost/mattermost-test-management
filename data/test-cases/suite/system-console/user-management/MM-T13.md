---
# (Required) Ensure all values are filled up
name: "Option should be hidden to update own email via System Console"
status: Active
priority: Normal
folder: User Management
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: To Do
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# (Optional)
component: null
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: System Console
tags: []
labels: 
- se-prod
- system-console
- fix-versions-not-empty-2022cleanup

# Do not change
id: 2746634
key: MM-T13
folder_path: suite/system-console/user-management
created_on: "2019-08-27T00:41:48Z"
last_updated: ""
case_hashed: 02d6f2736dae5549a9bca0c7ec47bcdd5fd42e4910dbe451b39e22a24d8414bfca3ac0ec317c03f98b3d7a82cd8eba42
steps_hashed: f5df524094cce484233af604a609ea370ab57c3cbc594db26cd247f00f86ebfb2eebec7ddf71155c280529fb4b8b6b92
---

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
