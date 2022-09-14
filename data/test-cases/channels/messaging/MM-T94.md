---
# (Required) Ensure all values are filled up
name: "RHS fetches messages on socket reconnect when a different channel is in center"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
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
id: 3741725
key: MM-T94
created_on: "2019-12-20T16:32:59Z"
last_updated: ""
case_hashed: 25bcc56a79a748ccd82abb5a9b096858dee5463521a42166027f5401bf70df39e49f2916f2c2ab5e0d287298fcad8e8e
steps_hashed: 417c6346f417682ea6dfc12c5564c7dc64fdb02e6a962e06b57c34b2297611cf69aaed99ba58d8ddfe4659cc1d0eb061
---

<!-- auto-generated based on "key" and "name" -->

## MM-T94: RHS fetches messages on socket reconnect when a different channel is in center

---

**Step 1**

RHS fetches messages on socket reconnect when a different channel is in center\
\--------------------\
1\. Reply to a post from another test user\
2\. Keep the RHS open but switch to a different channel in the center\
3\. Disconnect from internet\
4\. Have the other test user from step 1) comment on your reply from the RN app\
5\. Re-connect to the internet

**Test Data**

FIXED v5.15 <https://mattermost.atlassian.net/browse/MM-17634>

**Expected**

The post made by the test user during your network disconnect appears in the RHS
