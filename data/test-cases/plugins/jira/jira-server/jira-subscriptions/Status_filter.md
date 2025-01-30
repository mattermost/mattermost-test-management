---
# (Required) Ensure all values are filled up
name: "Creating subscriptions for Jira with filter applied on Status field."
status: Active
priority: Normal
folder: Jira-subscriptions
authors: "@arush-vashishtha"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

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

1. Connect you MM account to your Jira account.
2. In the desired channel or DM/GM run the slash command `/jira subscribe` or `/jira subscribe edit` on MM.
3. Click on the `Create Subscription` button in the `Jira subscriptions` page on MM.
4. Select and enter the desired details in the fields `Subscription Name`, `Project`, `Events` and `Issue Type`.
5. Click on `+ Add Filter` button in the `Jira subscriptions` page on MM.
6. Select the filter type as `Status`, values as `Include` and desired `Status Type`.
7. Click on Add subscription.

**Step 2**

1. After step 1, trigger the subscribed event in the desired project of the selected desired `Status Type` on Jira.
2. Navigate back to the desired channel or DM/GM on MM.

**Step 3**

1. After step 1, trigger the subscribed event in the desired project of `Status Type` other than the desired `Status Type` on Jira.
2. Navigate back to the desired channel or DM/GM on MM.

**Step 4**

1. In any desired channel or DM/GM where the subscriptions is created with filter on `Status` field run the slash command `/jira subscribe` or `/jira subscribe edit` on MM.
2. Click on `Edit` button on any desired subscription with filter on `Status` field in the `Jira subscriptions` page on MM.

**Step 5**

1. After step 4, edit the filter field and click on `Save Subscription` in the `Jira subscriptions` page on MM.
2. Trigger the event for the desired subsciption and for the updated filter on Jira.
3. Navigate to the desired channel or DM/GM on MM.

**Step 6**

1. Connect you MM account to your Jira account.
2. In the desired channel or DM/GM run the slash command `/jira subscribe` or `/jira subscribe edit` on MM.
3. Click on the `Create Subscription` button in the `Jira subscriptions` page on MM.
4. Select and enter the desired details in the fields `Subscription Name`, `Project`, `Events` and `Issue Type` in the `Jira subscriptions` page on MM.
5. Click on `+ Add Filter` button in the `Jira subscriptions` page on MM.
6. Select the filter type as `Status`, values as `Excluded` and desired `Status Type`.
7. Click on Add subscription.

**Step 7**

1. After step 6, trigger the subscribed event in the desired project of the selected desired `Status Type` on Jira.
2. Navigate back to the desired channel or DM/GM on MM.

**Step 8**

1. After step 6, trigger the subscribed event in the desired project of `Status Type` other than the desired `Status Type` on Jira.
2. Navigate back to the desired channel or DM/GM on MM.

**Expected**

The filter field should be visible to the user only after selecting the `Project` and the dropdown options should populate with the desired options in the Jira subscription page on MM.
After step 2, the user should receive the notification for the subscribed event in the desired channel or DM/GM on MM.
After step 3, the user should not receive the notification for the subscribed event with `Status Type` other than the desired `Status Type` in the desried channel or DM/GM on MM.
After step 4, the field should be pre-filled for the desired subscription in the `Jira subscriptions` page on MM.
After step 5, the user should be able to edit the desired subscription on MM.
After step 6, the filter field should be visible to the user only after selecting the `Project` and the dropdown options should populate with the desired options in the `Jira subscription` page on MM.
After step 7, the user should not receive the notification for the subscribed event with the desired `Status Type` in the desried channel or DM/GM on MM.
After step 8, the user should receive the notification for the subscribed event with `Status Type` other than the desired `Status Type` in the desried channel or DM/GM on MM.