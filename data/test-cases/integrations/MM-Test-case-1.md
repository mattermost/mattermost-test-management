---
# (Required) Ensure all values are filled up
name: " Multiple users/channels in invite slash command"
status: Active
priority: Low
folder: Integrations
authors: "furqanmlk"
team_ownership: []
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Integrations
component: null
tags: []
labels: []

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments:
- Desktop
- Webapp

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
2. Create **channelA** **channelB** **channelC** **channelD** and **user-A** **user-B** **user-C**
3. Go to **channelA**
4. Type /invite **@user-A** **@user-B**
5. Type /invite **@user-C** **~channelB**
6. Type /invite **@user-A** **user-B** **user-C** **~channelC** **~chanmelD**

**Expected**

5. **user-A** and **user-B** should be added in **channelB**
6. **user-C** should be added in **channelB**
7. **user-A** **user-B** **user-C** should be added in **channelC** **chanmelD**
