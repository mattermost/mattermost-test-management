---
# (Required) Ensure all values are filled up
name: "LHS Add Channels CTA"
status: Active
priority: Normal
folder: channels
authors: "@stevemudie"
team_ownership: 
- Growth
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []

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

**Objective**

Ensure proper functionality of the LHS Add Channels CTA for users depending upon permission settings
- Permission enabled to create Public and/or Private channels
- Permission disabled to create Public and Private channels

---

**Step 1**

1. As an admin ensure that regular users are able to create public and/or private channels in the settings at `System Console ➜ User Management ➜ Permissions`
2. As a regular user click the `Add Channels` CTA on the LHS which should display a small menu with 2 items on it
  - `Create new channel` - which opens the `Create a new channel` modal when clicked on
  - `Browse channels` - which opens the `More channels` modal when clicked
3. As the admin disable the creation of **both** Public and Private channels for regular users
4. As the regular user click the `Add Channels` CTA on the LHS which should open the `More channels` modal directly and not display any menu under the CTA

**Test Data**
![](https://raw.githubusercontent.com/mattermost/mattermost-test-management/main/data/asset/add_channels_cta.png)

**Expected**
- Everything worked as expected based upon the steps described
