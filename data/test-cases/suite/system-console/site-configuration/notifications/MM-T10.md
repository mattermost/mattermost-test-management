---
name: "Disabling email notifications should not disable email invites"
status: Active
priority: Normal
team_ownership: "Channels"
---

## MM-T10: Disabling email notifications should not disable email invites

---

**Step 1**

Disabling email notifications should not disable email invites\
–––––––––––––––––––––––––

1. As system admin, go to System Console → Site Configuration → Notifications and set \`Enable Email Notifications\` to \`false\`, then Save
2. Still in System Console, go to Authentication → Signup and set Enable Email Invitations to \`true\`, then Save
3. Go back to any team, click ☰ main menu and select Invite People
4. If necessary, click to Invite Member so you see the invite screen
5. Enter a valid email address that you can check in the Add or Invite People field, then click Invite Members

**Expected**

- Form allows sending an invite via email when email notifications are disabled
- User who was invited receives the invite email
