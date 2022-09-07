---
name: "Add User — Any user (can add users)"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T9: Add User — Any user (can add users)

**Objective**

Only the users who have permissions to manage channel members should see the option to add a user to a channel on the profile pop-up.\
\
\
**Original test name from testing spreadsheet → **Only the users who have permissions to manage channel members will be able to see this option.

**Precondition**

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

**Test Data**

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
