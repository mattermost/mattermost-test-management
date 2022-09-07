---
name: "Add User — Channel admins (Public only)"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T6: Add User — Channel admins (Public only)

**Objective**

**Original test name from testing spreadsheet → **If manage channel member permissions is disabled for all members but manage public channels is enabled for Channel Admins, the Channel Admin will have permission to add members to **public channels** on the current team

**Precondition**

---

**Step 1**

Step I:

1. Login as a System Admin
2. Click on the Product Switcher icon
3. Click System Console
4. Navigate to User Management → Permissions → Edit Scheme

\
Step II:

1. **Uncheck** "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top

\
Step III:

1. **Check** "Manage Public Channels" and **Uncheck** "Manage Private Channels" in the Channel Admins section part way down the page

\
Step IV:

1. Log in as a [**Channel Admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#channel-admin)
2. Click the name of any user in a public or private channel

\
Step V:

1. Click Add to a channel
2. Type in the first few letters of the channel name

\
Step VI:

1. Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)
2. Click Add

**Test Data**

Step I:\
![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1566326710871-1566326710871.png)\
\
\
Step II:\
![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611652593330-1611652593330.png)\
\
Step III:\
![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611652682464-1611652682464.png)\
\
Step IV:\
![](https://smartbear-tm4j-prod-us-west-2-attachment-rich-text.s3.us-west-2.amazonaws.com/embedded-f3277290f945470c4add5d21ef3dc7ca7b74388fc7152bfb6b99ae58c66a95a8-1611652766162-1611652766162.png)

**Expected**

After step I

- System Scheme settings appear

\
After step II

- "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**

\
After step III:

- "Manage Public Channels" are **checked/enabled** and "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**

\
After step IV:

- You **should** see the option to add a user to a channel in the profile pop-up

\
After step V:

- The list should filter to show only **Public** channels on the **current team **to match what you have typed

\
After step VI:

- The user is added to the channel
- You are returned to your previous state
- There is no direct feedback to you directly that the user has been added
- A system message is posted in that channel saying they have been added to the channel by you
