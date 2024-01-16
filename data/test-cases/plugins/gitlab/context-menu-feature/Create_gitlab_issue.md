---
# (Required) Ensure all values are filled up
name: "Create a Gitlab issue from the `Create Gitlab Issue` in the context menu on MM."
status: Active
priority: Normal
folder: Context-menu-feature
authors: "@arush-vashishtha"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

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

1. Hover cursor over a user message and click on the `message-actions` then select `Create Gitlab Issue` on MM.
2. In the `Create Gitlab Issue` modal, select and enter the details as per the requiement for the issue and click on `Submit` button on MM.
3. Navigate to the issues in the selected project on Gitlab.

**Step 2**

1. Hover cursor over a user message and click on the `message-actions` then select `Create Gitlab Issue` on MM.
2. In the `Create Gitlab Issue` modal, select and enter the details as per the requiement for the issue and then remove the selected project in the modal on MM.

**Expected**

The issue should be created for the selected project on Gitlab.
After step 2, the dropdown menu for additional options should get hidden upon removing the project.