---
# (Required) Ensure all values are filled up
name: "Disabling email notifications should not disable email invites"
status: Active
priority: Normal
folder: Notifications
authors: ""
team_ownership: 
- Channels
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: System Console
component: null
tags:
- Cloud N/A
labels: 
- Cloud-N/A
- system-console
- fix-versions-not-empty-2022cleanup
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: Ticket Open
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments:
- Webapp

# Do not change
id: 2746386
key: MM-T10
created_on: "2019-08-26T23:46:53Z"
last_updated: ""
case_hashed: 20281e60f3ea07628d3c625b71a2c8245041a7626fc6e1377be572a24d6ba1eda196f7a9d8b9a319cafa3355b3e179b9
steps_hashed: 1f7bf0cbd8ac439c4b64b8fb07beba93bc9e05a25a665fd7262a418b8c63c477a73ac41e04231b4b5a94b16aa84b9dfa
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T10: Disabling email notifications should not disable email invites

---

**Step 1**

Disabling email notifications should not disable email invites\
–––––––––––––––––––––––––

1. As system admin, go to System Console → Site Configuration → Notifications and set `Enable Email Notifications` to `false`, then Save
2. Still in System Console, go to Authentication → Signup and set Enable Email Invitations to `true`, then Save
3. Go back to any team, click ☰ main menu and select Invite People
4. If necessary, click to Invite Member so you see the invite screen
5. Enter a valid email address that you can check in the Add or Invite People field, then click Invite Members

_Related ticket(s):_

[Disabling email notifications also disables email invites — MM-15661](https://mattermost.atlassian.net/browse/MM-15661)

**Expected**

- Form allows sending an invite via email when email notifications are disabled
- User who was invited receives the invite email
