---
# (Required) Ensure all values are filled up
name: "Account for user permissions in template flow entry points"
status: Active
priority: Normal
folder: work-templates
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

These tests are designed to ensure that we're covering all the potential permutations of permissions that would show/not show the Work Templates menu item

**Precondition**

- Work Templates are enabled along wth Boards & Playbooks
- A regular user has been created and is logged in on one browser while an admin is logged in using a different browser

---

**Step 1**

**All permissions granted:**
1. As the Admin go to `System Console ➜ User Mangement ➜ Permissions` and verify that `All Members` are allowed to create both public & private channels as well as public & private playbooks. Verify they are also able to create Public Playbooks.
2. As the User click the `**+**` Plus sign menu at the top of the LHS then click `Create from a template` to open the Work Templates modal
![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/work-templates/plus_menu.png)
3. Hover over the `Manage Feature Release` template then click on it
![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/work-templates/manage_feature_release.png)
4. Click the `Next` button 
5. Click both the `Public` and then the `Private` buttons in turn to verify they are available for use by observing the checkmark in the one you've selected
![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/work-templates/public_access_work_template.png)
![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/work-templates/private_access_work_template.png)

**Test Data**


**Expected**

With either one of the buttons selected you're able to click the `Create` button and the channel, board and playbook are all created as expected 

---

**Step 2**


**Only Public channels allowed:**
TL;DR version: Disable Private channel creation and ensure that a user can't create Private templates

1. As the Admin go to `System Console ➜ User Mangement ➜ Permissions` and restrict `All Members` from creating private channels
2. As the User click the `**+**` Plus sign menu at the top of the LHS then click `Create from a template` to open the Work Templates modal
3. Hover over the `Manage Feature Release` template then click on it
![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/work-templates/plus_menu.png)
4. Click the `Next` button 
5. Click the `Public` button and then hover over the `Private` button to verify that the check mark appears on the Public button but a tooltip appears over the Private one (and you're not allowed to click on it)
![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/work-templates/private_not_allowed_work_template.png)

**Test Data**


**Expected**

- With Public channel creation unchecked for `All Members` in the System Scheme a regular user isn't able to create Public channels, boards or playbooks via the Work Templates interface

**Step 3**

1. As an admin disabling Public **and** Private channels in the System Scheme removes `Create from a template` from the `**+**` menu
2. Likewise, even if both Public **and** Private channels in the System Scheme are enabled, disabling the ability to create public playbooks will remove `Create from a template` from the `**+**` menu

**Test Data**


**Expected**

- With either or both items unchecked in the permissions settings, regular users will not see the Work Templates menu choice
