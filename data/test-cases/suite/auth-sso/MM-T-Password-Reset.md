---
# (Required) Ensure all values are filled up
name: "Password Reset Cases"
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

## MM-T-Password-Reset: Password Reset Cases

---

**Step 1**

Reset users failed attempts for both email and ldap using system console

1. Create users with failed login attempts (both LDAP and email users)
2. Navigate to System Console > User Management > Users
3. Find the users with failed attempts
4. Use the reset option to clear their failed attempts
5. Verify the failed attempts count is reset

**Expected**

- The option to reset failed attempts is visible for users with failed attempts
- After reset, the failed attempts counter is set to 0
- Users can log in with correct credentials even if they were previously locked out
- The users login attempts are back to 0 users table of the DB

---

**Step 2**

Change value of max attempts and ensure it's respected

1. Navigate to System Console > Authentication > Password
2. Change the "Maximum Login Attempts" setting to a different value
3. Save the changes
4. Test login with incorrect credentials to verify the new limit is enforced

**Expected**

- The maximum login attempts setting can be changed successfully
- The new value is saved and persisted after navigating away and back
- Users are locked out after reaching the new maximum number of failed attempts
- The setting applies to both LDAP and email authentication

---

**Step 3**

Reset failed attempts requires a minimum permission level of PermissionSysconsoleWriteUserManagementUsers

1. Create a user with the System Role that includes PermissionSysconsoleWriteUserManagementUsers
2. Create another user with a System Role that does not include this permission
3. Have both users attempt to reset failed attempts for a third user
4. Check if they can access and use the reset functionality

**Expected**

- The user with PermissionSysconsoleWriteUserManagementUsers can reset failed attempts
- The user without this permission cannot see or use the reset option


---

**Step 4**

People with PermissionSysconsoleWriteUserManagementUsers cannot update sysadmins. Must be a fellow sysadmin

1. Create a user with PermissionSysconsoleWriteUserManagementUsers but not system admin
2. Create a system admin user with failed login attempts
3. Have the first user attempt to reset the system admin's failed attempts
4. Check if they can access and use the reset functionality for the system admin

**Expected**

- The user with only PermissionSysconsoleWriteUserManagementUsers cannot reset failed attempts for system admins

---

**Step 5**

Sysadmin can reset attempt count of another sysadmin

1. Create two system admin users
2. Have one system admin accumulate failed login attempts
3. Have the other system admin reset the first admin's failed attempts
4. Verify the failed attempts count is reset

**Expected**

- A system admin can successfully reset the failed attempts counter for another system admin
- After reset, the failed attempts counter is set to 0
- The affected system admin can log in with correct credentials even if previously locked out
- The users reset attempts are set to 0 in the DB

---

**Step 6**

Reset is not visible in system console when attempts are at 0

1. Navigate to System Console > User Management > Users
2. Find users with 0 failed login attempts
3. Check if the reset option is visible for these users

**Expected**

- The option to reset failed attempts is not visible for users with 0 failed attempts
- The reset option only appears for users with 1 or more failed attempts

---

**Step 7**

Password reset will set attempts back to zero for email user

1. Create an email user with failed login attempts (possibly locked out)
2. Initiate a password reset for this user
3. Complete the password reset process
4. Check the user's failed attempts count in the System Console
5. Attempt to log in with the new password

**Expected**

- After completing the password reset process, the failed attempts counter is reset to 0
- The user can log in with the new password even if they were previously locked out
- The reset of failed attempts is logged in the system logs

---

**Step 8**

When prev password was correct but, LDAP is enforcing force password reset, Login attempt correctly fails and count is increased

1. Configure LDAP with "Force Password Reset" enabled
2. Attempt to log in with an LDAP user whose password needs to be reset
3. Check the user's failed attempts count in the System Console

**Expected**

- Login fails with an appropriate message about password reset requirement
- The failed attempts counter is incremented by 1
- The failed attempt is logged in the system logs
- User must reset password through LDAP before being able to log in to Mattermost
