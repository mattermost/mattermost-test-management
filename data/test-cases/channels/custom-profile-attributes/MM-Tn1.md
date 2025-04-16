---
# (Required) Ensure all values are filled up
name: "Display Custom Profile Attributes in Profile Popover"
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
2. Admin has created custom profile attributes:
   - Department (text field)
   - Location (text field)
   - Title (text field)
   - Phone (phone type field)
   - Website (URL type field)
3. Test user has values set for custom profile attributes
4. User is a member of a channel

---

**Step 1**

Verify that custom profile attributes are displayed correctly in the profile popover.

1. Login as the test user
2. Go to a channel where the user is a member
3. Post a message to make the user visible in the channel
4. Open the profile popover for the user's post (click on the user's avatar/name)

**Expected**

- All custom profile attributes with values are displayed in the profile popover
- Each attribute shows the label and value correctly
- Attributes are displayed in a consistent format and layout