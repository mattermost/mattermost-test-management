---
name: "Disable Plugin on Removal"
status: Active
priority: Low
team_ownership: "Integration Frameworks"
---

## MM-T39: Disable Plugin on Removal

**Objective**

To verify that plugins don't automatically run upon reinstalling.

**Precondition**

Logged in as admin

---

**Step 1**

1. Go to system console
2. Install any plugin (by uploading a file or installing via url [https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.1.0/com.mattermost.demo-plugin-0.1.0.tar.gz)](https://github.com/mattermost/mattermost-plugin-demo/releases/download/v0.1.0/com.mattermost.demo-plugin-0.1.0.tar.gz) "Follow link")
3. Enable plugin
4. Remove plugin
5. Install previously installed plugin

**Expected**

Plugin is installed and is disabled
