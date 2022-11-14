---
# (Required) Ensure all values are filled up
name: "Ability to tell when someone was last active"
status: Active
priority: Normal
folder: channels/add-user-from-popover
authors: "@Furqan Malik"
team_ownership: 
- Suite Users

# (Optional)
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Add user from popover
component: null
tags: []
labels: 

# (Optional) Test type and tools
cypress: To Do
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Webapp

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

## Ability to tell when someone was last active

**Objective**
Based on customer feedback, add a 'Last active' status in a few key places to see when users were last online. This status would only display for users who are Away, Offline or DND.
---

**Step 1**

1. Login as **SysAdmin**
2. Add **UserA** 
3. Logout **SysAdmin**L
5. Login as **UserA** 
6. DM to **SysAdmin**  
7. Click Profile Popover of **SysAdmin** 
8. Observe Last Active status
9. Observr DM Header

**Expected**
Following are the expected results of step 8 and steps 9
Show 'Offline', If less than 1 minute
Show 'Active [N] min(s) ago', if >= 1 minute and < 60 minutes
'Active [N] hr(s) ago', if >= 1 hour and < 24 hrs
'Active yesterday', if >= 24 hrs and < 48 hrs
'Active [Friday]', if >=48 hrs and < 7 days
'Active [August 10]', if >= 7 days
