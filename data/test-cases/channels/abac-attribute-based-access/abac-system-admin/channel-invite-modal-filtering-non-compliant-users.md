---
# (Required) Ensure all values are filled up
name: "Channel invite modal filtering non-abac-attribute-compliant users"
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
- channel-invite
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
key: MM-T5803
created_on: TBD
last_updated: ""
case_hashed: TBD
steps_hashed: TBD
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T5803: Channel invite modal filtering non-abac-attribute-compliant users

**Precondition**

- Enterprise advanced (formerly known as Premium) license
- --env MM_FEATUREFLAGS_CustomProfileAttributes=true,MM_FEATUREFLAGS_AttributeBasedAccessControl=true
- Custom profile attributes have been created in System Console > System Attributes (Properties)
- Multiple users exist with different attribute values (some compliant, some non-compliant with the policy)
- ABAC policy exists and is active with specific attribute requirements
- Channel is assigned to the ABAC policy

---

**Step 1**

1. As system admin, create an ABAC policy with specific attribute requirements (e.g., Department = "Engineering")
2. Assign a private channel to this policy
3. Ensure there are users who meet the policy requirements and users who do not
4. As a user with permission to invite others to the channel, navigate to the channel
5. Open the channel invite modal (via channel menu or other entry point)
6. Search for users in the invite modal
7. Verify that only users who meet the ABAC policy requirements appear in the search results
8. Attempt to search for users who do not meet the policy requirements by name
9. Verify that non-compliant users do not appear in search results or selection options

**Expected**

- Channel invite modal only displays users who meet the ABAC policy requirements
- Non-compliant users are filtered out and do not appear in search results
- Search functionality respects ABAC filtering rules
- Users cannot select or invite non-compliant users through the modal
- Appropriate messaging may be displayed explaining the filtering (if applicable)
- Filtering works consistently across different search terms and user attributes
