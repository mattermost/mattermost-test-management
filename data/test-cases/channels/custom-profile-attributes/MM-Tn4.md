---
# (Required) Ensure all values are filled up
name: "Hide Custom Profile Attributes When Visibility Is Set to Hidden"
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
2. Admin has created custom profile attributes (Department, Location, etc.)
3. Test user has values set for custom profile attributes
4. Two user accounts exist and are members of the same channel

---

**Step 1**

Verify that custom profile attributes with visibility set to hidden are not displayed in the profile popover.

1. As an admin, update the visibility of the Department attribute to "hidden"
2. Login as the test user
3. Go to a channel where the user is a member
4. Post a message to make the user visible in the channel
5. Open the profile popover for the user's post

**Expected**

- The Department attribute is not displayed in the profile popover, even though it has a value
- Other attributes with default visibility (when_set) are still displayed
- The hidden attribute is completely absent from the profile popover, not just visually hidden