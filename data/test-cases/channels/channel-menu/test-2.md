---
# (Required) Ensure all values are filled up
name: "Throw Error when Converting a GM to Private channel with users from different teams"
status: Active
priority: Normal
folder: Channel menu
authors: "@yasserfaraazkhan"
team_ownership: []
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

1. Login into mattermost.
2. Create 2 teams and have users assigned to them.
3. Create a GM channel with users between 2 to 7, and they should be from different team.
4. From the Channel menu, click on 'Convert to Private Channel'.
5. Verify User can see a pop up, with a heading `Convert to Private Channe` and an alert message `Unable to convert to a channel because group members are part of different teams`.

![Alt text](data/asset/Error_converting_GM.png)
