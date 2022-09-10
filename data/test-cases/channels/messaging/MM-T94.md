---
# (Required) Ensure all values are filled up
name: "RHS fetches messages on socket reconnect when a different channel is in center"
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
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
location: Messaging
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# Do not change
id: 3741725
key: MM-T94
folder_path: channels/messaging
created_on: "2019-12-20T16:32:59Z"
last_updated: ""
case_hashed: 62467d91dffe6376d409183e6c5c6782e59eafaf6841de4787a3a87ac59ad381f76547f28b39eb0451ebeb99a8c8bb8e
steps_hashed: 417c6346f417682ea6dfc12c5564c7dc64fdb02e6a962e06b57c34b2297611cf69aaed99ba58d8ddfe4659cc1d0eb061
---

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
