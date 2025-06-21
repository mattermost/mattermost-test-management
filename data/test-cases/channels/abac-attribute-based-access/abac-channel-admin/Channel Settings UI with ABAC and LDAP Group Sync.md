---
# (Required) Ensure all values are filled up
name: "Channel Settings UI with ABAC and LDAP Group Sync"
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
- ui-integration
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: null
detox: null
mmctl, null
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

## MM-T: Channel Settings UI with ABAC and LDAP Group Sync

---

**Step 1**

Verify Channel Settings modal displays both LDAP Group Sync and Access Control appropriately

1. Set up channel with LDAP Group Sync enabled and configured
2. Login as Channel Admin and open Channel Settings modal
3. Navigate to Groups tab and verify existing synced groups are displayed
4. Switch to Access Control tab and verify it's available
5. Create ABAC rules in Access Control tab
6. Return to Groups tab and confirm group sync settings are unchanged
7. Verify no UI conflicts or overlapping functionality between tabs
8. Test saving changes in one tab doesn't affect the other tab's settings

**Expected**

- Both Groups tab and Access Control tab are visible and functional
- No UI conflicts or confusion between the two access control methods
- Settings in each tab operate independently
- Clear separation between group-based and attribute-based access controls
- Both tabs maintain their respective functionality without interference