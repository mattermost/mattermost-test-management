---
# (Required) Ensure all values are filled up
name: "Mobile app end user indicators: Add Members screen shows attribute indicators"
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
- mobile
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
key: MM-T5805
created_on: TBD
last_updated: ""
case_hashed: TBD
steps_hashed: TBD
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T5805: Mobile app end user indicators: Add Members screen shows attribute indicators

**Precondition**

- Enterprise advanced (formerly known as Premium) license
- --env MM_FEATUREFLAGS_CustomProfileAttributes=true,MM_FEATUREFLAGS_AttributeBasedAccessControl=true
- Custom profile attributes have been created in System Console > System Attributes (Properties)
- Users have different attribute values assigned to their profiles
- ABAC policy exists and is active with channels assigned
- Mobile app (iOS or Android) is installed and configured

---

**Step 1**

1. On mobile device, log in to Mattermost mobile app as a user with permission to add members to channels
2. Navigate to a channel that has an active ABAC policy
3. Access the Add Members screen for the channel (via channel menu, member management, or other entry point)
4. Observe the user search/selection interface on the mobile Add Members screen
5. Verify that each available user displays their relevant attribute indicators/tags next to their name/profile
6. Search for specific users and verify attribute indicators appear in mobile search results
7. Check users with different attribute values to ensure indicators display correctly on mobile
8. Verify that users without attribute values show appropriate indication (no tags or default state)
9. Test the selection process to ensure indicators remain visible during user selection
10. Test on both portrait and landscape orientations if applicable

**Expected**

- Mobile Add Members screen displays attribute indicators for each available user
- Indicators accurately reflect each user's current attribute values
- Indicators are clearly visible and properly formatted for mobile interface
- Search results maintain attribute indicator display on mobile
- Display is optimized for mobile screen size and touch interaction
- Users without attribute values display appropriately (no misleading indicators)
- Indicator display is consistent across all users in the mobile selection interface
- Selection process maintains indicator visibility and functionality
- Functionality works consistently across different mobile orientations
