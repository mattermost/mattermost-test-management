---
# (Required) Ensure all values are filled up
name: 'Author name display in Draft Pull Request to ready to review subscription'
status: Active
priority: Normal
folder: Notifications
authors: '@arush-vashishtha'
team_ownership: []
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

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

1. Connect two separate `GitHub` accounts, referred to as User A and User B, to Mattermost.
2. Create a subscription for a `GitHub` repository that is accessible to both users in any channel or DM or GM.
3. Using User B, create a new `Pull Request` in the subscribed repository and mark it as `Draft`.
4. Using User A, change the state of the same `Pull Request` from `Draft` to `Ready for review`.

**Expected**

The subscription message should display `#new-pull-request by User B` as the author of the `Pull Request`. The user who moved the Pull Request i.e. User A, should not be displayed as the author.

**Step 2**

1. Connect a single `GitHub` account to Mattermost.
2. Create a subscription for a `GitHub` repository that is accessible to the user in any channel or DM or GM
3. Create a new `Pull Request` in the subscribed repository and mark it as `Draft`.
4. Change the state of the same `Pull Request` from `Draft` to `Ready for review`.

**Expected**

The subscription message should display `#new-pull-request` by User as the author of the `Pull Request`.

