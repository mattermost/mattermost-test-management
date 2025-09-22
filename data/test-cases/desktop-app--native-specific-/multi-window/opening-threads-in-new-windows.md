---
# (Required) Ensure all values are filled up
name: "Opening threads in new windows"
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

**Step 1: Open thread in a new window from the RHS**

1. Open the Mattermost desktop app.
2. Open a channel and click on a thread to open it in the RHS.
3. Click on the "three dots" menu in the RHS header.
4. Select "Open in New Window".

**Expected**

A new window should open with the selected thread's content. The window should have the title "Thread: {Channel name} - {Team name}".

**Step 2: Open thread in a new window from the Threads view**

1. Open the Mattermost desktop app.
2. Click on the "Threads" button in the left sidebar.
3. Click on the "three dots" menu next to a thread.
4. Select "Open in New Window".

**Expected**

A new window should open with the selected thread's content. The window should have the title "Thread: {Channel name} - {Team name}".
