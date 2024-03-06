---
# (Required) Ensure all values are filled up
name: "Auto promotion of remote user on MM"
status: Active
priority: Normal
folder: plugin-configurations
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

1. Set the `Automatically Promote Synthetic Users` option to `true`, `Synthetic User Auth Service` option to `SAML` or `AD/LDAP` and `Synthetic User Auth Data` option to `ID` or `Mail` or `User Principal Name` when the `sync user` job is enabled in the plugin settings on MM.
2. Login through SSO on MM platform from a remote user.

**Step 2**

1. Set the `Automatically Promote Synthetic Users` option to `false`, `Synthetic User Auth Service` option to `SAML` or `AD/LDAP` and `Synthetic User Auth Data` option to `ID` or `Mail` or `User Principal Name` when the `sync user` job is enabled in the plugin settings on MM.
2. Login through SSO on MM platform from a remote user.


**Expected**

The user should be promoted and get logged-in to their account on MM.
After step 2, the user shouldn't be promoted nor get logged-in to their account on MM.