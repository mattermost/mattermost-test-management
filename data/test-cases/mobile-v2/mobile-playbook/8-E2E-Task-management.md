---
# (Required) Ensure all values are filled up
name: "E2E- Task Management - User should be able to update assigned tasks"
status: Active
priority: Normal
folder: Mobile Playbook
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
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

Prerequisites:

- Create few Playbook in a channel from Web/Desktop

Steps:

1. On Mobile app, open the channel.
2. Verify the Playbook Run appears on the Channel header.
3. Click on the Icon.
4. Verify the Playbook runs page opens.
5. Click on Playbook option.
6. Verify the `In progress` and `Finished` tabs are displayed.
7. Expand an `In progress` playbook.
8. Check off all the task status indicators.
9. Verify if Run is finished and the Playbook moves from In progress tab to Finished.
