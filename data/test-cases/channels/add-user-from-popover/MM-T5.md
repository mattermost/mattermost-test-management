---
# (Required) Ensure all values are filled up
name: "Add User — UserA & UserB (removed from team)"
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
id: 2746254
key: MM-T5
created_on: "2019-08-26T23:03:55Z"
last_updated: "2022-09-10T10:54:32Z"
case_hashed: 3bd0ca593707a9b8714cdbb240aa0298cb5e97f0173d483917574d56f0607b1992cd0283b3ef84958222e178fa53521f
steps_hashed: f48aec372a850c54fc039377bad5359b74fde0b99c45740b74c295532fceca5c952af78e0c17f73c8d07719c0cae4843
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T5: Add User — UserA & UserB (removed from team)

**Objective**

If **UserB** has been removed from the current team, **UserA** should not see "Add to channel" option on **UserB's** profile pop-over

**Precondition**

- This test assumes permissions are in place for users to see the option on other users who belong to the team's profile pop-overs

---

**Step 1**

1. Remove a member from a team
2. @ mention the user you just removed in a channel
3. Click the @ mention in the post you just made

_Related ticket(s):_

(**Story**) ["Add to channel" option is visible on a user's profile pop-over when they've been removed from a team — MM-17413](https://mattermost.atlassian.net/browse/MM-17413)

**Expected**

After #2,

- @ mention is accepted as a post

After #3,

- "Add to Channel" should not be present as the member has been removed from the team
