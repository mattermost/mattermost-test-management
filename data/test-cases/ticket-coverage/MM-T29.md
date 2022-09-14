---
# (Required) Ensure all values are filled up
name: "MM-17338 — Setting Require Email Verification to true will break the admin console"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform

# (Optional)
priority_p1_to_p4: null
location: Ticket coverage
component: null
tags: []
labels: []

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
last_updated: ""
case_hashed: 1521e49e8ed9f5b8ec215f3229d7319a34405b4720220777cd2231fa6ead87aa64505d20b79be5e081421b2c3533782b
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
