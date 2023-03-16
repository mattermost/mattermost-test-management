---
# (Required) Ensure all values are filled up
name: "Co-term Expansion | Should be successful in adding more seats from within the product"
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
- Should not be a sales-serve
- Should not be Airgapped

Test:

1. Login with Admin and Navigate to System Console
2. Verify Global banner with message indicating Number of Seats crossed and a button with test 'Update seat count'
3. Verify CTA is shown message with Number of Seats crossed and Clickable like with text 'Update seat count'
4. Verify a button with text 'Add seats' is displayed in license section.
5. Verify Clicking on Global banner, CTA link or Add seats button, the purchase modal is opened
6. Verify the user is able to enter Seat count greater than 0 in the RHS section. The price is Prorated (Seats * remaining months)
7. Verify the purchase is complete successfully
8. Verify the license is applied automatically and the banners are not shown
9. Verify the Billing page shows purchase details

(extra manual)
10. Verify the purchase email is received with attached license copy and purchase details
11. Verify re-uploading license to confirm nothing is broken.
