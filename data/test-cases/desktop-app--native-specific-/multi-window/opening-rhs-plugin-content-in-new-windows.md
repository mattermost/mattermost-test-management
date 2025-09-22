---
# (Required) Ensure all values are filled up
name: "Opening RHS plugin content in new windows"
status: Active
priority: Normal
folder: Multi Window
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Smoke Test
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
manual_test_environments:
- Desktop

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

Example Plugins to be opened in new Window.

**Step 1: Open Playbook Run in a new window**

1. Open the Mattermost desktop app.
2. Start a Playbook Run.
3. In the RHS, click on the "three dots" menu.
4. Select "Open in New Window".

**Expected**

A new window should open with the Playbook Run's content.

**Step 2: Open Copilot in a new window**

1. Open the Mattermost desktop app.
2. Open Copilot in the RHS.
3. Click on the "three dots" menu.
4. Select "Open in New Window".

**Expected**

A new window should open with the Copilot content.
