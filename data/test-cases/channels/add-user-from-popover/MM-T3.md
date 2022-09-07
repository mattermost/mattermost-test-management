---
name: "Add User — Public ON / Private OFF"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T3: Add User — Public ON / Private OFF

**Objective**

**Original test name from testing spreadsheet → **If the user has manage channel member permissions for public OR private channels, show the option in the profile pop-over

**Precondition**

---

**Step 1**

Step I:

1. Login as a System Admin
2. Click on the Product Switcher menu
3. Click System Console
4. Navigate to User Management → Permissions → Edit Scheme

\
Step II:

1. **Check** "Manage Public Channels" and **uncheck** "Manage Private Channels" in the All Members section at the top.

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

\
After step II:

- "Manage Public Channels" are **checked/enabled **while "Manage Private Channels" boxes and all sub-settings under them are **un****checked/disabled**.

\
After step III:

- You should see the option to add a user to a channel in the profile pop-up

\
After step IV:

- Private channels will not appear in the autocomplete (even if you are a member of the private channel).
