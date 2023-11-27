---
# (Required) Ensure all values are filled up
name: "Verify opening GM notification after GM is converted to channel by other user"
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

Test Setup:

- Have 2 user account to use. eg: User A and User B.
- Login into mobile app with User B.
- Login into Webapp with User A and create a GM with User B.
- Trigger a mobile notification for User B and verify the app opens up the GM channel.
- With GM channel opened close the app.
- Convert the GM channel from Web app.

Steps:

1. On the mobile.
2. Click on the notification received.
3. Verify user is taken to the newly converted channel directly without any crashes and errors.
