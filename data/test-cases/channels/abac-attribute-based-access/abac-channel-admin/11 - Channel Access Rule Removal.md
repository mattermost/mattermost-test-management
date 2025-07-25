---
# (Required) Ensure all values are filled up
name: "Channel Access Rule Removal"
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
- empty-state
- rule-removal
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

## MM-T: Channel Access Rule Removal

---

**Step 1**

Test empty state display and behavior when all rules are removed

1. Login as Channel Admin and navigate to private channel with no access rules
2. Open Channel Settings > Access Control tab
3. Verify appropriate empty state message is displayed
4. Add one or more access rules
5. Enable auto-add toggle
6. Delete all access rules one by one
7. Verify auto-add toggle is automatically disabled
8. Confirm channel returns to standard access state
9. Verify empty state display returns

**Expected**

- Empty state shows helpful message when no rules are configured
- Auto-add toggle is disabled when no rules exist
- Removing all rules returns channel to standard access mode
- Auto-add toggle automatically disables when last rule is removed
- Empty state provides guidance for adding first rule
