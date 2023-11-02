---
# (Required) Ensure all values are filled up
name: "System cossole user list shows that deactivate option is not available for LDAP users"
status: Active
priority: Normal
folder: AD LDAP
authors: "@DHaussermann"
team_ownership: 
- Suite Users
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

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

1. Login as an Admin and locate a user that is managed by LDAP
2. In the system console navigate to _Users_ and loacyte the user on the list
3. Select the _Member_ drop down

**Expected**

The Deactivate option is greyed out and there is text velow explaining that the user is "Managed by LDAP"
