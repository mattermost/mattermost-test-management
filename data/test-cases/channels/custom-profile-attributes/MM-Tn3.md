---
# (Required) Ensure all values are filled up
name: "Cancelling Changes to Custom Profile Attributes"
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

**Step 1**

Verify that cancelling changes to custom profile attributes properly discards the changes without saving them.

1. Login as the test user
2. Open profile settings
3. Edit Department field and change to "Changed Value"
4. Click Cancel button
5. Open Department field for editing again

**Expected**

* After cancelling, Department field should still show original value "Engineering"
* All changes are discarded when Cancel is clicked
