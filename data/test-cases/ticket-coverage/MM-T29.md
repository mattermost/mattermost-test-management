---
# (Required) Ensure all values are filled up
name: "MM-17338 — Setting Require Email Verification to true will break the admin console"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# (Optional)
component: null
priority_p1_to_p4: null
location: Ticket coverage
tags: []
labels: []

# Do not change
id: 2760595
key: MM-T29
folder_path: ticket-coverage
created_on: "2019-08-28T09:49:50Z"
last_updated: ""
case_hashed: 61f7734c3451a1139247e6c920726a9f5d08d65c847433332c145d25400ae7ed05512e73b0a842f78fd2be3bf2b1e6d9
steps_hashed: f7d5b914fbb2ba4a809b2bbd7abcfab35ed75cab0f30188bd30d55428d0e9c07dc3fabace4ac20df8999d4d631bc1b6a
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

**Related bug**: [MM-17338](https://mattermost.atlassian.net/browse/MM-17338)
