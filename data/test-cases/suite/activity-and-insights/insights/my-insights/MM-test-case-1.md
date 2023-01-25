---
# (Required) Ensure all values are filled up
name: "Insights - My insights - emoji tooltip to Top Reactions"
status: Active
priority: Normal
folder: My Insights
authors: "furqanmlk"
team_ownership: []
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: null
component: null
tags: []
labels: []

# (Optional) Test type and tools
cypress: To Do
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
2. Create **ChannelA**
3. Post a messae in **channelA**
4. Add a emoji in posted message
5. Select **Insight** from LHS
6. Go to **Top reactions**
7. Hover a emoji

**Expected**

7. Emoji name should be displayed in tooltip.
