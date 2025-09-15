---
# (Required) Ensure all values are filled up
name: "To verify the Tooltip upon hovering cursor over the link for issues."
status: Active
priority: Normal
folder: Subscriptions-and-notifications
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

1. Create an `issue` in the desired project and copy its link on the Gitlab.
2. Navigate to MM and paste the link of the created `issue` in any desired channel or DM/GM on MM.
3. Hover the cursor over the link of the created `issue` on MM.

**Expected**

The user should be able to verify the details of the created `issue` in the `tooltip` on MM.

**Step 2**

1. After step 1, close the created `issue` on Gitlab.
2. Navigate to MM and refresh the page.
3. Hover the cursor over the link of the closed `issue` on MM.

**Expected**

The user should be able to verify the symbol for the closed `issue` in the `tooltip` on MM.

**Step 3**

1. Delete any desired `issue` on Gitlab whose link exists in any desired channel or DM/GM on MM.
2. Navigate to MM and refresh the page.
3. Hover the cursor over the link of the deleted `issue` on MM.

**Expected**

The user should not get `tooltip` on MM for the deleted `issues` on Gitlab.

**Step 4**

1. Enter a link of a non-existing `issue` on Gitlab and paste it in any desired channel or DM/GM on MM.
2. Hover the cursor over the link of the `issue` on MM.

**Expected**

The user should not get `tooltip` on MM for the non-existing `issues` on Gitlab.

**Step 5**

1. Copy the link of any desired `issue` on Gitlab and paste it in any desired channel or DM/GM on MM.
2. Edit the details of the desired `issue` on Gitlab.
3. Navigate to MM and refresh the page.
4. Hover over the link of the desired `issue` in the desired channel or DM/GM on MM.

**Expected**

The user should be able to verify the updates done on the `issue` in the `tooltip` on MM.