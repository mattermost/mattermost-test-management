---
name: "Add User — Public OFF / Private ON"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T4: Add User — Public OFF / Private ON

**Objective**

**Original test name from testing spreadsheet →** If the user has only manage channel member permissions for private channels, then show the option in the profile pop-over and only show private channels in the channel dropdown.

**Precondition**

---

**Step 1**

Step I:

1. Login as a System Admin
2. Click on the Product Switcher icon
3. Click on System Console
4. Navigate to User Management → Permissions → Edit Scheme

\
Step II:

1. **UnCheck** "Manage Public Channels" and **check** "Manage Private Channels" in the All Members section at the top.

\
Step III:

1. Login as a non-admin **Member** to the same server
2. Click the name of any user in a public or private channel

\
Step IV:

1. Click Add to a channel
2. Type in the first few letters of the channel name

**Test Data**

Step I:\
![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566319668503-1566319668503.png)\
\
Step II:\
![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611653822603-1611653822603.png)\
\
Step III:\
![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611653867342-1611653867342.png)

**Expected**

After Step I:

- System Scheme settings appear

\
After Step II:

- "Manage Public Channels" are **un****checked/disabled **while "Manage Private Channels" boxes and all sub-settings under them are **checked/enabled**.

\
After Step III:

- You should see the option to add a user to a channel in the profile pop-up

\
After Step IV:

- Public channels will not appear in the autocomplete but Private channels (that you are a member of) will appear.
