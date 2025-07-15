---
# (Required) Ensure all values are filled up
name: "Channel Access Rule Validation"
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
- validation
- error-handling
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

## MM-T: Channel Access Rule Validation

---

**Step 1**

Test validation for empty fields and duplicate rules

1. Login as Channel Admin and navigate to private channel
2. Open Channel Settings > Access Control tab
3. Click "Add Rule" but leave attribute field empty, attempt to save
4. Fill attribute but leave value empty, attempt to save
5. Create a complete rule (e.g., Department = Engineering)
6. Attempt to create identical duplicate rule
7. Try creating similar rule with same attribute but different operator
8. Verify appropriate validation messages for each scenario

**Expected**

- Empty required fields are highlighted with validation errors
- Save is prevented when required fields are missing
- Duplicate rule detection prevents identical rules from being created
- Clear error messages guide user to complete or fix invalid entries
- Conflicting rules are detected and user is warned appropriately