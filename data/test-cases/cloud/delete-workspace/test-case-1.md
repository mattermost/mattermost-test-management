---
# (Required) Ensure all values are filled up
name: "Verify System admin is able to successfully Delete a Workspace on monthly plan"
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
4. Verify if the instance is on Yearly subscription plan, we can see **Contact Us** button.

**Scenario 1:**
Instance should be on a Free plan

1. On System Console > Billing & Account > Subscriptions, Click on **Delete Workspace** button.
2. Should chose 1 option among
   - Experienced technical issues.
   - No Longer need Cloud Professional features
   - Exploring other solutions.
   - Too expensive
   - Other
     and click on **Delete Workspace** button.
3. Once the workspace is deleted, you will see a success screen stating that the workspace has been deleted.
4. Click the Go to Mattermost.com button.

**Expected**

**Scenario 1:**

1. Should see a small survey modal is diaplayed.
   - Title: **Please share your reason for downgrading**.
   - should have radio button to select option.
   - If **Other** is selected, used should be able to type the answer.
   - Modal should then have **Delete Workspace** button enabled.
2. Should see a progress modal stating Deleting your workspace.
3. Should open Mattermost.com in a new window.
