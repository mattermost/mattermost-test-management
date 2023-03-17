---
# (Required) Ensure all values are filled up
name: "Co-term Expansion | Sales-Serve instance should show Contact sales in the Global banner, CTA and not show Add seats Option"
status: Active
priority: Normal
folder: Co term expansion
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

Ref Epic: <https://mattermost.atlassian.net/browse/MM-50363>

Pre-requisites:

- Should be a selfhosted instance.
- Should not be in renewal period
- Should be a sales-serve

Test:

1. Login with Admin and Navigate to System Console
2. Verify Global banner with message indicating Number of Seats crossed and a button with test 'Contact Sales'
3. Verify CTA is shown message with Number of Seats crossed and Clickable like with text 'Contact Sales'
4. Verify a button with text 'Add seats' is displayed in license section.
5. Verify Clicking on Global banner, CTA link or Add seats button, Contact Sales Zendesk form is opened.
6. Verify that 'Add seats' button is NOT displayed in license section.

(extra manual)
6. Verify the Zendesk for has pre-filled data like Subject, Email, timezone.
