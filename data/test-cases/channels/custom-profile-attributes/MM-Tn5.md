---
# (Required) Ensure all values are filled up
name: "URL Validation in Custom Profile Attributes"
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
2. Admin has created Website custom profile attribute with URL validation
3. Test user has Website value set to "https://example.com"

**Step 1**

Verify that URL validation works properly for custom profile attributes, showing errors for invalid URLs and allowing valid ones.

1. Login as the test user
2. Open profile settings
3. Edit Website field and enter an invalid URL "ftp://invalid-url"
4. Try to save the changes
5. Observe error message
6. Edit Website field and enter a valid URL "https://example2.com"
7. Save the changes

**Expected**

* System shows error message "Please enter a valid url." when invalid URL is entered
* Save button doesn't complete the operation with invalid URL
* Valid URL saves successfully with no error message
