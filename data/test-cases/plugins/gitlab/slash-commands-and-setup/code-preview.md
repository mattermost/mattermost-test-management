---
# (Required) Ensure all values are filled up
name: "Code Preview"
status: Active
priority: Normal
folder: Slash Commands and Setup
authors: "@DHaussermann"
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

1. Ensure _Enable Code Previews:_ is set to Enable for Public Project
2. Ensure the test user is connected to GitLab
3. Post a valid code preview link that references one or more lines of code
   ex: https://gitlab.com/dhaussermann/dkh-public/-/blob/286879ea66708b8cdda736d6b178d6722eb8d5ba/script.js#L11-L12

**Expected**

The Plugin will show a link to the file with project and file name. Below the link will be a code block showing the 2 lines of code specified.
