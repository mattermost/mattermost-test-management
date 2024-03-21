---
# (Required) Ensure all values are filled up
name: "Enterprise and Team Edition should not be able to create or signup new users when instance already has 11,000 users"
status: Active
priority: Normal
folder: User limits
authors: "@yasserfaraazkhan"
team_ownership: 
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

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

Prerequisites:

1. Have 1 Free instance running Enterprise edition with 10999 users.`/cloud create test-limits --image mattermostdevelopment/mattermost-enterprise-edition --license te`
2. Have 1 Free instance running Team edition with 10999 users.
3. Have 1 admin account.
4. Have 1 Free instance running Enterprise edition with 11,000 users and Gitlab configuration enabled.

Steps:

**Scenario**: When user is running Enterprise edition.

1. Login into Free instance running Enterprise edition with admin account.
2. Verify a red global banner is displayed with a message saying `Your user count exceeds the maximum users allowed. Upgrade to Mattermost Professional or Mattermost Enterprise to continue using Mattermost.`. There should also be a `Learn more` button.
3. Add a new user to the instance to make total active user to 11000.
4. Invite a new user.
5. Copy the Invitation link and option the link in another Tab (incognito)
6. Enter Email, Username and Password.
7. Click on Sign In.
8. Verify the sign up screen has error messaging saying "Can't create user. Server exceeds safe user limit. Contact your system administrator".

**Scenario**: When user is running Team edition.

1. Run above steps for team edition instance created using below cloud plugin command.
   `/cloud create test-limits --image mattermostdevelopment/mattermost-team-edition --license te`

**Scenario**: When user is running Enterprise edition with 11,000 users and had Gitlab Sign-in option enabled.

1. Login into Free instance running Enterprise edition with admin account.
2. Invite a new user.
3. Copy the Invitation link and option the link in another Tab (incognito)
4. Click on Gitlab button.
5. Enter Gitlab credentials.
6. Verify user is directed to an empty screen with error message "Can't create user. Server exceeds safe user limit. Contact your system administrator" and a link with text `Back to Mattermost`.
7. Click on `Back to Mattermost`.
8. Verify user is on Sign-in Page

**Scenario**: When user is running Free Enterprise edition with 11,000 users and starts a Enterprise Trial.

1. Login into Free instance running Enterprise edition with admin account.
2. Invite a new user.
3. Copy the Invitation link and option the link in another Tab (incognito)
4. Enter Email, Username and Password.
5. Click on Sign In.
6. Verify the sign up screen has error messaging saying "Can't create user. Server exceeds safe user limit. Contact your system administrator".
7. Go to System Console from admin acoount.
8. Start Enterprise Trial.
9. Go to the browser where new user is signing up and click `Create Account`. (after clearning the errors)
10. Verify the User is added successfully.
11. Verify in Site Statistics the `Total Activated Users` are 11,001.

**Scenario**: When user is running Free Enterprise edition with 11,000 users and uploads a license.

1. Login into Free instance running Enterprise edition with admin account.
2. Invite a new user.
3. Copy the Invitation link and option the link in another Tab (incognito)
4. Enter Email, Username and Password.
5. Click on Sign In.
6. Verify the sign up screen has error messaging saying "Can't create user. Server exceeds safe user limit. Contact your system administrator".
7. Go to System Console from admin acoount.
8. Upload the license.
9. Go to the browser where new user is signing up and click `Create Account`. (after clearning the errors)
10. Verify the User is added successfully.
11. Verify in Site Statistics the `Total Activated Users` are 11,001.
