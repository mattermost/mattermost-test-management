---
# (Required) Ensure all values are filled up
name: "Verify User can create a scheduled message from the Drafts Page"
status: Active
priority: Normal
folder: Schedule Messages
authors: "@yasserfaraazkhan"
team_ownership:
- ICU
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

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

### Scenario 1: Able to add schedule to the Draft message.

Steps:

1. Log into User's account.
2. Type a message in the DM/GM/Channel post text box to create a Draft message.
3. Go to Drafts page.
4. Verify the Draft is created and has channel name and date of creation.
5. Hover on the Draft.
6. Click on the Schedule icon.
7. Verify a modal to select Date and time appears.
8. Select a Future date and click on `Schedule` button.
9. Verify the message is not seen under Drafts tab.
10. Go to Scheduled tab.
11. Verify the Scheduled message appears on the top.
12. Go to the DM/GM/Channel where the draft was created.
13. Verify the message post is not typed in the text box.
