---
# (Required) Ensure all values are filled up
name: "License restrictions and permission restrictions for ABAC feature"
status: Draft
priority: Normal
folder: ABAC System Admin
authors: "lindalumitchell"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels:
- abac
- info-control
- enterprise-advanced
- license-restrictions
- permissions
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
key: MM-T5809
created_on: TBD
last_updated: ""
case_hashed: TBD
steps_hashed: TBD
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T5809: License restrictions and permission restrictions for ABAC feature

**Precondition**

- Access to Mattermost instances with different license types (Enterprise Advanced, Enterprise, Professional, Free)
- --env MM_FEATUREFLAGS_CustomProfileAttributes=true,MM_FEATUREFLAGS_AttributeBasedAccessControl=true
- System admin access on test instances

---

**Step 1**

Test ABAC feature availability with Enterprise Advanced license:

1. On a server with Enterprise Advanced (formerly Premium) license, log in as system admin
2. Navigate to System Console > User Management
3. Verify that "Attribute-based access" option is visible and accessible
4. Verify that all ABAC functionality is available (policy creation, management, etc.)
5. Create and test an ABAC policy to confirm full functionality

**Expected**

- Attribute-based access option is visible in System Console
- All ABAC features are fully functional
- Policy creation, editing, and management work as expected

---

**Step 2**

Test ABAC feature restrictions with lower license types:

1. On a server with Enterprise license (not Advanced), log in as system admin
2. Navigate to System Console > User Management
3. Verify that "Attribute-based access" option is either hidden or shows appropriate license restriction messaging
4. Repeat test with Professional license
5. Repeat test with Free license
6. If the option is visible but restricted, verify that appropriate upgrade messaging is displayed
7. Verify that existing ABAC policies (if any) are not enforced on lower license tiers

**Expected**

- ABAC feature is not available on Enterprise, Professional, or Free licenses
- Appropriate messaging indicates that Enterprise Advanced license is required
- Clear upgrade path or licensing information is provided
- Existing policies are disabled/not enforced on insufficient license tiers

---

**Step 3**

Test permission restrictions for different user roles:

1. On Enterprise Advanced licensed server, test ABAC access with different user roles:
   - System Admin (should have full access)
   - Team Admin (should not have access to system-level ABAC settings)
   - Channel Admin (should not have access to system-level ABAC settings)
   - Regular User (should not have access to system-level ABAC settings)
2. Verify that only System Admins can access Attribute-based access in System Console
3. Test that non-system-admin users receive appropriate permission denied messages
4. Verify that ABAC policies still affect non-admin users appropriately (they are subject to policies but cannot create/modify them)

**Expected**

- Only System Admins have access to ABAC configuration in System Console
- Non-system-admin users receive clear permission restriction messages
- ABAC policies apply to all users regardless of their admin status
- Permission restrictions are consistently enforced across the interface
