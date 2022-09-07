---
name: "Plugin remains enabled when upgraded"
status: Active
priority: Low
team_ownership: "Integration Frameworks"
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
