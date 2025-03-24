---
# (Required) Ensure all values are filled up
name: "LDAP Login Flows"
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
- ldap
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

## MM-T-LDAP-Flows: LDAP Login Flows

---

**Step 1**

First time LDAP users who get their password wrong will be created in mm and their failed attempts is incremented. Subsequently make sure a successful login can happen.

1. Configure LDAP with "Create accounts automatically" enabled
2. Attempt to log in with a valid LDAP username but incorrect password
3. Verify the user account is created in Mattermost
4. Check the user's failed attempts count in the users table of the DB
5. Attempt to log in again with the correct password

**Expected**

- A new Mattermost account is created for the LDAP user despite the failed login
- The failed attempts counter for the new user is set to 1
- When logging in with correct credentials, the user successfully logs in


---

**Step 2**

Attempts reset on successful login

1. Find a user with at least one failed login attempt
2. Log in successfully with that user's credentials
3. Check the user's failed attempts count in the users table of the DB

**Expected**

- After successful login, the user's failed attempts counter is reset to 0
- This applies to both LDAP and email authentication methods

---

**Step 3**

Login successfully with mfa using ldap

1. Set up MFA for an LDAP user
2. Navigate to the login page
3. Enter valid LDAP credentials
4. When prompted, enter the correct MFA code

**Expected**

- User is prompted for MFA code after entering correct LDAP credentials
- After entering the correct MFA code, user is successfully logged in
- User is redirected to their default team/channel
- No failed login attempts are recorded

---

**Step 4**

Login successfully with mfa using email

1. Set up MFA for an email user
2. Navigate to the login page
3. Enter valid email and password
4. When prompted, enter the correct MFA code

**Expected**

- User is prompted for MFA code after entering correct email credentials
- After entering the correct MFA code, user is successfully logged in
- User is redirected to their default team/channel
- No failed login attempts are recorded

---

**Step 5**

Successful login for first time user with no failures (just ensure a user can login first time with correct password)

1. Create a new user account (either LDAP or email)
2. Navigate to the login page
3. Enter the correct credentials for the new user


**Expected**

- First-time user successfully logs in on the first attempt
- User is guided through any required onboarding steps
- No failed attempts are recorded for the user

---

**Step 6**

Existing ldap users failed attempts when mfa is enabled (Get the mfa part wrong and ensure attempts is incremented).

1. Find an existing LDAP user with MFA enabled
2. Navigate to the login page
3. Enter correct LDAP credentials
4. When prompted for MFA, enter an incorrect code
5. Check the user's failed attempts count in the users table of the DB

**Expected**

- User enters correct LDAP credentials and is prompted for MFA
- After entering incorrect MFA code, login fails with appropriate error message
- The failed attempts counter is incremented by 1
- The failed attempt is logged users table of the DB
