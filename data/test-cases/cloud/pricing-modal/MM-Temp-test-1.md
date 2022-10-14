---
# (Required) Ensure all values are filled up
name: "Self-Hosted | Upgrade button should open pricing modal admin users when the server is on a trial"
status: Active
priority: Normal
folder: pricing modal
authors: "@yasserfaraazkhan"
team_ownership: 
- Self-Serve

# (Optional)
component: null
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: null
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

## Change Test Title

---

**Step 1**

Pre-condition:

- should not have been on trial before
- should currently be on a professional/entriprise license

Test Steps:

1: Login with admin user
2: Verify 'Upgrade' button is visible when Channel is visited.
3: Click on the button to verify pricing modal is opened

**Expected**

On pricing modal

1: On starter pack, 'Downgrade' button should be visible and disabled
2: on professional pack, 'Upgrade' button should be visible and not disabled
3: on entriprice pack, 'Try free**' button should be visible and disabled
