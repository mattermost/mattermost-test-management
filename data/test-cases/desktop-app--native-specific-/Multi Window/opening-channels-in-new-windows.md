---
# (Required) Ensure all values are filled up
name: " Opening channels in new windows"
status: Active
priority: Normal
folder: Multi Window
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
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
manual_test_environments:
- Desktop App

# Do not change
id: null
key: null
created_on: null
last_updated: null
case_hashed: null
steps_hashed: null
---

**Step 1: Open channel in a new window from the left sidebar**

1. Open the Mattermost desktop app.
2. Right-click on a channel in the left sidebar.
3. Select "Open in New Window".

**Expected**

A new window should open with the selected channel's content. The window should have the title "{Channel name} - {Team name}".

**Step 2: Open channel in a new window using Command/CTRL-click**

1. Open the Mattermost desktop app.
2. Hold down the Command (on macOS) or CTRL (on Windows/Linux) key.
3. Click on a channel in the left sidebar.

**Expected**

A new window should open with the selected channel's content. The window should have the title "{Channel name} - {Team name}".

**Step 3: Open channel in a new window from the channel menu**

1. Open the Mattermost desktop app.
2. Click on a channel to open it in the main window.
3. Click on the channel name at the top of the screen to open the channel menu.
4. Select "Open in New Window".

**Expected**

A new window should open with the selected channel's content. The window should have the title "{Channel name} - {Team name}".
