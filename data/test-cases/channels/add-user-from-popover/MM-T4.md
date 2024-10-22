---
# (Required) Ensure all values are filled up
name: "Add User — Public OFF / Private ON"
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
id: 2746253
key: MM-T4
created_on: "2019-08-26T23:03:54Z"
last_updated: "2022-09-10T10:54:32Z"
case_hashed: afdd3b21e2dc37ccb5080df7f78c3d6d074edfb61bbd6ce26f8341b44d5053e02604f9414efc376bb2abf285a005422a
steps_hashed: 625afef54eb2a283613ea93f386253fa59a86f1f1c8219bd63beaafc1bed3e6a6718c26b50657e7946178a8bfb023935
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T4: Add User — Public OFF / Private ON

**Objective**

If the user has only manage channel member permissions for private channels, then show the option in the profile pop-over and only show private channels in the channel dropdown.

---

**Step 1**

Step I:

1. Login as a System Admin
2. Click on the Product Switcher icon
3. Click on System Console
4. Navigate to User Management → Permissions → Edit Scheme

Step II:

1. **UnCheck** "Manage Public Channels" and **check** "Manage Private Channels" in the All Members section at the top.

Step III:

1. Login as a non-admin **Member** to the same server
2. Click the name of any user in a public or private channel

Step IV:

1. Click Add to a channel
2. Type in the first few letters of the channel name

**Test Data**

Step I:\
![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566319668503-1566319668503.png)\
\
Step II:\
![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611653822603-1611653822603.png)\
\
Step III:\
![](https://cloudfront.tm4j.smartbear.com/tenant/ad722c15-e2a6-3788-82f3-92f99221f446/project/10302/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611653867342-1611653867342.png)

**Expected**

After Step I:

- System Scheme settings appear

After Step II:

- "Manage Public Channels" are **unchecked/disabled** while "Manage Private Channels" boxes and all sub-settings under them are **checked/enabled**.

After Step III:

- You should see the option to add a user to a channel in the profile pop-up

After Step IV:

- Public channels will not appear in the autocomplete but Private channels (that you are a member of) will appear.
