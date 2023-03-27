---
# (Required) Ensure all values are filled up
name: "Change Test Title"
status: Active
priority: Normal
folder: Change Folder Name
authors: "@stevemudie"
team_ownership: 
- Growth
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
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

**Objective**

- Verify the functionality of the Self-managed onboarding flow for the person installing the new server.

Note: This test only addresses the different screens encountered during the onboarding and not the actual onboarding steps once the server is up and running. those steps are covered in a different test case.

**Precondition**



**Step 1**

1. Upon successful installation of a Self-managed server the first admin is presented with a page asking them to name their organization. Verify filling in a name allows the admin to continue onto the next step.

![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/self-managed-onboarding/onboarding_org_name_screen.png)

2. The next step of onboarding opens up the "What tools do you use?" screen. Verify that you can select as many or as few (including none) as you'd like and both the "Continue" or the "Skip" buttons allow you to move on.

![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/self-managed-onboarding/onboarding_tools_screen.png)

3. The next step opens up the "Invite your team members" page. Verify that clicking the "Copy Invite" button copies the URL to the clipboard and that clicking "Finish setup" moves you along to the "Launching you workspace now" transition page with an animation playing to idicate that it's not stuck in the process.

![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/self-managed-onboarding/onboarding_invite_screen.png)

![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/self-managed-onboarding/onboarding_transition_screen.png)

4. Verify that the transition page moves automatically to the server workspace with the admin onboarding steps already expanded.

![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/self-managed-onboarding/onboarding_product_landing_screen.png)

**Expected**

The end result is that the server is in place with any plugins that were selected in step 2 and it's ready to use.