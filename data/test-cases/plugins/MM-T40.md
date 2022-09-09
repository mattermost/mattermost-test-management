---
# (Required) Ensure all values are filled up
name: "Plugin remains enabled when upgraded"
status: Active
priority: Low
folder: Plugins
authors: ""
team_ownership: 
- Integration Frameworks

# (Optional) Test type and tools
cypress: in Production
detox: N/A
mmctl: null
playwright: null
rainforest: []
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Plugins
tags: 
- Cloud N/A
labels: 
- E2E-1
- Cloud-N/A
- TM4J-Key-Mapped-In-Cypress-Release
- plugins
- cy-prod

# Do not change
id: 2774412
key: MM-T40
folder_path: plugins
created_on: "2019-08-30T01:47:11Z"
last_updated: "2022-09-09T19:37:08Z"
case_hashed: a4c8aafe02655ed86c3f174e4ab5001f9331a39365d0d8bdfa502b2a04088ecdbe4cac5356c7bad3703ce658fa679486
steps_hashed: 3bd1147de5116a948fb29a842a90d4f276a758a3a6d8921e7c0a7e83ca99fc04263b96097037b234298bae7832e7e4ec
---

## MM-T40: Plugin remains enabled when upgraded

**Objective**

To verify that when a plugin is upgraded, it maintains the "Enabled" status.

**Precondition**

Logged in as admin

---

**Step 1**

1\. Go to system console\
2\. Install any plugin (by uploading a file or installing via url [https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.1.0/com.mattermost.demo-plugin-0.1.0.tar.gz)](https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.1.0/com.mattermost.demo-plugin-0.1.0.tar.gz) "Follow link")\
3\. Enable plugin\
4\. Install the following newer version of the plugin in step 1 by overwriting version 0.1.0: <https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.2.0/com.mattermost.demo-plugin-0.2.0.tar.gz>

**Expected**

1\. After step 3, the plugin is enabled and running.\
2\. After step 4, plugin version 0.2.0 is enabled and running.
