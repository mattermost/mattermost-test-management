---
# (Required) Ensure all values are filled up
name: "Cloud | Upgrade button should open pricing modal for admin when the server has requested a trial before on starter plan"
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

- should have requested a professional trial before
- should login with admin account

Test Steps:

1: Verify 'Upgrade' button is visible when Channel is visited.
2: Click on the button to verify pricing modal is opened

**Expected**

- Verify pricing modal opens up.
- Expect Entriprise section should have 'contact sales' button.
- Expect downgrade button on Starter section should be disabled.
