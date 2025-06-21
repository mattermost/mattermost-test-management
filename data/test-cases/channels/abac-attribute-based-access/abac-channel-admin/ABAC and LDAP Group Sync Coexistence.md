---
# (Required) Ensure all values are filled up
name: "ABAC and LDAP Group Sync Coexistence"
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

## MM-T: ABAC and LDAP Group Sync Coexistence

---

**Step 1**

Verify ABAC rules and LDAP Group Sync work together without conflicts

1. Set up channel with existing LDAP Group Sync (synced groups configured)
2. Login as Channel Admin and navigate to the synced channel
3. Open Channel Settings > Access Control tab
4. Create ABAC access rule (e.g., Department = Engineering) 
5. Save the ABAC rule and verify it applies alongside existing group sync
6. Check that users must satisfy BOTH group membership AND ABAC rules
7. Add user to LDAP group but ensure they don't match ABAC rule
8. Verify user is not added to channel despite group membership
9. Modify user attributes to match ABAC rule and verify they're now added

**Expected**

- ABAC rules and LDAP Group Sync operate independently without conflicts
- Users must satisfy both group membership and ABAC criteria to access channel
- ABAC rules act as additional filter on top of group sync membership
- Channel membership updates properly when either condition changes
- Both systems maintain their individual functionality