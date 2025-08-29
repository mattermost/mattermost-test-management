---
# (Required) Ensure all values are filled up
name: "Added Labels/Milestones on the PRs/issues are displayed with proper UI on MM"
status: Active
priority: Normal
folder: Sidebar and RHS
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

1. Connect your MM account to your GitHub account.
2. Create and add `Labels` on a PR/issue in any desired repository on GitHub.
3. Navigate to MM and open the RHS for the `Pull Request` or `Issues` respectively on MM.

**Expected**

The user should be able to verify all the added `Labels` on the desired open `Pull Request` or `Issue` with proper UI of the contents of the `Pull Request` or `Issue` in the RHS of GitHub on MM.

**Step 2**

1. Connect your MM account to your GitHub account.
2. Create and add `Milestones` on a PR/issue in any desired repository on GitHub.
3. Navigate to MM and open the RHS for the `Pull Request` or `Issues` respectively on MM.

**Expected**

The user should be able to verify all the added `Milestones` on the desired open `Pull Request` or `Issue` with proper UI of the contents of the `Pull Request` or `Issue` in the RHS of GitHub on MM.

**Step 3**

1. After step 1, navigate to GitHub and update the added `Labels` on the desired PR/issue in the desired repository.
2. Navigate to MM and open the RHS for the `Pull Request` or `Issues` respectively on MM.

**Expected**

The user should be able to verify the updated `Labels` on the `Pull Request` or `Issue` in the RHS of GitHub on MM.


**Step 4**

1. After step 2, navigate to GitHub and update the added `Milestones` on the desired PR/issue in the desired repository.
2. Navigate to MM and open the RHS for the `Pull Request` or `Issues` respectively on MM.

**Expected**

The user should be able to verify the updated `Milestones` on the `Pull Request` or `Issue` in the RHS of GitHub on MM.