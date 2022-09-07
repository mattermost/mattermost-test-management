---
name: "Add User — Team admins (Private only)"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T7: Add User — Team admins (Private only)

**Objective**

**Original test name from testing spreadsheet → **If manage channel member permissions is disabled for all members but manage private channels is enabled for Team Admins, the Team Admin will have permission to add members to **private channels **on the current team

**Precondition**

---

**Step 1**

1. Login as a System Admin and navigate to System Console → User Management → Permissions → Edit Scheme

2. **Uncheck** "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top

3. **Uncheck** "Manage Public Channels" and **C****heck** "Manage Private Channels" in the Team Admins section part way down the page

4. Using the desktop app log in as a [**Team Admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#team-admin) and click the name of any user in a public or private channel

5. Click Add to a channel and type in the first few letters of the channel name

6. Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)

   1. Click Add

**Test Data**

**Expected**

1. System Scheme settings appear

2. "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**

3. "Manage Public Channels" are unchecked/disabled and "Manage Private Channels" boxes and all sub-settings under them are checked/enabled

4. You **should** see the option to add a user to a channel in the profile pop-up

5. The list should filter to show only **Private** channels on the **current team **to match what you have typed

6. Should expect the ff:

   1. The user is added to the channel
   2. You are returned to your previous state
   3. There is no direct feedback to you directly that the user has been added
   4. A system message is posted in that channel saying they have been added to the channel by you
