---
# (Required) Ensure all values are filled up
name: "End user indicators: Add People modal shows attribute tags"
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
- end-user-indicators
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
key: MM-T5802
created_on: TBD
last_updated: ""
case_hashed: TBD
steps_hashed: TBD
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T5802: End user indicators: Add People modal shows attribute tags

**Precondition**

- Enterprise advanced (formerly known as Premium) license
- --env MM_FEATUREFLAGS_CustomProfileAttributes=true,MM_FEATUREFLAGS_AttributeBasedAccessControl=true
- Custom profile attributes have been created in System Console > System Attributes (Properties)
- Users have different attribute values assigned to their profiles
- ABAC policy exists and is active with channels assigned

---

**Step 1**

1. As a user with permission to add members to a channel, navigate to a channel that has an active ABAC policy
2. Open the Add People modal (via channel menu, member count dropdown, or other entry point)
3. In the user search/selection interface, observe the list of available users
4. Verify that each user displays their relevant attribute tags next to their name/profile in the modal
5. Search for specific users and verify attribute tags appear in search results
6. Check users with different attribute values to ensure tags display correctly
7. Verify that users without attribute values show appropriate indication (no tags or default state)

**Expected**

- Add People modal displays attribute tags for each user in the selection list
- Tags accurately reflect each user's current attribute values
- Tags are clearly visible and properly formatted in the modal interface
- Search results maintain attribute tag display
- Users without attribute values display appropriately (no misleading tags)
- Tag display is consistent across all users in the modal
