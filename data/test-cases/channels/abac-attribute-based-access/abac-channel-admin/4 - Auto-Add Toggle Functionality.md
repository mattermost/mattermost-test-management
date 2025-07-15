---
# (Required) Ensure all values are filled up
name: "Auto-Add Toggle Functionality in Channel"
status: Active
priority: Normal
folder: ABAC Channel Admin
authors: ""
team_ownership:
- Information Control
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: ABAC Channel Admin
component: null
tags: []
labels:
- channel-settings
- access-control
- auto-add
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: TBD
key: TBD
created_on: TBD
last_updated: ""
case_hashed: TBD
steps_hashed: TBD
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T: Auto-Add Toggle Functionality in Channel

---

**Step 1**

Test auto-add toggle for automatic member addition

1. Login as Channel Admin and navigate to private channel
2. Open Channel Settings > Access Control tab
3. Create an access rule (e.g., Department = Engineering)
4. Locate and enable the "Auto-add members based on access rules" toggle
5. Save the changes
6. Verify that eligible users are automatically added to the channel
7. Disable the toggle and save again
8. Create a new user that matches the rule criteria and verify they are not auto-added

**Expected**

- Auto-add toggle is visible and functional
- When enabled, users matching rules are automatically added to channel
- When disabled, matching users are not automatically added
- Toggle state persists after saving and reopening settings
- Immediate sync occurs when rules and toggle are saved