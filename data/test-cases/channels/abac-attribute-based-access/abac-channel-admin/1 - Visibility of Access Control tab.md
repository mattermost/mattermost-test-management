---
# (Required) Ensure all values are filled up
name: "Visibility of Access Control tab in Channel Settings"
status: Active
priority: Normal
folder: ABAC Channel Admin
authors: ""
team_ownership:
- Information Control
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: ABAC Channel Admin
component: null
tags: []
labels:
- channel-settings
- access-control
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: TBD
key: TBD
created_on: TBD
last_updated: ""
case_hashed: TBD
steps_hashed: TBD
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T: Visibility of Access Control tab in Channel Settings

---

**Step 1**

Verify Access Control tab appears for eligible users and channels

1. Login as a Channel Admin user
2. Navigate to a private channel where user has Channel Admin permissions
3. Open Channel Settings modal from channel name drop-down
4. Verify "Access Control" tab is visible and accessible
5. Switch to a public channel and repeat steps 2-4
6. Login as a regular user (non-admin) and repeat steps 2-4 for private channel

**Expected**

- Access Control tab is visible for Channel Admins in private channels only
- Tab is hidden for public channels
- Tab is hidden for non-admin users in private channels
- Tab displays appropriate content when clicked
