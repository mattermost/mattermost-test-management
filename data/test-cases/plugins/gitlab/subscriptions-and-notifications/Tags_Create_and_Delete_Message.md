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

1. Setup GitLab plugin and connect to the user.
2. Create a `subscription` for a GitLab repository.
3. Create a new `tag` in the subscribed GitLab repository.

**Expected**
User should see a message in the Mattermost channel when a `tag` is created in the subscribed GitLab repository, displaying `Tag created by <username>` along with the `tag` name.

**Step 2**

1. Setup GitLab plugin and connect to the user.
2. Create a `subscription` for a GitLab repository.
3. Delete a `tag` from the subscribed GitLab repository.

**Expected**

User should see a message in the Mattermost channel when a `tag` is deleted in the subscribed GitLab repository, displaying `Tag deleted by <username>` along with the `tag` name.

**Step 3**

1. Setup GitLab plugin and connect to the user.
2. Create a `subscription` for a GitLab repository.
3. Create a new `tag` in the subscribed GitLab repository.
4. Click on the hyperlinked `tag` name in the `subscription` message in the Mattermost subscribed channel.


**Expected**

For a newly created `tag`, the `tag` name in the subscription message should appear as a hyperlink, and clicking it should redirect the user to the `tag` detail page in the subscribed GitLab repository.