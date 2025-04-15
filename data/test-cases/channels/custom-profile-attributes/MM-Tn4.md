---
# (Required) Ensure all values are filled up
name: "Editing Phone and URL Type Custom Profile Attributes"
status: Active
priority: Normal
folder: Custom Profile Attributes
authors: "@saturninoabril"
team_ownership:
- Workflows
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

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

1. Mattermost server with valid license to support "Custom Profile Attributes" feature
2. Admin has created custom profile attributes
3. Test user has initial values:
 - Phone: 555-123-4567
 - Website: https://example.com
4. Two user accounts exist and are members of the same channel

**Step 1**

Verify that users can edit custom profile attributes with specialized formats (phone numbers and URLs) and that they display correctly in the profile popover.

1. Login as the test user
2. Open profile settings
3. Edit Phone field and change to "555-987-6543"
4. Edit Website field and change to "https://mattermost.com"
5. Close the profile settings modal
6. Post a message "Testing phone and URL attributes" in the channel
7. Login as the other user
8. View the test user's profile popover

**Expected**

* Profile popover shows updated attributes: Phone: 555-987-6543, Website: https://mattermost.com
