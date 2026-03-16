---
# (Required) Ensure all values are filled up
name: "Add slash command for setting default jira instance"
status: Active
priority: Normal
folder: Multi-instance support
authors: "@arush-vashishtha"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)    

# (Optional)
location: jira
component: null
tags: 
- Never tested
labels: []
tested_by_contributor: ""

# (Optional) Test type and tools
cypress: Ticket Open
detox: null
mmctl: null
playwright: null
rainforest: 
- Evaluating
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



**Step 1**

1. Connect more than one `jira` instance to Mattermost.
2. Type `/jira instance default [jiraURL]` in the message box.
3. Press enter to run the command.

**Expected**

The user should receive a confirmation that the default `jira` instance has been set. This confirmation message must clearly mention the selected [jiraURL] to assure the user which instance is now active.

**Step 2**

1. Connect multiple `jira` instances to Mattermost.
2. Type `/jira instance default [invalidURL]` in the message box.
3. Press enter to run the command.

**Expected**

1. The user should see an error message clearly indicating that the requested `jira` instance could not be found & the error should display the invalid instance for clarity.

**Step 3**

1. Type `/jira instance default [instance-URL]` in the message box without connecting the account.
2. Press enter to run the command.

**Expected**

The user should get an error message saying the account is not connected to `jira`, with a suggestion to use `/jira connect`.

**Step 4**

1. Connect multiple `jira` instances to Mattermost.
2. Set one instance (e.g., jiraURL1) as the default using `/jira instance default [jiraURL1]`.
3. Again, type `/jira instance default [jiraURL2]` with another connected instance.
4. Press enter to run the command.

**Expected**

The user should get a confirmation that the default `jira` instance has been successfully added with clearly mentioning the newly selected `[jiraURL2]`

**Step 5**

1. Connect multiple `jira` instances to Mattermost.
2. Type `/jira instance default` without adding any URL.
3. Press enter to run the command.

**Expected**

The user should see an error message saying Please specify the `jira` instance URL.