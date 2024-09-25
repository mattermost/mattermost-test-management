---
# (Required) Ensure all values are filled up
name: "Cannot view Drafts created on the Desktop or Browser"
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

### Scenario 1: Not able to see drafts created on the desktop

Steps:

1. Log into user's account on a Desktop app.
2. Go to any DM/GM/Channel and type a message (with or without attachments) but dont send it.
3. Log into user's account on a Mobile device.
4. Verify the draft created on desktop is not visible.

### Scenario 2: Not able to see drafts created on the Browser

Steps:

1. Log into user's account on a Browser.
2. Go to any DM/GM/Channel and type a message but dont send it.
3. Log into user's account on a Mobile device.
4. Verify the draft created on Browser is not visible.

### Scenario 3: Able to scroll through the long list of drafts on the mobile

1. Log into user's account on a mobile device.
2. Go to any DM/GM/Channel and type a message but dont send it.
3. Verify user can scroll to the bottom of the page.
4. Verify there is not screen hang or long loading time.
5. Verify the drafts page shows the attachments added in the draft.
