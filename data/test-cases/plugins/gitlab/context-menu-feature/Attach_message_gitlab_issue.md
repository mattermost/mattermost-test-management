---
# (Required) Ensure all values are filled up
name: "Add comment to a gitlab issue from the `Attach to GitLab Issue` option in the context menu on MM."
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

1. Hover cursor over a user message and click on the `message-actions` then select `Attach to GitLab Issue` on MM.
2. In the `Attach Message to GitLab Issue` modal, select the desired Gitlab issue to attach the message and click on `Attach` button on MM.
3. Navigate to the desired issue on the Gitlab.

**Expected**

The message should get added as a comment on the desired issue on Gitlab.