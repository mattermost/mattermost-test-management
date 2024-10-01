---
# (Required) Ensure all values are filled up
name: "Delete drafts on mobile app"
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

Test Set-up:

1. Have some drafts already created on mobile.

### Scenario 1: Able to delete drafts on mobile app.

1. Log into user's account on a Mobile device.
2. Go to drafts page.
3. Hold on a draft and swipe left to see Delete option.
4. Verify a confirmation pop-up is shown to the user with title "Delete message".
5. Click on Delete option.
6. Verify the draft is delete from the draft page.
7. Go to the DM/GM/Channel where the draft was created.
8. Verify the post textbox does not have the draft message

### Scenario 2: Verify drafts created on mobile get purged when user deletes the server.

Steps:

1. Delete the server where drafts were created.
2. Log in the same server using the same user account.
3. Verify the Drafts page is empty.
