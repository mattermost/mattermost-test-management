---
# (Required) Ensure all values are filled up
name: 'Validating atomic safety in GitHub subscription operations'
status: Draft
priority: Normal
folder: Subscriptions
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

1. Connect a `GitHub` account to Mattermost.
2. Create a subscription of a `GitHub` repository by running `/github subscriptions add owner/repo` in any channel, DM or GM.

**Expected**

TThe subscription should be created successfully, and a confirmation message should be displayed in the subscribed channel, DM or GM. No errors or panics should appear in the server logs.

**Step 2**

1. Connect a `GitHub` account to Mattermost.
2. Create a subscription of a `GitHub` repository by running `/github subscriptions add owner/repo` in any channel, DM or GM.
3. From the subscribed `GitHub` repository, create a new `Issue`.

**Expected**

A notification for the newly created `Issue` should appear in the subscribed channel, DM or GM. No errors or panics should appear in the server logs.

**Step 3**

1. Connect a `GitHub` account to Mattermost.
2. Create a subscription of a `GitHub` repository by running `/github subscriptions add owner/repo` in any channel, DM or GM.
3. From the subscribed `GitHub` repository, reopen the `Issue`, then close the `Issue`, and then add a comment to the `Issue`.

**Expected**

Notifications for reopening, closing, and commenting on the `Issue` should appear in the subscribed channel, DM or GM. No errors or panics should appear in the server logs.

**Step 4**

1. Connect a `GitHub` account to Mattermost.
2. Create a subscription of a `GitHub` repository by running `/github subscriptions add owner/repo` in any channel, DM or GM.
3. From the subscribed `GitHub` repository, create a new `Pull Request`.

**Expected**

A notification for the newly created `Pull Request` should appear in the subscribed channel, DM or GM. No errors or panics should appear in the server logs.

**Step 5**

1. Connect a `GitHub` account to Mattermost.
2. Create a subscription of a `GitHub` repository by running `/github subscriptions add owner/repo` in any channel, DM or GM.
3. From the subscribed `GitHub` repository, reopen the `Pull Request`, then close the `Pull Request`, merge the `Pull Request`, and then add a comment to the `Pull Request`.

**Expected**

Notifications for reopening, closing, merging, and commenting on the P`ull Request` should appear in the subscribed channel, DM or GM. No errors or panics should appear in the server logs.

**Step 6**

1. Connect a `GitHub` account to Mattermost.
2. Create a subscription of a `GitHub` repository by running `/github subscriptions add owner/repo` in any channel, DM or GM.
3. Delete the subscription by running `/github subscriptions delete owner/repo`.

**Expected**

The subscription should be deleted successfully, and a confirmation message should be displayed in the subscribed channel, DM or GM. No errors or panics should appear in the server logs.

**Step 7**

1. Connect a `GitHub` account to Mattermost.
2. In any channel, DM or GM, repeatedly create and delete a subscription by running `/github subscriptions add owner/repo` followed by `/github subscriptions delete owner/repo`.

**Expected**

All subscription operations should complete successfully each time, and confirmation messages should be displayed in the subscribed channel, DM or GM. No errors or panics should appear in the server logs.

**Step 8**

1. Connect a `GitHub` account to Mattermost.
2. In any channel, DM or GM, run the command `/github subscriptions list`.

**Expected**

The list of active subscriptions should be displayed correctly in the subscribed channel, DM or GM. No errors or panics should appear in the server logs.