---
# (Required) Ensure all values are filled up
name: "Tooltip over link is showing correct ticket information on the Jira server instance."
status: Active
priority: Normal
folder: Server
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

1. Connect your jira account with you MM account and refresh the page.
2. Hover the cursor over any Jira issue link present in any desired channel or DM/GM.

**Step 2**

1. Edit the issue on Jira server whose link is already present in any desired channel or DM/GM on MM.
2. Navigate to the channel on MM where the link already exists and refresh the page.
3. Hover the cursor over the edited issue link in the desired channel or DM/GM on MM.

**Step 3**

1. Delete the issue on Jira server whose link is already present in any desired channel or DM/GM on MM.
2. Navigate to the channel on MM where the link already exists and refresh the page.
3. Hover the cursor over the edited issue link in the desired channel or DM/GM on MM.

**Step 4**

1. Create a link for any non-existing issue in any desired channel or DM/GM on MM.
2. Hover the cursor over the created link in the desired channel or DM/GM on MM.

**Expected**

The tooltip should be visible to the user with correct ticket ID, status, icons, etc; in the desired channel or DM/GM on MM.
After step 2, the changes should reflect in the tooltip for the pre-existing link in the desired channel or DM/GM on MM.
After step 3, the deleted issue link should show blank tooltip upon hovering the cursor in the desired channel or DM/GM on MM.
After step 4, the tooltip should be blank for a non-existing issue link in the desired channel or DM/GM on MM.