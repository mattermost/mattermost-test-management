---
# (Required) Ensure all values are filled up
name: "MM-17338 — Setting Require Email Verification to true will break the admin console"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Ticket coverage
component: null
tags: []
labels: []
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: 2760595
key: MM-T29
created_on: "2019-08-28T09:49:50Z"
last_updated: "2022-12-01T21:17:45Z"
case_hashed: 98b823e5730e303c171a65bfa0af095a0df0f500d7afd0da69187551e35af52af659612ae5660e7da6a875c04a5a9a44
steps_hashed: 7f17ab0f8ca8d4e50646c9ef8da6d9dc3ff63da8a7631f2411ee2ef1506d75b117c613980f55048f2f842fdc3d760ba5
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
