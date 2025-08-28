---
# (Required) Ensure all values are filled up
name: "Displaying author name in PR/Issue tooltip"
status: Active
priority: Normal
folder: General
authors: "@arush-vashishtha"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ""

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

1. Connect your GitHub account to Mattermost.
2. Subscribe to a `repository`.
3. Perform different actions on a `PR` in the subscribed `repository` (open, close, reopen, merge).
4. In Mattermost, check the corresponding `PR` notification and hover over the `PR` name to open the `tooltip`.

**Expected**

The author’s name will be displayed in the `tooltip` for all `PR` states and hyperlinked to their GitHub profile.

**Step 2**

1. Connect your GitHub account to Mattermost.
2. Subscribe to a `repository`.
3. Perform different actions on an `Issue` in the subscribed `repository` (open, close, reopen).
4. In Mattermost, check the corresponding `Issue` notification and hover over the `Issue` name to open the `tooltip`.

**Expected**

The author’s name will be displayed in the `tooltip` for all `Issue` states and hyperlinked to their GitHub profile.
