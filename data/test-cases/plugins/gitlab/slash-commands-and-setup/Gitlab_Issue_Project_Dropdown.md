---
# (Required) Ensure all values are filled up
name: "Project dropdown lists all accessible GitLab projects"
status: Active
priority: Normal
folder: Slash Commands and Setup
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

1. Connect GitLab account with more than 20 accessible projects.
2. Run `/gitlab issue create` in any channel or DM/GM.
3. In the `Create GitLab Issue` modal, open the Project dropdown.

**Expected**

The project dropdown displays the complete list of projects without limiting to 20.

**Step 2**

1. Connect GitLab account with less than 20 accessible projects.
2. Run `/gitlab issue create` in any channel or DM/GM.
3. In the `Create GitLab Issue` modal, open the Project dropdown.

**Expected**

The project dropdown correctly lists all available projects for selection.

**Step 3**

1. Connect GitLab account with more than 20 accessible projects.
2. Run `/gitlab issue create` in any channel or DM/GM.
3. In the `Create GitLab Issue` modal, click Project dropdown.
4. Search for a project beyond the first 20.

**Expected**

The search field displays only the projects that match the search input.

**Step 4**

1. Connect GitLab account with less than 20 accessible projects.
2. Run `/gitlab issue create` in any channel or DM/GM.
3. In the `Create GitLab Issue` modal, click Project dropdown.
4. Search for a project.

**Expected**

The search field displays only the projects that match the search input.

**Step 5**

1. Connect GitLab account with zero accessible projects.
2. Run `/gitlab issue create` in any channel or DM/GM.
3. In the `Create GitLab Issue` modal, open the Project dropdown.

**Expected**

The dropdown should show no available projects.

**Step 6**

1. Connect GitLab account with any number of projects.
2. Run `/gitlab issue create` in any channel or DM/GM.
3. In the `Create GitLab Issue` modal, click Project dropdown.
4. Search for a project name that does not exist.

**Expected**

The search field shows no results for a project name that does not exist.