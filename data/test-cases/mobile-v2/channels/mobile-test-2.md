---
# (Required) Ensure all values are filled up
name: "Verify Error message is displayed while Converting a GM with users on from different teams to a Private channel"
status: Active
priority: Normal
folder: Channels
authors: "@yasserfaraazkhan"
team_ownership: 
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

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
2. Create a GM channel with users between 2 to 7 from different teams.
3. Post a message.
4. From the Channel menu, click on 'Convert to Private Channel'.
5. Verify user can see a pop up, with a heading `Convert to Private Channel`.
6. Verify an alert message `Unable to convert to a channel because group mmebers are part of different teams`.
7. Verify `Back` button is displayed to go back to group message screen.
