---
# (Required) Ensure all values are filled up
name: "Co-term Expansion | Air-gapped instance should prompt customer to navigate to portal when intending to Add seats"
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

- Should be a air-gapped selfhosted instance.
- Should not be in renewal period
- Should not be a sales-serve

Test:

1. Login with Admin and Navigate to System Console
2. Verify Global banner with message indicating Number of Seats crossed and a button with text 'Update seat count'
3. Verify CTA is shown message with Number of Seats crossed and clickable link with text 'Update seat count'
4. Verify a button with text 'Add seats' is displayed in license section
5. Verify Clicking on Global banner, CTA link or Add seats button, the purchase modal is opened prompt asking user to goto contact sales or manage account from portal
