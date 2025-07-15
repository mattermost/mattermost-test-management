---
# (Required) Ensure all values are filled up
name: "Advanced mode syntax validation and error messaging"
status: Draft
priority: Normal
folder: ABAC System Admin
authors: "lindalumitchell"
team_ownership: []
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: null
component: null
tags: []
labels:
- abac
- info-control
- enterprise-advanced
- advanced-mode
- validation
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
key: MM-T5807
created_on: TBD
last_updated: ""
case_hashed: TBD
steps_hashed: TBD
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T5807: Advanced mode syntax validation and error messaging

**Precondition**

- Enterprise advanced (formerly known as Premium) license
- --env MM_FEATUREFLAGS_CustomProfileAttributes=true,MM_FEATUREFLAGS_AttributeBasedAccessControl=true
- Custom profile attributes have been created in System Console > System Attributes (Properties)
- System admin has access to Attribute-Based Access page in System Console

---

**Step 1**

1. As system admin, navigate to Attribute-Based Access page in System Console
2. Click "Add policy" to create a new ABAC policy
3. Switch to Advanced mode using the mode toggle/selector
4. Test invalid syntax scenarios in the Advanced mode editor:
   - Enter malformed expressions (e.g., missing operators, unbalanced parentheses)
   - Use invalid attribute names that don't exist
   - Use incorrect operator syntax
   - Enter incomplete expressions
5. Verify that appropriate error messages are displayed for each invalid syntax
6. Test valid complex syntax scenarios:
   - Multiple attribute conditions with AND/OR operators
   - Nested expressions with proper parentheses
   - Complex string matching and comparison operations
   - Valid attribute names and operators
7. Verify that valid syntax is accepted and processed correctly
8. Test real-time validation (if available) vs. validation on save/submit
9. Verify that error messages are clear, specific, and helpful for troubleshooting

**Expected**

- Advanced mode provides syntax validation for policy expressions
- Invalid syntax triggers clear, specific error messages
- Error messages indicate the location and nature of syntax errors
- Valid complex expressions are accepted and processed correctly
- Validation occurs at appropriate times (real-time and/or on save)
- Error messages provide helpful guidance for correcting syntax issues
- Advanced mode supports complex logical expressions with proper operator precedence
- Syntax highlighting or formatting aids (if available) work correctly
- User can successfully create complex policies using Advanced mode syntax
