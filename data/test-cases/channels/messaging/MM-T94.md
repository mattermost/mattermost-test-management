---
name: "RHS fetches messages on socket reconnect when a different channel is in center"
status: Active
priority: Low
team_ownership: "Channels"
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
