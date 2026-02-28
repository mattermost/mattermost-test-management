---
# (Required) Ensure all values are filled up
name: "Basic Login Success and Failure"
status: Active
priority: Normal
folder: Auth SSO
authors: "@DHaussermann"
team_ownership:
- Channels
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Auth SSO
component: null
tags: []
labels:
- auth-sso
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: To Do
detox: N/A
mmctl: N/A
playwright: N/A
rainforest: []
manual_test_environments:
- Webapp

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T-Login-Basic: Basic Login Success and Failure

---

**Step 1**

Login successfully with ldap user

1. Navigate to the login page
2. Enter valid LDAP credentials (username and password)
3. Click "Sign in"

**Expected**

- User is successfully logged in
- User is redirected to their default team/channel
- No failed login attempts are recorded for the user

---

**Step 2**

Login successfully with email user

1. Navigate to the login page
2. Enter valid email and password
3. Click "Sign in"

**Expected**

- User is successfully logged in
- User is redirected to their default team/channel
- No failed login attempts are recorded for the user

---

**Step 3**

Failed login with email (check failedattempts is updated)

1. Navigate to the login page
2. Enter valid email but incorrect password
3. Click "Sign in"
4. Check the user's failed attempts count in the System Console

**Expected**

- Login attempt fails with appropriate error message
- The user's failed attempts counter is incremented by 1
- The failed attempt is logged in the system logs

---

**Step 4**

Failed login with LDAP (check failedattempts is updated)

1. Navigate to the login page
2. Enter valid LDAP username but incorrect password
3. Click "Sign in"
4. Check the user's failed attempts count in the System Console

**Expected**

- Login attempt fails with appropriate error message
- The user's failed attempts counter is incremented by 1
- The failed attempt is logged in the system logs
