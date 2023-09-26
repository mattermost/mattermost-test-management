---
# (Required) Ensure all values are filled up
name: "Convert a GM to Private channel with users on same team"
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
2. Create a GM channel with users between 2 to 7 from same team.
3. Post a message.
4. From the Channel menu, click on 'Convert to Private Channel'.
5. Verify User can see a pop up, with a heading `Convert to Private Channe` and an alert message `Conversation history will be visible to any channel members`.
6. Verify User can enter a Channel name and Select Team from the dropdown (this dropdown won't appear if the users are in just 1 team).
7. Click on Create a Private Channel.
8. Verify the created channel is a Private channel.
9. Verify the Post is still in the channel after conversion.
