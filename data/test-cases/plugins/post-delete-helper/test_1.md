---
# (Required) Ensure all values are filled up
name: "Installation and uninstallation of the Post Delete Helper Plugin"
status: Active
priority: Normal
folder: Post Delete Helper
authors: "@saturninoabril"
team_ownership:
- Deployment Eng
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Plugins
component: null
tags: []
labels: []
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: N/A
playwright: N/A
rainforest: []
manual_test_environments: []

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1**

Install Across Different Server Setups

1. Obtain the plugin by either downloading it from the [repository](https://github.com/mattermost/mattermost-plugin-post-delete-helper) or by building it from source.
2. Upload the plugin to the Mattermost server.
3. Perform sanity check

**Expected**

The plugin should install and uninstall without any issues across different server setups, including:

- Server Editions: All
- Licensing: With or without a license
- Hosting: Self-hosted only, Cloud does not allow plugin upload
- Deployment: Single-tenant or High-Availability setup

The plugin should perform its intended functionality (delete root posts without deleting the thread) correctly without errors or unexpected behavior.

---

**Step 2**

Install Plugin on Supported and Unsupported Server Versions

1. Attempt to install the plugin on both supported and unsupported Mattermost server versions.

**Expected**

The plugin should install successfully only on supported versions. The minimum supported server version is `6.2.1`.
