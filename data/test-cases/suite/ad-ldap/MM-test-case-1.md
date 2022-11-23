---
# (Required) Ensure all values are filled up
name: "Allow admins to re-add a user to all of their default group-teams and channels"
status: Active
priority: Normal
folder: suite
authors: "@furqanmlk"
team_ownership: 
- Suite Users

# (Optional)
priority_p1_to_p4: null
location: ad-ldap
component: null
tags: []
labels: 

# (Optional) Test type and tools
cypress: To Do
detox: null
mmctl: null
playwright: null
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

**Step 1**
Ref: <https://mattermost.atlassian.net/browse/MM-48186>

Steps:

1. Login as 2 LDAP users (userA and userB) in an LDAP group.
2. Configure the group to sync to a team and a channel.
3. Have both users leave the channel and the team.
4. Go to **System Console** > **Users**, go to **userA**, and from the drop down menu select **Reset group-defaulted teams and channels**.

**Expected**
step 2: the users should get added to the team and then channel.
step 4: **userA** should be re-added to the team and the channe and **userB** should not get re-added to the team or the channel.
