---
# (Required) Ensure all values are filled up
name: "Conflicting Channel Access Rules Detection"
status: Active
priority: Normal
folder: ABAC Channel Admin
authors: ""
team_ownership:
- Information Control
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: ABAC Channel Admin
component: null
tags: []
labels:
- channel-settings
- access-control
- conflict-detection
- validation
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

## MM-T: Conflicting Channel Access Rules Detection

---

**Step 1**

Detection of conflicting access rules

1. Login as Channel Admin and navigate to private channel
2. Open Channel Settings > Access Control tab
3. Create first rule: Department = Engineering
4. Attempt to create conflicting rule: Department = Sales
5. Verify system detects impossible combination (user cannot be in two departments)
6. Check for warning message about conflicting rules
7. Try to save and verify save is prevented or warning is shown
8. Test with non-conflicting rules on different attributes

**Expected**

- System detects when rules create impossible conditions
- Warning message indicates no user can satisfy all rules
- Clear guidance provided to resolve conflicts
- Save operation either prevented or shows confirmation dialog
- Non-conflicting rules on different attributes save successfully