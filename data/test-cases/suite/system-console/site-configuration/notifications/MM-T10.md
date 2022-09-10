---
# (Required) Ensure all values are filled up
name: "Disabling email notifications should not disable email invites"
status: Active
priority: Normal
folder: Notifications
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: Ticket Open
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: 
- Webapp

# (Optional)
component: null
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: System Console
tags: 
- Cloud N/A
labels: 
- Cloud-N/A
- system-console
- fix-versions-not-empty-2022cleanup

# Do not change
id: 2746386
key: MM-T10
folder_path: suite/system-console/site-configuration/notifications
created_on: "2019-08-26T23:46:53Z"
last_updated: ""
case_hashed: b6a6d8fe4ef8e56f045fda41040615a9146c788e9c87c6b417486e97bd10df1c9d93b180fa75a67e70743b1ba87a60ff
steps_hashed: 1f7bf0cbd8ac439c4b64b8fb07beba93bc9e05a25a665fd7262a418b8c63c477a73ac41e04231b4b5a94b16aa84b9dfa
---

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
