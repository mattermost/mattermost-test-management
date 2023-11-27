---
# (Required) Ensure all values are filled up
name: "Convert a GM to a Private channel with users on same team"
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

1. Login into mattermost mobile.
2. Create a GM channel with users between 2 to 7 from different team.
3. Post a message.
4. From the Channel menu, click on 'Convert to Private Channel'.
5. Verify user can see a pop up, with a heading `Convert to Private Channel` and an alert message `Conversation history will be visible to any channel members`.
6. Verify user can enter a Channel name and Select Team from the dropdown (this dropdown won't appear if the users are in just 1 team).
7. Click on Create a Private Channel.
8. Verify the created channel is a Private channel.
9. Verify the Post is still in the channel after conversion.
