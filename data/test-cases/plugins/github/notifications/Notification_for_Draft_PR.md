---
# (Required) Ensure all values are filled up
name: "Getting notifications on MM for draft Pull Requests from GitHub"
status: Active
priority: Normal
folder: Notifications
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

1. Connect your Mattermost account to your GitHub account and create a subscription for pulls in any channel.
2. Keep the setting for draft PR notifications disabled.
3. Create a draft Pull Request from GitHub in the connected repository.
4. Check the Mattermost channel where subscription is created.


**Expected**

The user should not receive any notification in Mattermost when a draft Pull Request is created.


**Step 2**

1. Connect your Mattermost account to your GitHub account and create a subscription for pulls in any channel.
2. Keep the setting for draft PR notifications disabled.
3. Create a normal Pull Request (not draft) in the connected repository.
4. Check the Mattermost channel where subscription is created.


**Expected**

The user should get a complete notification in Mattermost with details about the Pull Request.

**Step 3**

1. Connect your Mattermost account to your GitHub account and create a subscription for pulls in any channel.
2. Enable the setting for draft PR notifications.
3. Create a draft Pull Request in the connected repository.
4. Check the Mattermost channel where subscription is created.


**Expected**

The user should get a notification in Mattermost with limited details for the draft Pull Request.

**Step 4**

1. Connect your Mattermost account to your GitHub account and create a subscription for pulls in any channel.
2. Enable the setting for draft PR notifications.
3. Change the draft Pull Request to "Ready for Review" in the connected repository.
4. Check the Mattermost channel where subscription is created.


**Expected**

The user should get a complete notification in Mattermost with all details when the draft Pull Request is marked as ready for review.

**Step 5**

1. Connect your Mattermost account to your GitHub account and create a subscription for pulls in any channel.
2. Enable the setting for draft PR notifications.
3. Create a normal Pull Request (not draft) in the connected repository.
4. Check the Mattermost channel where subscription is created.


**Expected**

The user should get a complete notification in Mattermost with all details for the normal Pull Request.