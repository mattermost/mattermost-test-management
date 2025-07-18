---
# (Required) Ensure all values are filled up
name: "[E2E] Accessing Playbook via Channel"
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

- Start a few Playbook runs in a channel from Web/Desktop

Steps:

1. On Mobile app, open the channel
2. Verify the Playbook Run appears on the Channel header
3. Click on the Icon
4. Verify the Playbook runs page opens

**Step 2**

Test accessing runs via channel info menu

Steps:

1. Click on channel header to open Channel info screen
2. Verify `Playbook runs` option is displayed.
3. Verify Number of runs is displayed.
4. Click on the Playbook option.
5. Verify the Playbook runs page opens
