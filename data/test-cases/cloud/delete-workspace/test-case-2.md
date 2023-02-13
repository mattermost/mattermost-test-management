---
# (Required) Ensure all values are filled up
name: "Verify System admin is able to successfully Downgrade a Non-Starter Workspace"
status: Active
priority: Normal
folder: Delete Workspace
authors: "@yasserfaraazkhan"
team_ownership: 
- Self-Serve
priority_p1_to_p4: P1 - Smoke Tests (App testable?)

# (Optional)
location: Cloud
component: null
tags: []
labels: []

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

Ref PR: https://github.com/mattermost/mattermost-webapp/pull/12077

Ref: Story: https://mattermost.atlassian.net/browse/MM-49442

demo Video: https://drive.google.com/file/d/1n6VLGclx_nb6Hr8K-JNLqcg5wOAKt6JL/view

**Prerequisites:**

1. Make sure its an cloud instance and logged in with System Admin user.
2. Navigate to System Console > Billing & Account > Subscriptions.
3. Verify that at the bottom of the screen we can see '<Workspace name >' and **Delete Workspace** button.
   **Note:** Only an instance with monthly subscription plan will have delete button option. i.e Cloud Professional Or Cloud Enterprise

**Scenario 1:**
Instance should be on a Non-Starter Workspace

1. On System Console > Billing & Account > Subscriptions, Click on **Delete Workspace** button.
2. Click on **Downgrade To Free** button.
3. Verify user is downgraded to Cloud Free.
4. User navigates back to System Console > Billing & Account > Subscriptions page.
5. Click on **Delete Workspace** button.
6. Once the survey question is filled, click on **Delete Workspace** button.
7. Once the workspace is deleted, you will see a success screen stating that the workspace has been deleted.
8. Click the Go to Mattermost.com button.

**Expected**

**Scenario 1:**

1. Verify a confirmation modal is opened
   - Title: **Are you sure you want to delete?**.
   - Information about Number of messages, file size and number of boards in current plan.
   - **Downgrade to Free** button should be enabled.
   - **Keep subscription** button
2. Should chose 1 option among
   - Experienced technical issues.
   - No Longer need Cloud Professional features
   - Exploring other solutions.
   - Too expensive
   - Other
8. Should open Mattermost.com in a new window.
