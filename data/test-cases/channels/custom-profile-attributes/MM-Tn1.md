---
# (Required) Ensure all values are filled up
name: "Editing Custom Profile Attributes"
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
2. Admin has created custom profile attributes:
 - Department (text field)
 - Location (select field with options: Remote, Office, Hybrid)
 - Skills (multiselect field with options: JavaScript, React, Node.js, Python)
 - Phone (text field with phone validation)
 - Website (text field with URL validation)
3. Test user has initial values:
 - Department: Engineering
 - Phone: 555-123-4567
 - Website: https://example.com
4. Two user accounts (test user and other user) exist
5. Both users are members of the same channel

**Step 1**

Verify that users can edit different types of custom profile attributes (text, select, and multiselect fields) and that changes appear correctly in the profile popover.

1. Login as the test user
2. Open profile settings (click profile picture > Profile)
3. Edit the Department attribute and change to "Product"
4. Edit the Location attribute (select field) and select "Office"
5. Edit the Skills attribute (multiselect field) and select "Python" and "Node.js"
6. Close the profile settings modal
7. Post a message "Hello from the test user" in the channel
8. Login as the other user to view the profile popover
9. View the test user's profile popover

**Expected**

* Profile popover shows updated custom attributes: Department: Product, Location: Office, Skills: Python and Node.js
