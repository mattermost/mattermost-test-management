---
# (Required) Ensure all values are filled up
name: "Channel Access Rule Validation and Security"
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
- permissions
- security
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

## MM-T: Channel Access Rule Validation and Security

---

**Step 1**

Verify permission enforcement and security boundaries

1. Login as Channel Admin and create access rules for Channel A
2. Navigate to Channel B (where user is also Channel Admin)
3. Verify user cannot manage Channel A's rules from Channel B
4. Attempt direct API calls to manage rules for channels without permissions
5. Login as regular user and attempt to access Channel Settings > Access Control
6. Verify users can only manage policies for their own channels
7. Test that channel ownership validation prevents cross-channel access

**Expected**

- Channel Admins can only manage rules for their own channels
- API endpoints validate channel ownership and permissions
- Users without MANAGE_CHANNEL_ACCESS_RULES permission cannot access features
- Cross-channel rule management is prevented
- All operations properly validate permissions server-side
