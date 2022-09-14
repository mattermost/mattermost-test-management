---
# (Required) Ensure all values are filled up
name: "Mobile view: Post options menu (3-dots) is present on a reply post in RHS"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Messaging
component: null
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3736150
key: MM-T74
created_on: "2019-12-19T15:28:55Z"
last_updated: ""
case_hashed: f66acd61ee377143ae03d2ed849ba3995636065731e74cf7dc0757f9f09c537273ee2ea6d2896ec3532ecaf1fa12d397
steps_hashed: 1d5996966248379fa9d9a6fe20b75887dc775d27b2d7d0521bf94610652a4853fb97f953369741a12fc04090437211d7
---

<!-- auto-generated based on "key" and "name" -->

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
