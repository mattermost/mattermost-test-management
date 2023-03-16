---
# (Required) Ensure all values are filled up
name: Verify forgot password link is hidden when email sign-in or username sign-in is disabled
status: Active
priority: Normal
folder: sign-in-authentication
authors: "@furqanmlk"
team_ownership: 
- Self-Serve

# (Optional)
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: enterprise
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
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

Ref: [MM-50430](Ref: https://mattermost.atlassian.net/browse/MM-50430)

Steps:

1. Open one browser with your SysAdmin and another browser just refreshing the login page
2. As SysAdmin, Set up a sign-in method (Gitlab, etc)
3. Go to **System Console** > **Auth** > **Email**
4. **Enable account creation with email** set to **false**
5. **Enable sign-in with email** set to **false**
6. **Enable sign-in with username** set to **true**
7. Click **save**
8. Go to the Login page and refresh
9. **Enable sign-in with email** set to **true**
10. **Enable sign-in with username** set to **false**
11. Click **save**
12. **Enable sign-in with email** set to **true**
13. **Enable sign-in with username** set to **true**
14. Click **save**
15. **Enable sign-in with email** set to **false**
16. **Enable sign-in with username** set to **false**
17. Click **save**

**Expected**

8. **Forgot Password** should be visible
9. **Forgot Password** should be visible
10. **Forgot Password** should be visible
11. **Forgot Password** should not be visible
