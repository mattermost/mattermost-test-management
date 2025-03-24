---
# (Required) Ensure all values are filled up
name: "Failed Attempts Cases"
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

## MM-T-Failed-Attempts: Failed Attempts Cases

---

**Step 1**

Failed attempt correctly increment if password is correct but MFA is wrong (both LDAP and email users)

1. Set up MFA for both an LDAP user and an email user
2. For the LDAP user:
   - Enter correct LDAP credentials
   - When prompted for MFA, enter an incorrect code
   - Check the user's failed attempts count in the users table of the DB
3. For the email user:
   - Enter correct email and password
   - When prompted for MFA, enter an incorrect code
   - Check the user's failed attempts count in users table of the DB

**Expected**

- For both users, after entering incorrect MFA code:
  - Login fails with appropriate error message
  - The failed attempts counter is incremented by 1
  - The failed attempt is logged in the system logs

---

**Step 2**

Repeat test with user who has MFA login enabled

1. Find a user with MFA enabled
2. Attempt to log in with correct credentials but incorrect MFA code multiple times
3. Check the user's failed attempts count in the System Console after each attempt

**Expected**

- Each failed MFA attempt increments the failed attempts counter by 1
- The counter accurately reflects the number of failed attempts
- Failed attempts are properly logged in the system logs

---

**Step 3**

You get locked out when your attempts reach the maximum setting in the config. Check for both ldap and email.

1. Configure maximum login attempts to a low number (e.g., 3)
2. For an LDAP user:
   - Attempt to log in with incorrect password until reaching the maximum attempts
   - Try to log in with correct credentials
3. For an email user:
   - Attempt to log in with incorrect password until reaching the maximum attempts
   - Try to log in with correct credentials

**Expected**

- For both LDAP and email users:
  - After reaching the maximum failed attempts, the account is locked
  - Even with correct credentials, login is denied
  - An appropriate "account locked" error message is displayed
  - The lockout is logged in the system logs

---

**Step 4**

Confirmed LDAP max login can now be successfully adjusted in the UI. save issue is resolved

1. Navigate to System Console > Authentication > LDAP
2. Change the "Maximum Failed Login Attempts" setting to a different value
3. Save the changes
4. Verify the setting is saved correctly

**Expected**

- The LDAP maximum login attempts setting can be changed successfully
- The new value is saved and persisted after navigating away and back
- The setting is applied correctly to LDAP login attempts

---

**Step 5**

Validation testing on LDAP max login

1. Navigate to System Console > Authentication > LDAP
2. Try to set "Maximum Failed Login Attempts" to various values:
   - A negative number
   - Zero
   - A non-numeric value
   - A very large number
3. Save the changes after each attempt

**Expected**

- Negative numbers are not accepted or are converted to a valid value
- Zero is either not accepted or interpreted as "unlimited"
- Non-numeric values are not accepted or are converted to the default value
- Very large numbers are accepted up to a reasonable limit
- Appropriate validation messages are displayed for invalid inputs
