---
# (Required) Ensure all values are filled up
name: "Add User — Channel admins (Public only)"
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
id: 2746255
key: MM-T6
created_on: "2019-08-26T23:03:55Z"
last_updated: "2022-09-10T10:54:34Z"
case_hashed: 1abd0744ff42438625a5862bc9891ba46f2172a4afbac6c9d9cd40c61209caeff071bb74f0d794bbcddfe3432f876ab3
steps_hashed: 7431ac6172c283f44a5e0db4444657e0d5a8971949231bb6ebe3f1a0e8377565ffce887dcaf16b73f19ea186bc1ed5ad
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T6: Add User — Channel admins (Public only)

**Objective**

If manage channel member permissions is disabled for all members but manage public channels is enabled for Channel Admins, the Channel Admin will have permission to add members to **public channels** on the current team

---

**Step 1**

Step I:

1. Login as a System Admin
2. Click on the Product Switcher icon
3. Click System Console
4. Navigate to User Management → Permissions → Edit Scheme

Step II:

1. **Uncheck** "Manage Public Channels" and "Manage Private Channels" in the All Members section at the top

Step III:

1. **Check** "Manage Public Channels" and **Uncheck** "Manage Private Channels" in the Channel Admins section part way down the page

Step IV:

1. Log in as a [**Channel Admin**](https://docs.mattermost.com/help/getting-started/managing-members.html#channel-admin)
2. Click the name of any user in a public or private channel

Step V:

1. Click Add to a channel
2. Type in the first few letters of the channel name

Step VI:

1. Select the channel with your mouse - or scroll with the arrow keys and hit the ↵ (enter key)
2. Click Add

_Related ticket(s):_

(Cannot reproduce) [Channel admin able to see Private channels when adding member via popover (even though permission is disabled) — MM-25914](https://mattermost.atlassian.net/browse/MM-25914)

**Expected**

After step I

- System Scheme settings appear

After step II

- "Manage Public Channels" and "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**

After step III:

- "Manage Public Channels" are **checked/enabled** and "Manage Private Channels" boxes and all sub-settings under them are **unchecked/disabled**

After step IV:

- You **should** see the option to add a user to a channel in the profile pop-up

After step V:

- The list should filter to show only **Public** channels on the **current team** to match what you have typed

After step VI:

- The user is added to the channel
- You are returned to your previous state
- There is no direct feedback to you directly that the user has been added
- A system message is posted in that channel saying they have been added to the channel by you
