---
# (Required) Ensure all values are filled up
name: "Add User — User A & User B (not on team)"
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
- fix-versions-not-empty-2022cleanup
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
id: 2746257
key: MM-T8
created_on: "2019-08-26T23:03:55Z"
last_updated: "2023-01-05T20:36:02Z"
case_hashed: d3cbe6dc72a1129b0933a0e2dc57e19d18e5987252e45a52ea29a50eeffc5178b35bd4d045d373eea5d92e45c91b3d5a
steps_hashed: a683d0d652148eb10a1499fbdf87aa747e7b4beaeb4ba05c253fd9e0eb4660898f36a0ad736636a179dc9b7d50b89b4d
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T8: Add User — User A & User B (not on team)

**Objective**

- If User A has never been a member of the current team, **User B** should not see "Add to channel" option on **users's** profile pop-over

**Precondition**

- This test assumes permissions are in place for users to see the option on other users who belong to the team's profile pop-overs

---

**Step 1**

1. Create a new team
2. @ mention a user in a channel on the new team that is not a member of your new team
3. Click the @ mention in the post you just made

_Related ticket(s):_

[Non-obvious error when trying to add a user via "Add to a Channel" profile popover option to a channel within a team they don't belong to — MM-16056](https://mattermost.atlassian.net/browse/MM-16056)

**Expected**

On 2, @ mention is accepted as a post.\
On 3,

- User's profile popover opens
- "Add to Channel" should not be present as the member isn't part of the team
