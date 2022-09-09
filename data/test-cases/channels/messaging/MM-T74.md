---
# (Required) Ensure all values are filled up
name: "Mobile view: Post options menu (3-dots) is present on a reply post in RHS"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Messaging
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# Do not change
id: 3736150
key: MM-T74
folder_path: channels/messaging
created_on: "2019-12-19T15:28:55Z"
last_updated: ""
case_hashed: a66efba2ae017ae14f1b1508f3e05ab40eff730e7ba1a901aa07bee3371b0e06d26e8725f91f8adbdaa6997c9d1bd08e
steps_hashed: e2c4e8b0d6fc50f248d2f1b451bdc2792fffcf714ea8fee6797e8a776994a2a4ca5660c5b302df0dce045f35e3ceb9a0
---

## MM-T74: Mobile view: Post options menu (3-dots) is present on a reply post in RHS

---

**Step 1**

Mobile view: Post options menu (3-dots) is present on a reply post in RHS\
\--------------------\
1\. On Webapp mobile view, click on reply to an existing post.\
2\. Type a message and click on Add comment.

**Test Data**

FIXED v5.15 <https://mattermost.atlassian.net/browse/MM-17409>

**Expected**

After 2) you can still see the 3-dot post options menu visible to the right of your post and clicking on the menu opens it and displays post options
