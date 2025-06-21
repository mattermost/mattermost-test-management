---
# (Required) Ensure all values are filled up
name: "Member Removal Priority Between ABAC and LDAP Group Sync"
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
- member-removal
- priority
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

## MM-T: Member Removal Priority Between ABAC and LDAP Group Sync

---

**Step 1**

Test member removal behavior when both LDAP Group Sync and ABAC rules are active

1. Set up channel with LDAP Group Sync and users synced via groups
2. Add ABAC rules that some existing group members don't satisfy
3. Save ABAC rules and verify immediate sync removes non-matching group members
4. Remove user from LDAP group but ensure they still match ABAC rules
5. Trigger LDAP sync and verify user is removed despite matching ABAC
6. Test scenario where user matches ABAC but group sync tries to remove them
7. Verify the most restrictive condition (AND logic) is applied

**Expected**

- Users must satisfy BOTH group membership AND ABAC rules to remain in channel
- ABAC rule changes immediately remove non-matching members (even if in sync groups)
- LDAP sync removes users not in groups (even if they match ABAC rules)
- Most restrictive access control takes precedence (AND logic between systems)
- Member removal happens immediately when either condition fails