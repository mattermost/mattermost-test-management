---
# (Required) Ensure all values are filled up
name: "Immediate Member Sync on Rule Save"
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
- member-sync
- immediate-sync
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

## MM-T: Immediate Member Sync on Rule Save

---

**Step 1**

Verify immediate member sync when access rules are saved

1. Login as Channel Admin and navigate to private channel with existing members
2. Note current channel member list (include users who don't match future rule)
3. Open Channel Settings > Access Control tab
4. Create restrictive access rule that some current members won't match
5. Save the rule and return to channel
6. Verify that non-matching members are immediately removed from channel
7. Check that matching members remain in the channel
8. Verify channel member count updates accordingly

**Expected**

- Rule save triggers immediate channel membership sync
- Users who no longer meet criteria are removed from channel immediately
- Users who still meet criteria remain in channel
- If auto-add is enabled for the policy, users who newly meet criteria are added to channel
- Channel member list updates in real-time
- Admin who created rule remains in channel (due to self-exclusion prevention)
