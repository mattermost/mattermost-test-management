---
name: "Add User — UserA & UserB (removed from team)"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T5: Add User — UserA & UserB (removed from team)

**Objective**

If **UserB** has been removed from the current team, **UserA** should not see "Add to channel" option on **UserB's** profile pop-over\
\
**Original test name from testing spreadsheet → **"If UserA has been removed from the current team, UserB should not see ""Add to channel"" option on UserA's profile pop-over\
(this test assumes permissions are in place for users to see the option on other users who belong to the team's profile pop-overs)"

**Precondition**

- This test assumes permissions are in place for users to see the option on other users who belong to the team's profile pop-overs

---

**Step 1**

1. Remove a member from a team
2. @ mention the user you just removed in a channel 
3. Click the @ mention in the post you just made

**Expected**

After #2,

- @ mention is accepted as a post

\
After #3,

- "Add to Channel" should not be present as the member has been removed from the team
