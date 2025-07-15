---
# (Required) Ensure all values are filled up
name: "Channel Access Rule Self-Exclusion Prevention"
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
- error-handling
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

## MM-T: Channel Access Rule Self-Exclusion Prevention

---

**Step 1**

Verify system prevents Channel Admin from excluding themselves

1. Login as Channel Admin (note admin's user attributes, e.g., Department = Marketing)
2. Navigate to private channel and open Channel Settings > Access Control
3. Attempt to create a rule that would exclude the admin (e.g., Department = Engineering)
4. Try to save the rule
5. Verify error message appears preventing the save
6. Modify the rule to include the admin's attributes
7. Verify the rule can now be saved successfully

**Expected**

- System detects when admin would be excluded by their own rule
- Error message displays clearly explaining the self-exclusion issue
- Save operation is blocked until rule is corrected
- Error message suggests admin cannot set rule that would remove them
- Once rule is corrected to include admin, save succeeds

**Notes**
- What if an admin's attributes change after they set the policy, making them excluded from the channel after the fact?