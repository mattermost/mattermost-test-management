---
# (Required) Ensure all values are filled up
name: "Add User — Any user (can add users)"
status: Active
priority: Low
folder: Add user from popover
authors: ""
team_ownership:
- Channels
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Add user to channel from popover
component: null
tags: []
labels:
- cy-prod
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest:
- N/A
manual_test_environments:
- Automated - No manual tests needed

# Do not change
id: 2746258
key: MM-T9
created_on: "2019-08-26T23:03:55Z"
last_updated: "2022-09-10T10:54:34Z"
case_hashed: ecd3dae0791a58c2d5213013cdf073d301249e2b1ca0775ec8df3edd080e2961476f479f35b54b25c30e25db5c2271e4
steps_hashed: 488625ccb847eb7b7e6af00bd951c5ad8d35c1193b14f03f7bd5bbd5b33429222a460629c5d091685523e8656ef7d3d5
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T9: Add User — Any user (can add users)

**Objective**

Only the users who have permissions to manage channel members will be able to see this option.

---

**Step 1**

1. Login as a System Admin and navigate to System Console → Navigate to User Management → Permissions → Edit Scheme

2. **Check** "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top.

3. Login as a Member to the same server

   1. Click the name of any user in a public or private channel

4. Click Add to a channel and type in the first few letters of the channel name

   1. **Note**: Users are only able to add users to channels to which they belong. Channel names you don't belong to will not appear as you type by default.

5. Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)

   1. Click Add

**Expected**

1. System Scheme settings appear

2. "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **checked/enabled**.

3. You should see the option to add a user to a channel in the profile pop-up

4. The list filters to match what you've typed

5. Should expect the ff:

   1. The user is added to the channel
   2. You are returned to your previous state
   3. There is no direct feedback to you directly that the user has been added
   4. A system message is posted in that channel saying they have been added to the channel by you
