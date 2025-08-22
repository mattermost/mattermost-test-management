---
# (Required) Ensure all values are filled up
name: "Add slash command for setting default Jira instance"
status: Active
priority: Normal
folder: Multi-instance support
authors: "@arush-vashishtha"
team_ownership: []
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)    

# (Optional)
location: Jira
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



_**Step 1**_

1. Connect more than one Jira instance to Mattermost.
2. Type /jira instance default jiraURL in the message box.
3. Press enter to run the command.


_**Expected**_

1. The user should receive a confirmation that the default Jira instance has been set.
2. The confirmation message should clearly mention the selected jiraURL.


---

**Step 2**

1. Connect multiple Jira instances to Mattermost.
2. Type /jira instance default invalidURL in the message box.
3. Press enter to run the command.


**Expected**

1. The user should see an error message clearly indicating that the requested Jira instance could not be found.
2. The error should display the invalid instance for clarity.


---

**Step 3**

1. Type /jira instance default instance-URL in the message box without connecting the account.
2. Press enter to run the command.

**Expected**

The user should get an error message saying the account is not connected to Jira, with a suggestion to use /jira connect
---

**Step 4**

1. Connect multiple Jira instances to Mattermost.
2. Set one instance (e.g., jiraURL1) as the default using /jira instance default jiraURL1.
3. Again, type /jira instance default jiraURL2 with another connected instance.
4. Press enter to run the command.

**Expected**

