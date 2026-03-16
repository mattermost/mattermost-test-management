---
# (Required) Ensure all values are filled up
name: "To verify the Tooltip upon hovering cursor over the link for PR."
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

1. Create a `merge request` in the desired project and copy its link on the Gitlab.
2. Navigate to MM and paste the link of the created `merge request` in any desired channel or DM/GM on MM.
3. Hover the cursor over the link of the created `merge request` on MM.

**Expected**

The user should be able to verify the details of the created `merge request` in the `tooltip` on MM.

**Step 2**

1. After step 1, close the created `merge request` on Gitlab.
2. Navigate to MM and refresh the page.
3. Hover the cursor over the link of the closed `merge request` on MM.

**Expected**

The user should be able to verify the symbol for the closed `merge request` in the `tooltip` on MM.

**Step 3**

1. Merge any desired `merge request` on Gitlab whose link exist in any desired channel or DM/GM on MM.
2. Navigate to MM and refresh the page.
3. Hover the cursor over the link of the `merged request` on MM.

**Expected**

The user should be able to verify `tooltip` on MM for the `merged request` on Gitlab.

**Step 4**

1. Crete a link for a non-existing `merge request` on Gitlab and paste it in any desired channel or DM/GM on MM.
2. Hover the cursor over the link of the `merge request` on MM.

**Expected**

The user should not get `tooltip` on MM for the non-existing `merge request` on Gitlab.

**Step 5**

1. Copy the link of any desired `merge request` on Gitlab and paste it in any desired channel or DM/GM on MM.
2. Edit the details of the desired `merge request` on Gitlab.
3. Navigate to MM and refresh the page.
4. Hover the cursor over the link of the desired `merge request` in the desired channel or DM/GM on MM.

**Expected**

The user should be able to verify the updates done on the `merge request` in the `tooltip` on MM.