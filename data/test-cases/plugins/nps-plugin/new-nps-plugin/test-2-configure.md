---
# (Required) Ensure all values are filled up
name: "User Surveys | Configure Survey Duration"
status: Active
priority: Normal
folder: New nps plugin
authors: "@yasserfaraazkhan"
team_ownership: 
- ICU
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []
tested_by_contributor: null

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
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

Scenario 1: Verify Default Duration

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Verify that the "Survey Duration" is set to "30" days by default.

Scenario 2: Verify New survey is not launched unless Active survey ends.

Steps:

1. Login as an Sysadmin user.
2. Navigate to the System Console > Plugins > User surveys settings page.
3. Launch a survey for current Day. For example, set time to Current day, 12:00 UTC
4. Verify a Survey is received from the Feedback Bot.
5. In the Survey Settings, configure another survey to be launched on the same day.  For example, set time to Current day, 12:30 UTC
6. Verify Feedback bot does not prompt to a new survey.
7. In the Survey Settings, Update the survey time to launch a survey.  For example, set time to Current day, 12:30 UTC
8. End the Current Active Survey.
9. Verify the Feedback bot prompts to new feedback survey.

Scenario 3: Verify User cannot post response for an Expired Survey.

Prerequisite: Admin should have launched a survey that expires after 30 days.

1. Login to User's account.
2. Open Feedback bot's DM.
3. Verify a message is displayed saying `Survey expired on <Month> <Day>, <Year>`.
4. Verify the Expired survey's NPS & Text questions are unclickable.
