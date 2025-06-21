---
# (Required) Ensure all values are filled up
name: "Channel Access Rules Test Results with Group Sync Context"
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
- ldap-group-sync
- rule-testing
- integration
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

## MM-T: Channel Access Rules Test Results with Group Sync Context

---

**Step 1**

Verify Test Access Rules function accounts for LDAP Group Sync requirements

1. Set up channel with LDAP Group Sync and specific groups configured
2. Open Channel Settings > Access Control and create ABAC rules
3. Click "Test Access Rules" button to preview matching users
4. Verify test results show only users who match BOTH ABAC rules AND group membership
5. Review test results and confirm users listed are actually in synced LDAP groups
6. Modify ABAC rules to be more restrictive and re-test
7. Verify updated results properly filter users based on combined criteria
8. Test with rules that would match users not in any synced groups

**Expected**

- Test Access Rules results consider both ABAC rules and LDAP group membership
- Only users satisfying both conditions appear in test results
- Results accurately predict actual channel access after rule implementation
- Test results help admin understand combined effect of both access control systems
- Test function provides clear indication of who would have access under current configuration