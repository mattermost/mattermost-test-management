---
# (Required) Ensure all values are filled up
name: "Verify UI Usability on Tablets"
status: Active
priority: Normal
folder: Manual/Mobile
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
manual_test_environments: ["Mobile"]

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**This is a manual test case**

Verify that the Playbooks UI is usable and optimized for tablet screens

**Precondition**

The app is installed on a tablet device

**Step 1**

Open the app and navigate to a channel with Playbook runs

**Expected**

The UI layout takes advantage of the larger screen size

**Step 2**

Access the runs list and tap a run

**Expected**

The runs list and run details screens are easy to use on the tablet

**Step 3**

Attempt to check/uncheck tasks and navigate the run details

**Expected**

The run details screen is usable and interactive elements are appropriately sized for touch

