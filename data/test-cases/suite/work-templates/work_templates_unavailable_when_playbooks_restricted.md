---
# (Required) Ensure all values are filled up
name: "Work Templates menu unavailable when ability to create Public Playbooks is disabled"
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

This test is designed to ensure that we're covering the conditions that would NOT show the Work Templates menu item to regular users

**Precondition**

- A regular user has been created and is logged in on one browser while an admin is logged in using a different browser

---

**Step 1**

**All permissions granted:**

1. As the Admin, disable Public Playbook creation for `All Members` located in `System Console ➜ User Management ➜ Permissions`
2. As the regular user, verify that the menu item to create from a template is **not** present in the onboarding task list or the ➕ menu at the top of the LHS
![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/work-templates/work_templates_not_present.png)

**Test Data**

**Expected**

- With Public Playbook creation disabled for regular users Work Templates are unavailable for them to use
---
