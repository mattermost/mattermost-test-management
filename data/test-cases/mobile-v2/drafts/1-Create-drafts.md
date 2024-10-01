---
# (Required) Ensure all values are filled up
name: "Create drafts on mobile app"
status: Active
priority: Normal
folder: Drafts
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: N/A
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

### Scenario 1: Able to create a draft on mobile

Steps:

1. Log into user's account on a Mobile device.
2. Verify there is no Draft option seen in the channel list screen.
3. Go to any DM/GM/Channel and type a message (with or without attachments) but dont send it.
4. Navigate back to the channel list.
5. Verify the draft option is shown. Click on Drafts.
6. Verify the typed message is shown.
7. Verify the Draft message has information of `To:` DM/GM/Channel.
8. Verify the attachments are visible.
9. Click on the Message.
10. Verify if the user is taken to the DM/GM/Channel where the draft message was first typed.

### Scenario 2: Able to create draft messages on multiple server

1. Add multiple serves to the mobile app. Example: Server 1 and Server 2.
2. Log into Server 1 and create draft messages on that server.
3. Log into Server 2 and create draft messages on that server.
4. Delete Server 2 configuration.
5. Verify in Server 1 has the same relevant drafts created on it.

### Scenario 3: Able to create draft when app is offline

1. On the mobile device, Turn the Internet connection off.
2. Create drafts in any Channel/DM.
3. Click on Drafts link from channel list screen.
4. Verify the Draft message is visible.
