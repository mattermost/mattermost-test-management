---
# (Required) Ensure all values are filled up
name: "Add User — Team admins (Private only)"
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
id: 2746256
key: MM-T7
created_on: "2019-08-26T23:03:55Z"
last_updated: "2022-09-10T10:54:36Z"
case_hashed: 4502f0a344e65c40faa02794354be0904b4ff45399c2e0af0578f1bdf225defdbe45e89be2fe0ccbadd12b42600ff725
steps_hashed: c30deebd362ac55789ac1f9f406f5eae591a7277dc25cfc0e20b3056e49ac217a41285e5f9a7a2f0d61da7b3c17f97b2
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T7: Add User — Team admins (Private only)

**Objective**

If manage channel member permissions is disabled for all members but manage private channels is enabled for Team Admins, the Team Admin will have permission to add members to _private channels_ on the current team

---

**Step 1**

1. Login as a System Admin and navigate to System Console → User Management → Permissions → Edit Scheme

2. **Uncheck** "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top

3. **Uncheck** "Manage Public Channels" and **Check** "Manage Private Channels" in the Team Admins section part way down the page

4. Using the desktop app log in as a [**Team Admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#team-admin) and click the name of any user in a public or private channel

5. Click Add to a channel and type in the first few letters of the channel name

6. Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)

   1. Click Add

**Expected**

1. System Scheme settings appear

2. "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**

3. "Manage Public Channels" are unchecked/disabled and "Manage Private Channels" boxes and all sub-settings under them are checked/enabled

4. You **should** see the option to add a user to a channel in the profile pop-up

5. The list should filter to show only **Private** channels on the _current team_ to match what you have typed

6. Should expect the ff:

   1. The user is added to the channel
   2. You are returned to your previous state
   3. There is no direct feedback to you directly that the user has been added
   4. A system message is posted in that channel saying they have been added to the channel by you
