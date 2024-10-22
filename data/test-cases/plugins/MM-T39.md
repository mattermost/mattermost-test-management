---
# (Required) Ensure all values are filled up
name: "Disable Plugin on Removal"
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
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments:
- Automated - No manual tests needed

# Do not change
id: 2774322
key: MM-T39
created_on: "2019-08-30T01:25:31Z"
last_updated: "2022-09-09T19:36:48Z"
case_hashed: 9a4a39e3b4444fcada2dcd2441fa38ef3cdc3baaa8da343ef8bf890f61b0fbdaa806ffaee03ca8956981f50d7a90e43c
steps_hashed: 59d10fd3a4f5001c53abb78f7d6d782fc7be9761c7eb2880df676988df8c008e2b177291f0ab88233d2cac93f4855ccd
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
