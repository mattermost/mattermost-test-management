---
# (Required) Ensure all values are filled up
name: 'Verification of webhook deletion support message after unsubscribing from a repository subscription'
status: Active
priority: Normal
folder: Subscriptions
authors: '@Yash-Chakerverti'
team_ownership: []
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# Do not change
id: 
key: 
created_on: 
last_updated: 
case_hashed: 
steps_hashed: 
---


**Step 1**

1. Setup `GitHub` with Mattermost.
2. In any channel, DM, or GM, run `/github subscriptions add owner/repo` to create a subscription for a repository.
3. Run `/github subscriptions delete owner/repo` to unsubscribe from the repository.

**Expected**
A message should appear in the channel, DM, or GM  in the following format:
`@user unsubscribed this channel from owner/repo`
`Please delete the webhook for this subscription unless it is required by other subscriptions.`

**Step 2**

1. Setup `GitHub` with Mattermost.
2. In any channel, DM, or GM, run `/github subscriptions add owner/repo` to create a subscription for a repository.
3. Run `/github subscriptions delete owner/repo` to unsubscribe from the repository.
4. Click on the word `webhook` in the displayed support message.

**Expected**

Clicking the word `webhook` should redirect the user to the `webhook` management page in `GitHub`.