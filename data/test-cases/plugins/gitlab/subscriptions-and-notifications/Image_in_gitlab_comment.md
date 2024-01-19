---
# (Required) Ensure all values are filled up
name: "Image attachment properly shown in the comment notification."
status: Active
priority: Normal
folder: Subscriptions-and-notifications
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

1. Connect your MM account to Gitlab account.
2. In the desired channel or DM/GM create subscriptions for `issue_comments` and `merge_request_comments` by using the slash command `/gitlab subscriptions add <owner>/<repo>` on MM.
3. Navigate to the subscribed repository on Gitlab and add an image in the comments to any desired `issue` or `merge request` on Gitlab.
4. Navigate to the desired channel or DM/GM on MM.

**Step 2**

1. Connect your MM account to Gitlab account.
2. In the desired channel or DM/GM create subscriptions for `issue_comments` and `merge_request_comments` by using the slash command `/gitlab subscriptions add <owner>/<repo>` on MM.
3. Navigate to the subscribed repository on Gitlab and add an embedded image in the comments to any desired `issue` or `merge request` on Gitlab.
4. Navigate to the desired channel or DM/GM on MM.

**Expected**

The comment notification in the desired channel or DM/GM on MM should show the proper image attached to the desired `issue` or `merge request` on Gitlab.
After step 2, the comment notification in the desired channel or DM/GM on MM should show the proper embedded image in the comment on desired `issue` or `merge reuest` on Gitlab.