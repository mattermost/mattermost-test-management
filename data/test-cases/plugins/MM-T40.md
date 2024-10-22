---
# (Required) Ensure all values are filled up
name: "Plugin remains enabled when upgraded"
status: Active
priority: Low
folder: Plugins
authors: ""
team_ownership: 
- Integration Frameworks
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Plugins
component: null
tags:
- Cloud N/A
labels: 
- E2E-1
- Cloud-N/A
- TM4J-Key-Mapped-In-Cypress-Release
- plugins
- cy-prod
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: in Production
detox: N/A
mmctl: null
playwright: null
rainforest: []
manual_test_environments:
- Automated - No manual tests needed

# Do not change
id: 2774412
key: MM-T40
created_on: "2019-08-30T01:47:11Z"
last_updated: "2022-09-09T19:37:08Z"
case_hashed: 0fd4b597f07960702b041c0fa7e4d649ac716e2ae5f409fddf2b1d8475bc7f62b5c09dd845d09924ee5706544b7507f4
steps_hashed: 5d23035a20f3fb99b21721494b1964e69778be4c82345129eeefae63c494aa9da7cb729f72191c028fa6c72ca1fe9e93
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
4\. Install the following newer version of the plugin in step 1 by overwriting version 0.1.0: <https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.2.0/com.mattermost.demo-plugin-0.2.0.tar.gz>

**Expected**

1\. After step 3, the plugin is enabled and running.\
2\. After step 4, plugin version 0.2.0 is enabled and running.
