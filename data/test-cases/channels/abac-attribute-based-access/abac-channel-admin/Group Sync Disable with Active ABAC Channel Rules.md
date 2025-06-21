---
# (Required) Ensure all values are filled up
name: "Group Sync Disable with Active ABAC Channel Rules"
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

## MM-T: Group Sync Disable with Active ABAC Channel Rules

---

**Step 1**

Test behavior when LDAP Group Sync is disabled while ABAC rules are active

1. Set up channel with both LDAP Group Sync and ABAC rules active
2. Verify current members satisfy both group membership and ABAC criteria
3. Remove all synced groups from channel (disable group sync for this channel)
4. Verify ABAC rules remain active and functional
5. Test that existing members who only satisfied group membership are removed
6. Verify members who match ABAC rules remain in channel
7. Test ABAC auto-add functionality works independently after group sync removal
8. Confirm Test Access Rules shows results based only on ABAC criteria

**Expected**

- ABAC rules continue to function normally when group sync is disabled
- Members who only qualified via group membership are removed from channel
- Members matching ABAC rules remain regardless of previous group membership
- ABAC auto-add works independently without group sync requirements
- Channel access becomes purely attribute-based after group sync removal