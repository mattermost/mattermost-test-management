---
# (Required) Ensure all values are filled up
name: "Excluding subscription in the channel or DM/GM on MM for a repository in a organization "
status: Active
priority: Normal
folder: Subscriptions
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

1. Enter the slash command `/github subscriptions add <organization> --feature <events> --exclude <repository>` in the desired channel or DM/GM on MM and create a subscription for an organization with more than one repository and exclude any desired repository in that organization.
2. Trigger any desired event in the excluded repository on the Github and navigate to the desired channel or DM/GM on MM.

**Step 2**

1. Enter the slash command `/github subscriptions add <organization> --feature <events> --exclude <repository>` in the desired channel or DM/GM on MM and create a subscription for an organization with more than one repository and exclude any desired repository in that organization.
2. Trigger any desired event in any desired repository except the excluded ones on the Github and navigate to the desired channel or DM/GM on MM.

**Expected**

No notification should be generated for the triggered event in the desired channel or DM/GM on MM.
After step 2, notification of the triggered event should be shown in the desired channel or DM/GM on MM.