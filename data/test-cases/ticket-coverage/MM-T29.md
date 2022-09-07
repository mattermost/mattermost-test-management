---
name: "MM-17338 — Setting Require Email Verification to true will break the admin console"
status: Draft
priority: Normal
team_ownership: "QA Platform"
---

## MM-T29: MM-17338 — Setting Require Email Verification to true will break the admin console

---

**Step 1**

1. Login as an Admin
2. Navigate to ☰ menu → System Console → Authentication → Email
3. Toggle 'Require Email Verification' to **False** and Save
4. Navigate to System Console → Site Configuration → Notifications
5. Toggle 'Enable Email Notifications' to **False** and Save
6. Toggle 'Enable Email Notifications' to **True** and Save
7. Navigate back System Console → Authentication → Email
8. Toggle 'Require Email Verification' to **True** and Save

**Expected**

- Saved changes are accepted without error or anomaly

\
**Related bug**: [MM-17338](https://mattermost.atlassian.net/browse/MM-17338)
