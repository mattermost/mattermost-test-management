---
# (Required) Ensure all values are filled up
name: "Auto-Add Behavior with ABAC and LDAP Group Sync"
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
- auto-add
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

## MM-T: Auto-Add Behavior with ABAC and LDAP Group Sync

---

**Step 1**

Test ABAC auto-add functionality when LDAP Group Sync is also active

1. Set up channel with LDAP Group Sync configured
2. Enable ABAC auto-add toggle in Channel Settings > Access Control
3. Create ABAC rules and save with auto-add enabled
4. Add new user to LDAP group who also matches ABAC rules
5. Verify user is added to channel (satisfies both conditions)
6. Add user to LDAP group who doesn't match ABAC rules
7. Verify user is NOT auto-added despite group membership
8. Update user attributes to match ABAC rules and verify they're then added
9. Test with user who matches ABAC but isn't in any synced groups

**Expected**

- ABAC auto-add only adds users who satisfy BOTH group membership AND ABAC rules
- Users added to LDAP groups but not matching ABAC are not auto-added to channel
- Users matching ABAC but not in synced groups are not added via ABAC auto-add
- Both conditions must be met for automatic channel membership
- Auto-add respects the AND logic between both access control systems