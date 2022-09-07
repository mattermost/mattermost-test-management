---
name: "MM-16511 — "Someone is typing""
status: Draft
priority: Normal
team_ownership: "QA Platform"
---

## MM-T22: MM-16511 — "Someone is typing"

---

**Step 1**

1. Log in and create a new channel
2. Have another user has never DMed the first user join that channel
3. Delete the "User has joined the channel" message
4. Refresh
5. Have the other user start typing

**Expected**

- "Someone is typing" may still appear briefly, but the user's name should be loaded shortly after (replacing "Someone")

\
**Related bug**: [MM-16511](https://mattermost.atlassian.net/browse/MM-16511)
