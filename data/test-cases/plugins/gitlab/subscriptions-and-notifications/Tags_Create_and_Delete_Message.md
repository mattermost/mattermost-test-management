---
# (Required) Ensure all values are filled up
name: "Tag Create and Delete Subscription Message"
status: Draft
priority: Normal
folder: Subscriptions and Notifications
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

1. Setup `gitlab` plugin and connect to the user.
2. Create a `subscription` for a `gitlab` repository.
3. Create a new `tag` in the subscribed `gitlab` repository.

**Expected**
1. The user should see a message in the Mattermost subscribed channel when a `tag` is created in the subscribed `gitlab` repository.
2. The user should see the message text as `Tag created by <username>` along with the `tag` name.

**Step 2**

1. Setup `gitlab` plugin and connect to the user.
2. Create a `subscription` for a `gitlab` repository.
3. Delete a `tag` from the subscribed `gitlab` repository.

**Expected**

1. The user should see a message in the Mattermost subscribed channel when a `tag` is deleted in the subscribed `gitlab` repository.
2. The user should see the message text as `Tag deleted by <username>` along with the `tag` name.

**Step 3**

1. Setup `gitlab` plugin and connect to the user.
2. Create a `subscription` for a `gitlab` repository.
3. Create a new `tag` in the subscribed `gitlab` repository.
4. Click on the hyperlinked `tag` name in the `subscription` message in the Mattermost subscribed channel.


**Expected**

1. The user should see the `tag` name displayed as a hyperlink in the `subscription` message in the Mattermost subscribed channel.
2. The user should be redirected to the `tag detail page` in the subscribed `gitlab` repository upon clicking the `tag` name displayed in the `subscription` message.

**Step 4**

1. Setup `gitlab` plugin and connect to the user.
2. Create a `subscription` for a `gitlab` repository.
3. Delete a `tag` from the subscribed `gitlab` repository.
4. Click on the hyperlinked `tag` name in the `subscription` message in the Mattermost subscribed channel.

**Expected**

The user should be redirected to a 404 page upon clicking the `tag` name displayed in the `subscription` message.