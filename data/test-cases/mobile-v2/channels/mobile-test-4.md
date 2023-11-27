---
# (Required) Ensure all values are filled up
name: "Verify Error message is shown when user opens GM notification after GM is converted to channel and the user is removed"
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
- Remove the mobile user from the channel

Steps:

1. In the mobile.
2. Click on the notification received.
3. Verify user is taken to Error screen showing `The channel you're requesting is private or does not exist.`
