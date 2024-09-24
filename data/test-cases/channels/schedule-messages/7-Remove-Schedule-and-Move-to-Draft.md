---
# (Required) Ensure all values are filled up
name: "Verify User can remove scheduled setting from the Scheduled message"
status: Active
priority: Normal
folder: Schedule Messages
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

### Scenario 1: Able to add schedule to the Draft message.

Steps:

1. Log into User's account.
2. Goto Scheduled tab.
3. Verify the Draft is created and has channel name and date of creation.
4. Hover on the Draft.
5. Click on the Schedule icon.
6. Verify a modal to select Date and time appears.
7. Select a Future date and click on `Schedule` button.
8. Verify the message is not seen under Drafts tab.
9. Goto Scheduled tab.
10. Verify the Scheduled message appears on the top.
11. GOto the DM/GM/Channel where the draft was created.
12. Verify the message post is not typed in the text box.
