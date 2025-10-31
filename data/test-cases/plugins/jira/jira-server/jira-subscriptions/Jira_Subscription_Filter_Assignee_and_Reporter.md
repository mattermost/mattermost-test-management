---
# (Required) Ensure all values are filled up
name: "Jira subscription filters for reporter and assignee"
status: Active
priority: Normal
folder: Jira subscriptions
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

---

**Step 1**

1. Setup Jira with Mattermost.
2. In any channel or DM/GM, run the command `/jira subscribe edit`.
3. In the subscription modal, create a subscription.
4. While creating the subscription, click on `Add Filter`.
5. Select `Reporter`, set it to `Include` and choose a specific user from the dropdown.
6. Save the subscription.
7. Create an `Issue` in Jira with the same reporter as chosen in the filter.
8. Create another `Issue` in Jira with a different reporter.

**Expected**

A notification should be received in the channel for the `Issue` created with the reporter included in the filter, and no notification should be received for the `Issue` created with a different reporter.

**Step 2**

1. Setup Jira with Mattermost.
2. In any channel or DM/GM, run the command `/jira subscribe edit`.
3. In the subscription modal, create a subscription.
4. While creating the subscription, click on `Add Filter`.
5. Select `Reporter`, set it to `Exclude` and choose a specific user from the dropdown.
6. Save the subscription.
7. Create an `Issue` in Jira with the same reporter as chosen in the filter.
8. Create another `Issue` in Jira with a different reporter.

**Expected**

No notification should be received for the `Issue` created with the reporter excluded in the filter, while a notification should be received for the `Issue` created with a different reporter.

**Step 3**

1. Setup Jira with Mattermost.
2. In any channel or DM/GM, run the command `/jira subscribe edit`.
3. In the subscription modal, create a subscription.
4. While creating the subscription, click on `Add Filter`.
5. Select `Assignee`, set it to `Include` and choose a specific user from the dropdown.
6. Save the subscription.
7. Create an `Issue` in Jira with the same assignee as chosen in the filter.
8. Create another `Issue` in Jira with a different assignee.

**Expected**

A notification should be received in the channel for the `Issue` created with the assignee included in the filter, and no notification should be received for the `Issue` created with a different assignee.

**Step 4**

1. Setup Jira with Mattermost.
2. In any channel or DM/GM, run the command `/jira subscribe edit`.
3. In the subscription modal, create a subscription.
4. While creating the subscription, click on `Add Filter`.
5. Select `Assignee`, set it to `Exclude`, and choose a specific user from the dropdown.
6. Save the subscription.
7. Create an `Issue` in Jira with the same assignee as chosen in the filter.
8. Create another `Issue` in Jira with a different assignee.

**Expected**

No notification should be received for the `Issue` created with the assignee excluded in the filter, while a notification should be received for the `Issue` created with a different assignee.

**Step 5**

1. Setup Jira with Mattermost.
2. In any channel or DM/GM, run the command `/jira subscribe edit`.
3. In the subscription modal, create a subscription.
4. While creating the subscription, click on `Add Filter`.
5. Select `Reporter`, set it to `Include`, and choose multiple users from the dropdown.
6. Save the subscription.
7. Create `Issues` in Jira with reporters same as the selected users.
8. Create another `Issue` in Jira with a reporter not same as the selected users.

**Expected**

Notifications should be received in the channel for the `Issues` created with reporters included in the filter, and no notification should be received for the `Issue` created with a reporter not included in the filter.

**Step 6**

1. Setup Jira with Mattermost.
2. In any channel or DM/GM, run the command `/jira subscribe edit`.
3. In the subscription modal, create a subscription.
4. While creating the subscription, click on `Add Filter`.
5. Select `Assignee`, set it to `Include`, and choose multiple users from the dropdown.
6. Save the subscription.
7. Create `Issues` in Jira with assignees same as the selected users.
8. Create another `Issue` in Jira with an assignee not same as the selected users.

**Expected**

Notifications should be received in the channel for the `Issues` created with assignees included in the filter, and no notification should be received for the `Issue` created with an assignee not included in the filter.
