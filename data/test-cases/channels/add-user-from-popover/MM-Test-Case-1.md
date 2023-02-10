---
# (Required) Ensure all values are filled up
name: "Profile Popover UI"
status: Active
priority: Normal
folder: Add user from popover
authors: "furqanmlk"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location:  Add user to channel from popover
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
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

1. login as **sysadmin**
2. Create **User A** and DM
3. Click **User A** name to launch the profile popover

**Expected**

3. Following elements should be visible.

- Member Role
- Close icon (x)
- Avatar
- Status
- Last online
- Display Name
- Username
- Title
- Profile Attributes
- Local Time
- Custom Status
- Message Button
- Mention User
- Add to a Channel
