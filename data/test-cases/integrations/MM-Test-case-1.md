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
2. Create **channelA** **channelB** **channelC** **channelD** and **userA** **userB** **userC**
3. Go to **channelA**
4. Type /invite **@userA** **@userB**
5. Type /invite **@userC** **~channelB**
6. Type /invite **@userA** **u@serB** **@serC** **~channelC** **~chanmelD**

**Expected**

5. **userA** and **userB** should be added in **channelB**
6. **userC** should be added in **channelB**
7. **userA** **userB** **userC** should be added in **channelC** **chanmelD**
