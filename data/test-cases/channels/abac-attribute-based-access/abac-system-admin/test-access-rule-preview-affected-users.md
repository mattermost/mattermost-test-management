---
# (Required) Ensure all values are filled up
name: "Test Access Rule preview showing affected users by the policy"
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
- test-access-rule
- preview
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
key: MM-T5808
created_on: TBD
last_updated: ""
case_hashed: TBD
steps_hashed: TBD
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T5808: Test Access Rule preview showing affected users by the policy

**Precondition**

- Enterprise advanced (formerly known as Premium) license
- --env MM_FEATUREFLAGS_CustomProfileAttributes=true,MM_FEATUREFLAGS_AttributeBasedAccessControl=true
- Custom profile attributes have been created in System Console > System Attributes (Properties)
- Multiple users exist with different attribute values assigned to their profiles
- System admin has access to Attribute-Based Access page in System Console

---

**Step 1**

1. As system admin, navigate to Attribute-Based Access page in System Console
2. Click "Add policy" to create a new ABAC policy
3. Configure policy settings (name, auto-add preference, etc.)
4. Set up policy conditions using either Basic or Advanced mode (e.g., Department = "Engineering")
5. Before saving the policy, click the "Test Access Rule" button/link
6. Observe the preview results showing which users would be affected by this policy
7. Verify that the preview accurately lists users who meet the policy criteria
8. Verify that users who do not meet the criteria are not included in the preview
9. Test with different policy configurations and verify preview accuracy:
   - Single attribute condition
   - Multiple attribute conditions with AND logic
   - Multiple attribute conditions with OR logic
   - Complex nested conditions (if supported)
10. Modify the policy conditions and re-run "Test Access Rule" to verify updated results

**Expected**

- "Test Access Rule" functionality is available during policy creation/editing
- Preview accurately shows all users who would be affected by the current policy configuration
- Preview excludes users who do not meet the policy criteria
- User list includes relevant user information (name, username, attributes, etc.)
- Preview updates correctly when policy conditions are modified
- Preview works for both Basic and Advanced mode policy configurations
- Results are clearly presented and easy to understand
- Preview helps admin validate policy logic before implementation
- Performance is acceptable even with large user bases
- Preview functionality works consistently across different policy complexity levels
