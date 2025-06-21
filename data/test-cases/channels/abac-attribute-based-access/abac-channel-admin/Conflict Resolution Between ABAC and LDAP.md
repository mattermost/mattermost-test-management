---
# (Required) Ensure all values are filled up
name: "Conflict Resolution Between ABAC and LDAP"
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
- ldap-group-sync
- conflict-resolution
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

## MM-T: Conflict Resolution Between ABAC and LDAP

---

**Step 1**

Test system behavior when LDAP sync and ABAC rules create conflicting membership changes

1. Set up channel with LDAP Group Sync and ABAC rules
2. Create scenario where user is added to LDAP group (should be added to channel)
3. Simultaneously ensure user doesn't match ABAC rules (should be excluded)
4. Trigger both sync operations and verify final channel membership state
5. Test reverse scenario: user removed from LDAP group but still matches ABAC
6. Verify system handles simultaneous conflicting sync operations gracefully
7. Check that error handling prevents inconsistent channel states
8. Verify audit logs capture both sync operations and final resolution

**Expected**

- System resolves conflicts by applying most restrictive access (AND logic)
- No inconsistent channel membership states occur during conflicting syncs
- Final membership reflects combined requirements of both systems
- Error handling prevents data corruption during conflict resolution
- Audit logs properly document conflict resolution decisions