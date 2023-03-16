---
# (Required) Ensure all values are filled up
name: "Should discard any changes made after cancelling the edit and opening the edit textbox again should display the original message"
status: Active
priority: Normal
folder: Messaging
authors: "@collinewait"
team_ownership:
- Channels
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Messaging
component: null
tags: []
labels: []

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

<https://mattermost.atlassian.net/browse/MM-50746>

1. Post a message in a channel
2. Hit 'arrow-up' to open the edit box
3. Edit the message
4. Press ESC to cancel the edit
5. Hit 'arrow-up' again to open the edit box

**Expected**

After step 5 verify the following

- The edit box should open with the original message
