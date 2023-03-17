---
# (Required) Ensure all values are filled up
name: "Co-term Expansion | Should not be available when instance is up for renewal"
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

- Should be a selfhosted instance
- Should be up for renewal
- Should not be a sales-serve
- Should not be Airgapped

Test:

Scenario 1: When instance is up for reneal and not crossed license end date

1. Login with Admin and Navigate to System Console
2. Verify Global banner for Renewal with message `License expires in X days. Renew now to avoid disruption <['Renew now'] button>`
3. Verify CTA is Renewal with message
4. Verify a Disabled button with text `Add seats` is displayed in license section.
5. Verify message `Expires in X days` beside expiring date in the license
6. Verify on `View Plan` modal `Renew` is shown on Professional card
7. Verify on `View Plan` modal `Upgrade` is shown on Entriprise card and contact sales is removed.

Scenario 1: When instance is up for reneal and has crossed license end date

1. Login with Admin and Navigate to System Console
2. Verify Global banner for Renewal with message `<Professional| Enterprise> License is expired and some features maybe disabled <['Renew now'] button>`
3. Verify a Disabled button with text `Add seats` is displayed in license section.
4. Verify message `Expired` beside expiring date in the license