---
# (Required) Ensure all values are filled up
name: "Ability to search by text and apply filters"
status: Active
priority: Normal
folder: New UI
authors: "@yasserfaraazkhan"
team_ownership: 
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
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

**Step 1**

Test requirements:

1. Have an instance with server version >= 9.6.

Steps:

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. In the `Search users` text box.
4. Search by `Username` and verify that relevant results are displayed.
5. Search by `First name` and verify that relevant results are displayed.
6. Search by `Last name` and verify that relevant results are displayed.
7. Search by `Nick name` and verify that relevant results are displayed.
8. Search by `Email` and verify that relevant results are displayed.
9. Search for text `No-relevant-text` and verify that `No data` is shown, if there's not match found.

Scenario: Search by applying Role Filter

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. Click on Filters button
4. From the Role dropdown select `System Admin` role.
5. Click on Apply
6. Verify the search result contains current user in the search results.
7. Click on Filters button.
8. From the Role dropdown select `Member` role.
9. Verify the search result contains only users with role Member.

Scenario: Search by applying Status Filter

1. Login into mattermost with admin account.
2. Navigate to System Console > Users.
3. Click on Filters button
4. From the Status dropdown select `Deactivated users` status.
5. Click on Apply
6. Verify the search result contains only Deactivated users in the search results.
7. Click on Filters button.
8. From the Status dropdown select `Active` status.
9. Verify the search result contains only Active users in the search results.
