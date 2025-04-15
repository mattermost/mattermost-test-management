---
# (Required) Ensure all values are filled up
name: "Clearing Custom Profile Attributes"
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
3. Test user has Department value set to "Engineering"
4. Two user accounts exist and are members of the same channel

**Step 1**

Verify that users can clear custom profile attribute values and that cleared attributes with "when_set" visibility aren't displayed in the profile popover.

1. Login as the test user
2. Open profile settings
3. Edit Department field and delete all text to clear the value
4. Close the profile settings modal
5. Post a message "Testing cleared attributes" in the channel
6. Login as the other user
7. View the test user's profile popover

**Expected**

* Department attribute is not displayed in the profile popover (since it has visibility 'when_set' by default)
