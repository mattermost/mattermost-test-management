---
# (Required) Ensure all values are filled up
name: "Ability to accept pasting multiple email addresses into the invite modal"
status: Active
priority: Normal
folder: Team Settings
authors: "furqanmlk"
team_ownership: 
- Channels
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Team Settings
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

1. Login as **sysadmin**
2. Create **User A** and **userB**
3. Create **TeamA**
4. Write down the Email addresses of **User A**, **userB** and **sysadmin** in any text document

- (Example: user-a@example.com,user-b@example.com OR user-a@example.com user-b@example.com OR user-a@example.com;user-b@example.com)

5. Go to **Invite Members** or **Invite People** model
6. Paste Email addresses from step no:4
7. Click **Invite**
8. Click **Done**

**Expected**

7. Message should be shown for **User A** and **User B**, **This member has been added to the Team.**
8. Message should be shown for **sysadmin**, **This person is already a team member**.
9. **User A** and **User B** should be added in **Team A**
