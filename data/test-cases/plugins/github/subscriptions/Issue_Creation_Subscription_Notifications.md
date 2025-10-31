---
# (Required) Ensure all values are filled up
name: 'Issue creations subscription notifications for subscribed labels'
status: Active
priority: Normal
folder: Subscriptions
authors: '@yash-chakerverti'
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

1. Connect your `GitHub` account to Mattermost.
2. Create a subscription in any channel or DM/GM by running `/github subscriptions add owner/repo --features issue_creations,label:"label-name"`
3. Create a new `GitHub Issue` in the subscribed repository with the subscribed label.
4. Navigate to the channel or DM/GM where the subscription is created.

**Expected**

A notification should be posted immediately for the newly created `Issue` with the subscribed label.

**Step 2**

1. Connect your `GitHub` account to Mattermost.
2. Create a subscription in any channel or DM/GM by running `/github subscriptions add owner/repo --features issue_creations,label:"label-name"`
3. Create a new `GitHub Issue` in the subscribed repository with a label different from the subscribed label.
4. Navigate to the channel or DM/GM where the subscription is created.

**Expected**

A notification should not be posted since the `Issue` label does not match the subscribed label.

**Step 3**

1. Connect your `GitHub` account to Mattermost.
2. Create a subscription in any channel or DM/GM by running `/github subscriptions add owner/repo --features issue_creations,label:"label-name"`
3. Create a new `GitHub Issue` in the subscribed repository with no label.
4. Navigate to the channel or DM/GM where the subscription is created.

**Expected**

A notification should not be posted since the `Issue` does not have the subscribed label.

**Step 4**

1. Connect your `GitHub` account to Mattermost.
2. Create a subscription in any channel or DM/GM by running `/github subscriptions add owner/repo --features issue_creations,label:"label-name"`
3. Take an existing `GitHub Issue` in the subscribed repository without the subscribed label.
4. Add the subscribed label to the `Issue`.
5. Navigate to the channel or DM/GM where the subscription is created.

**Expected**

A notification should be posted immediately after adding the subscribed label.

**Step 5**

1. Connect your `GitHub` account to Mattermost.
2. Create a subscription in any channel or DM/GM by running `/github subscriptions add owner/repo --features issue_creations,label:"label-name"`
3. Take an existing `GitHub Issue` in the subscribed repository with a different label.
4. Replace the existing label with the subscribed label.
Navigate to the channel or DM/GM where the subscription is created.

**Expected**

A notification should be posted immediately after replacing the label with the subscribed label.

**Step 6**

1. Connect your `GitHub` account to Mattermost.
2. Create a subscription in any channel or DM/GM by running `/github subscriptions add owner/repo --features issue_creations,label:"label-name"`
3. Take an existing `GitHub Issue` in the subscribed repository with the subscribed label.
4. Reopen the `Issue`.
5. Navigate to the channel or DM/GM where the subscription is created.

**Expected**

A notification should be posted when the `Issue` with the subscribed label is reopened.

**Step 7**

1. Connect your `GitHub` account to Mattermost.
2. Create a subscription in any channel or DM/GM by running `/github subscriptions add owner/repo --features issue_creations,label:"label-name"`
3. Take an existing `GitHub Issue` in the subscribed repository without the subscribed label.
4. Reopen the `Issue`.
5. Navigate to the channel or DM/GM where the subscription is created.


**Expected**

A notification should not be posted when the `Issue` without the subscribed label is reopened.