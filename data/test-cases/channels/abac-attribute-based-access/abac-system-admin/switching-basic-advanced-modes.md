---
# (Required) Ensure all values are filled up
name: "Switching between Basic and Advanced modes in ABAC policy creation"
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
- policy-creation
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
key: MM-T5806
created_on: TBD
last_updated: ""
case_hashed: TBD
steps_hashed: TBD
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T5806: Switching between Basic and Advanced modes in ABAC policy creation

**Precondition**

- Enterprise advanced (formerly known as Premium) license
- --env MM_FEATUREFLAGS_CustomProfileAttributes=true,MM_FEATUREFLAGS_AttributeBasedAccessControl=true
- Custom profile attributes have been created in System Console > System Attributes (Properties)
- System admin has access to Attribute-Based Access page in System Console

---

**Step 1**

1. As system admin, navigate to Attribute-Based Access page in System Console
2. Click "Add policy" to create a new ABAC policy
3. Verify that the policy creation interface starts in Basic mode by default
4. In Basic mode, configure a simple policy using the dropdown selectors (Attribute, Operator, Value)
5. Switch to Advanced mode using the mode toggle/selector
6. Verify that the Basic mode configuration is preserved and translated into Advanced mode syntax
7. In Advanced mode, modify the policy using the advanced syntax editor
8. Switch back to Basic mode using the mode toggle/selector
9. Verify that the Advanced mode changes are preserved (if compatible with Basic mode) or appropriate handling occurs
10. Test switching multiple times between modes with different policy configurations

**Expected**

- Policy creation interface provides clear Basic and Advanced mode options
- Basic mode offers intuitive dropdown/form-based policy configuration
- Advanced mode provides syntax editor for complex policy creation
- Switching from Basic to Advanced preserves and translates the configuration correctly
- Switching from Advanced to Basic preserves compatible configurations
- Incompatible Advanced configurations are handled gracefully (with appropriate messaging)
- Mode switching is smooth and maintains user context
- Both modes produce functionally equivalent policies when using the same logic
- User can complete policy creation successfully in either mode
