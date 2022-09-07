---
name: "Add User — UserA & UserB (not on team)"
status: Active
priority: Low
team_ownership: "Channels"
---

## MM-T8: Add User — UserA & UserB (not on team)

**Objective**

- If **UserA** has never been a member of the current team, **UserB** should not see "Add to channel" option on **UserA's** profile pop-over
- **Original test name from testing spreadsheet → **"If UserA has never been a member of the current team, UserB should not see "Add to channel" option on UserA's profile pop-over (this test assumes permissions are in place for users to see the option on other users who belong to the team's profile pop-overs)"

**Precondition**

- This test assumes permissions are in place for users to see the option on other users who belong to the team's profile pop-overs

---

**Step 1**

1. Create a new team
2. @ mention a user in a channel on the new team that is not a member of your new team
3. Click the @ mention in the post you just made

**Expected**

On 2, @ mention is accepted as a post.\
On 3,

- User's profile popover opens
- "Add to Channel" should not be present as the member isn't part of the team
