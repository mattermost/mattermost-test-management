---
# (Required) Ensure all values are filled up
name: "Global Policy Display in Channel Access Control"
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
- global-policies
- inheritance
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

## MM-T: Global Policy Display in Channel Access Control

---

**Step 1**

Verify display of inherited system-level access policies

1. As System Admin, create a system-level access policy that affects channels
2. Login as Channel Admin and navigate to affected private channel
3. Open Channel Settings > Access Control tab
4. Verify system policy information banner is displayed at top
5. Confirm global policies are shown in read-only format
6. Verify messaging explains additive behavior of channel + global rules
7. Attempt to edit or remove the global policy display
8. Create a channel-level rule and verify both policies are considered

**Expected**

- System policies affecting the channel are clearly displayed
- Global policies appear in read-only format (cannot be edited)
- Info banner explains that channel rules are additive to system policies
- Clear messaging indicates users must satisfy both global and channel rules
- Channel Admin cannot modify or remove global policy display