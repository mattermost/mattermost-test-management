---
# (Required) Ensure all values are filled up
name: "Task Bottom Sheet - Slash Command Field and Execution"
status: Active
priority: Normal
folder: Mobile Playbook
authors: "@yasserfaraazkhan"
team_ownership:
- Core Features
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
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

Open a task bottom sheet and locate the Command field.

**Expected**

The Command field is visible showing "None" if no command is configured, or the slash command if already set.

**Step 2**

Tap on the Command row.

**Expected**

The slash command selector opens displaying available slash commands to choose from.

**Step 3**

Select a slash command from the available options.

**Expected**

The selected slash command is saved and displayed in the Command field.

**Step 4**

Tap the "Run Command" button (if available after setting a command).

**Expected**

The configured slash command is executed and the results are shown in the UI with success or failure indication.

**Step 5**

Tap the Command field again and remove or clear the command.

**Expected**

The command is removed and the field reverts to showing "None".
