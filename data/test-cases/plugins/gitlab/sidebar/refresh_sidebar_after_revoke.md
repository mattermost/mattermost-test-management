---
# (Required) Ensure all values are filled up
name: "Refresh the sidebar after revoking the application from GitLab."
status: Active
priority: Normal
folder: Sidebar
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

1. Revoke the OAuth token for your app from the connected GitLab account.
2. Navigate to MM and click on the refresh button in the LHS of GitLab.
3. Open the DM from GitLab bot.

**Expected**

All the GitLab icons in the LHS should be removed and the user should get a message in the DM from GitLab bot that their account has been disconnected on MM.

**Step 2**

1. Revoke the OAuth token for your app from the connected GitLab account.
2. Navigate to MM and refresh the page.
3. Open the DM from GitLab bot.

**Expected**

All the GitLab icons in the LHS should be removed and the user should get a message in the DM from GitLab bot that their account has been disconnected on MM.

**Step 3**

1. Revoke the OAuth token for your app from the connected GitLab account.
2. Navigate to MM and enter any slash command that fetches the data from GitLab.
3. Open the DM from GitLab bot.

**Expected**

All the GitLab icons in the LHS should be removed and the user should get a message in the DM from GitLab bot that their account has been disconnected on MM. 