---
# (Required) Ensure all values are filled up
name: "Installation and uninstallation of the Attachments Remover Plugin"
status: Active
priority: Normal
folder: Attachment Remover
authors: "@saturninoabril"
team_ownership:
- Deployment Eng
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: ''

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

1. Obtain the plugin by either downloading it from the [repository](https://github.com/mattermost/mattermost-plugin-attachments-remover) or by building it from source.
2. Upload the plugin to the Mattermost server.
3. Perform sanity check

**Expected**

The plugin should install and uninstall without any issues across different server setups, including:
- Server Editions: Free and Enterprise
- Licensing: With or without a license
- Hosting: Self-hosted or Cloud
- Deployment: Single-server or High-Availability setup

The plugin should perform its intended functionality (removing attachments) correctly without errors or unexpected behavior.

**Step 2**

Install Plugin on Supported and Unsupported Server Versions

1. Attempt to install the plugin on both supported and unsupported Mattermost server versions.

**Expected**

The plugin should install successfully only on supported versions. The minimum supported server version is `6.2.1`.
