---
# (Required) Ensure all values are filled up
name: "Add User — Public ON / Private OFF"
status: Active
priority: Low
folder: Add user from popover
authors: ""
team_ownership:
- Channels
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

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
id: 2746252
key: MM-T3
created_on: "2019-08-26T23:03:54Z"
last_updated: "2022-09-10T10:54:35Z"
case_hashed: 46b5ed3fc424aa53e96bb59939739facdbcff577768ec9bf48b87a5642440022c64d607fd6e533861094e3e1d27f51bc
steps_hashed: c35ecfbcf28df728f9036ac69ade2f3c0370ce52cdd81d5e85ee914d4c342ab372578a44930725bf2ea301f458eb4b77
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T3: Add User — Public ON / Private OFF

**Objective**

If the user has manage channel member permissions for public OR private channels, show the option in the profile pop-over

---

**Step 1**

Step I:

1. Login as a System Admin
2. Click on the Product Switcher menu
3. Click System Console
4. Navigate to User Management → Permissions → Edit Scheme

Step II:

1. **Check** "Manage Public Channels" and **uncheck** "Manage Private Channels" in the All Members section at the top.

Step III:

1. Login as a non-admin **Member** to the same server
2. Click the name of any user in a public or private channel

Step IV:

1. Click Add to a channel
2. Type in the first few letters of the channel name

**Expected**

After step I:

- System Scheme settings appear

After step II:

- "Manage Public Channels" are **checked/enabled** while "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**.

After step III:

- You should see the option to add a user to a channel in the profile pop-up

After step IV:

- Private channels will not appear in the autocomplete (even if you are a member of the private channel).
