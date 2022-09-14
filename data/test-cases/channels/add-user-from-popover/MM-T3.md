---
# (Required) Ensure all values are filled up
name: "Add User — Public ON / Private OFF"
status: Active
priority: Low
folder: Add user from popover
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Add user to channel from popover
component: null
tags: []
labels: 
- cy-prod

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
case_hashed: c1e381aafbba2f22708a9d47e6c9e0e0d9d43a3968db1ba55c73d77520e9ffae8af72d064e03b458409d08ad81579d87
steps_hashed: 2c72a705ba316a448773f5090e45621354f727272f418c3b55e0ff7857c3e0999265a0b72dee034c734dd16d4de96824
---

<!-- auto-generated based on "key" and "name" -->

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

**Test Data**

Step I:\
![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566316335687-1566316335686.png)\
\
Step II:\
![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611653231134-1611653231134.png)\
\
Step III:\
![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611653328349-1611653328349.png)

**Expected**

After step I:

- System Scheme settings appear

After step II:

- "Manage Public Channels" are **checked/enabled** while "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**.

After step III:

- You should see the option to add a user to a channel in the profile pop-up

After step IV:

- Private channels will not appear in the autocomplete (even if you are a member of the private channel).
