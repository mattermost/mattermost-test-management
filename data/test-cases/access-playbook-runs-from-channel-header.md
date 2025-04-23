---
# (Required) Ensure all values are filled up
name: "Access Playbook Runs from Channel Header"
status: Active
priority: Normal
folder: Playbooks
authors: @qa-team
team_ownership:
- Mobile
- Playbooks
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

Verify that a user can access the list of playbook runs from the channel header

**Precondition**

User is logged into the Mattermost mobile app and viewing a channel that has associated playbook runs

**Step 1**

Tap the channel header icon button

**Expected**

A list of options is displayed, including an option to view playbook runs

**Step 2**

Tap the option to view playbook runs

**Expected**

The app navigates to a list view showing all the playbook runs associated with the current channel

