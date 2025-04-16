---
# (Required) Ensure all values are filled up
name: "Always Display Custom Profile Attributes With Visibility Set to Always"
status: Active
priority: Normal
folder: Custom Profile Attributes
authors: "@saturninoabril"
team_ownership:
- Workflows
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Profile Popover
component: null
tags: []
labels: []
tested_by_contributor: "@saturninoabril"

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: in Production
rainforest: []
manual_test_environments: []

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Precondition**

1. A test server with valid license to support 'Custom Profile Attributes'
2. Admin has created custom profile attributes (Department, Location, Title, etc.)
3. A user exists who has no values set for custom profile attributes
4. Two user accounts exist and are members of the same channel

---

**Step 1**

Verify that custom profile attributes with visibility set to "always" are displayed in the profile popover even if they have no value.

1. As an admin, update the visibility of the Title attribute to "always"
2. Login as a user with no custom profile attribute values
3. Go to a channel where the user is a member
4. Post a message to make the user visible in the channel
5. Open the profile popover for the user's post

**Expected**

- The Title attribute is displayed in the profile popover even though it has no value
- The Title attribute label is visible
- Other attributes with default visibility (when_set) are not displayed since they have no values