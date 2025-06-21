---
# (Required) Ensure all values are filled up
name: "Preview Results of Access Rule"
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
- rule-testing
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

## MM-T: Preview Results of Access Rule

---

**Step 1**

Test access rules to preview affected users

1. Login as Channel Admin and navigate to private channel with existing rules
2. Open Channel Settings > Access Control tab
3. Create or ensure at least one access rule exists
4. Click "Test Access Rules" button
5. Review the test results modal showing matching users
6. Verify the results show users who match the criteria
7. Close the modal and modify the rule
8. Re-test to see updated results

**Expected**

- Test Access Rules button is available and functional
- Test results modal opens showing relevant user information
- Results accurately reflect users who match the current rules
- Modal includes clear information about who would have access
- Results update when rules are modified