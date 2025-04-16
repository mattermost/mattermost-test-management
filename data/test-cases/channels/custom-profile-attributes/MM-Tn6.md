---
# (Required) Ensure all values are filled up
name: "Display Phone and URL Type Custom Profile Attributes Correctly"
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
2. Admin has created custom profile attributes including:
   - Phone (phone type field with value "555-123-4567")
   - Website (URL type field with value "https://example.com")
3. Test user has values set for these custom profile attributes
4. User is a member of a channel

---

**Step 1**

Verify that phone and URL type custom profile attributes are displayed correctly in the profile popover.

1. Login as the test user
2. Go to a channel where the user is a member
3. Post a message to make the user visible in the channel
4. Open the profile popover for the user's post

**Expected**

- Phone attribute displays correctly with the value "555-123-4567"
- Website attribute displays correctly with the value "https://example.com"
- Both specialized attribute types are formatted appropriately
- Values are displayed with the correct formatting for their data type