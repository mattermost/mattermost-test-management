---
# (Required) Ensure all values are filled up
name: "Cloud Evaluation Trial | New workspace should start with 30 day Cloud Enterprise trial"
status: Active
priority: Normal
folder: Cloud Evaluation Trial
authors: "@yasserfaraazkhan"
team_ownership: 
- Self-Serve
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: null
component: null
tags: []
labels: []

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

Ref Epic: <https://mattermost.atlassian.net/browse/MM-50719>

Scenario 1: Start of trial

1. Create a workspace from `https://portal.test.cloud.mattermost.com/cloud/signup`
2. Login into the workspace
3. Verify the Global banner is displaed with the message `Your 30-day Enterprise trial has started! Purchase before MM-DD to keep your workspace.` and `Review your options` button
4. Click on `Review your options`
5. Verify pricing modal is opened. The modal should have `Professional` and `Enterprise` cards and have `Purchase` button on both
6. The Banner should be dissmissable

Scenario 2: Last day of trial

1. The Global banner should display a message `This is the last day of your free trial. Purchase a plan before 11.59pm PT or contact sales` and `Review your options` button

Scenario 3: User accessing workspace after 30 days of trial

1. Verify the message `Your trial has ended` is displayed
2. Verify `Contact us` and `Host your own instance` buttons are shown
3. Verify clicking on `Contact us`, user is taken to `mattermost.com/contact-sales` in a new tab
4. Verify clicking on `Host your own instance`, user is taken to `mattermost.com/download` in a new tab
