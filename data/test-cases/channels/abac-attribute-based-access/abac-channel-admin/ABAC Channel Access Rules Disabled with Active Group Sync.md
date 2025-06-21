---
# (Required) Ensure all values are filled up
name: "ABAC Channel Access Rules Disabled with Active Group Sync"
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
- disable-integration
- edge-case
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

## MM-T: ABAC Channel Access Rules Disabled with Active Group Sync

---

**Step 1**

Test behavior when ABAC rules are removed while LDAP Group Sync remains active

1. Set up channel with both LDAP Group Sync and ABAC rules active
2. Note current channel members who satisfy both conditions
3. Remove all ABAC rules from Channel Settings > Access Control
4. Verify LDAP Group Sync continues to function normally
5. Check that members who were only in due to ABAC rules are removed
6. Verify all synced group members are now added to channel (no ABAC filtering)
7. Test that future group sync operations work without ABAC restrictions
8. Confirm channel returns to standard group-sync-only behavior

**Expected**

- LDAP Group Sync continues to function normally when ABAC rules are removed
- Members who only qualified via ABAC rules are removed from channel
- All users in synced LDAP groups are added to channel (no attribute filtering)
- Future group sync operations add/remove members based solely on group membership
- Channel access becomes purely group-based after ABAC rules removal