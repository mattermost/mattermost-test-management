---
# (Required) Ensure all values are filled up
name: "RHS shows subscription data"
status: Active
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

1. Connect GitLab account with Mattermost.
2. Subscribe to a repository using /gitlab subscriptions add my-group/my-proj issues,merges,label:"Label 1".
3. Create an Issue in GitLab with Label 1.
4. Create a Merge Request in GitLab with Label 1.

**Expected**

Notification should appear in Mattermost for both the Issue and the Merge Request containing Label 1.

**Step 2**

1. Connect GitLab account with Mattermost.
2. Subscribe to a repository using /gitlab subscriptions add my-group/my-proj issues,merges,label:"Label 1",label:"Label 2".
3. Create an Issue in GitLab with Label 1.
4. Create a Merge Request in GitLab with Label 2.

**Expected**

Notification should appear in Mattermost for the Issue with Label 1 and the Merge Request with Label 2.

**Step 3**

1. Connect GitLab account with Mattermost.
2. Subscribe to a repository using /gitlab subscriptions add my-group/my-proj issues,merges,label:"Label 1",label:"Label 2".
3. Create an Issue in GitLab with Label 1 only.
4. Create a Merge Request in GitLab with Label 1 only.

**Expected**

Notification should appear in Mattermost because at least one matching label (Label 1) is present.

**Step 4**

1. Connect GitLab account with Mattermost.
2. Subscribe to a repository using /gitlab subscriptions add my-group/my-proj issues,merges,label:"Label 1",label:"Label 2".
3. Create an Issue in GitLab with Label 1 and an additional Unsubscribed Label.
4. Create a Merge Request in GitLab with Label 2 and an additional Unsubscribed Label.

**Expected**

Notification should appear in Mattermost for both the Issue and the Merge Request, since at least one matching subscribed label (Label 1 or Label 2) is present, even if other unsubscribed labels are included.