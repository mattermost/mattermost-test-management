---
# (Required) Ensure all values are filled up
name: 'Verifying Attach to GitHub Issue functionality with and without organisational lock'
status: Active
priority: Normal
folder: Create and Attach posts
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
id: 
key: 
created_on: 
last_updated: 
case_hashed: 
steps_hashed: 
---



**Step 1**

1. Connect a `GitHub` account to Mattermost.
2. Ensure the plugin is not locked to any `organisation`.
3. Create a new Mattermost post.
4. Select the message action on the post you want to attach.
5. Click `Attach to GitHub Issue`.
6. In the Attach message to `GitHub Issue pop-up`, select a `GitHub Issue` field.

**Expected**

A dropdown of all relevant `GitHub Issues` involving the user should be visible in the Attach message to `GitHub Issue pop-up`.

**Step 2**

1. Connect a `GitHub` account to Mattermost.
2. Set the plugin to be locked to a specific `organisation`.
3. Create a new Mattermost post.
4. Select the message action on the post you want to attach.
5. Click `Attach to GitHub Issue`.
6. In the Attach message to `GitHub Issue pop-up`, select a `GitHub Issue` field.

**Expected**

A dropdown of `GitHub Issues` within the locked `organisation` should be visible in the Attach message to `GitHub Issue pop-up`.

**Step 3**

1. Connect a `GitHub` account to Mattermost.
2. Set the plugin to be locked to multiple organisations.
3. Create a new Mattermost post.
4. Select the message action on the post you want to attach.
5. Click `Attach to GitHub Issue`.
6. In the Attach message to `GitHub Issue pop-up`, check the dropdown of available `GitHub Issue` field.

**Expected**

A dropdown of `GitHub Issues` from all locked organisations should be visible. Issues outside the locked organisations should not appear.