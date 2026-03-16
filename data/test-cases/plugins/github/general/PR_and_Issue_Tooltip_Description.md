---
# (Required) Ensure all values are filled up
name: 'PR and Issue tooltip description'
status: Active
priority: Normal
folder: General
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

1. Connect your `GitHub` account with Mattermost.
2. Subscribe to a `GitHub` repository in any channel, DM or GM .
3. Create a `PR` in the subscribed repository with a description.
4. Hover over the `PR` link in the subscribed channel, DM or GM.

**Expected**

The `tooltip` should display the full `PR` description exactly as entered.

**Step 2**

1. Connect your `GitHub` account with Mattermost.
2. Subscribe to a `GitHub` repository in any channel, DM or GM .
3. Create an `Issue` in the subscribed repository with a description.
4. Hover over the `Issue` link in the subscribed channel, DM or GM.

**Expected**

The `tooltip` should display the full `Issue` description exactly as entered.

**Step 3**

1. Connect your `GitHub` account with Mattermost.
2. Subscribe to a `GitHub` repository in any channel, DM or GM .
3. Create a `PR` in the subscribed repository with a description.
4. Hover over the `PR` link in the subscribed channel, DM or GM.

**Expected**

The `tooltip` should not display the `See more` link.

**Step 4**

1. Connect your `GitHub` account with Mattermost.
2. Subscribe to a `GitHub` repository in any channel, DM or GM .
3. Create an `Issue` in the subscribed repository with a description.
4. Hover over the `Issue` link in the subscribed channel, DM or GM.

**Expected**

The `tooltip` should not display the `See more` link.

**Step 5**

1. Connect your `GitHub` account with Mattermost.
2. Subscribe to a `GitHub` repository in any channel, DM or GM .
3. Create a `PR` in the subscribed repository with a very long description.
4. Hover over the `PR` link in the subscribed channel, DM or GM.

**Expected**

The `tooltip` should trim the `PR` description and should not display the `See more` link.

**Step 6**

1. Connect your `GitHub` account with Mattermost.
2. Subscribe to a `GitHub` repository in any channel, DM or GM .
3. Create an `Issue` in the subscribed repository with a very long description.
4. Hover over the `Issue` link in the subscribed channel, DM or GM.

**Expected**

The `tooltip` should trim the `Issue` description and should not display the `See more` link.

**Step 7**

1. Connect your `GitHub` account with Mattermost.
2. Subscribe to a `GitHub` repository in any channel, DM, or GM.
3. Create a `PR` in the subscribed repository with a description.
4. Verify that hovering over the `PR` link in the subscribed channel, DM, or GM shows the description.
5. Update the `PR` description in the `GitHub` repository.
6. Return to the subscribed channel and hover over the same `PR` link again.

**Expected**

The tooltip should now display the updated `PR` description, reflecting the latest changes made on `GitHub`. The previous description should no longer appear.

**Step 7**

1. Connect your `GitHub` account with Mattermost.
2. Subscribe to a `GitHub` repository in any channel, DM, or GM.
3. Create an `Issue` in the subscribed repository with an initial description.
4. Verify that hovering over the `Issue` link in the subscribed channel, DM, or GM shows the description.
5. Update the `Issue` description in the `GitHub` repository.
6. Return to the subscribed channel and hover over the same `Issue` link again.

**Expected**

The tooltip should display the updated `Issue` description, reflecting the latest changes made on `GitHub`. The previous description should no longer be shown.