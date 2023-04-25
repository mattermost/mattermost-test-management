---
# (Required) Ensure all values are filled up
name: "Subscribe to Security Newletter from signup page"
status: Active
priority: Normal
folder: Subscribe to News Letter
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

Epic: <https://mattermost.atlassian.net/browse/MM-51235>

**Scenario**: Non-Air Gapped Sign-up page

1. Verify User is able to Select the optional check box to 'recieve Mattermost security updates via newsletter'
2. Verify the email address is entered in the CWS DB table called marketing

**Scenario**: Air Gapped Sign-up page

1. Verify User is able open https://mattermost.com/security-updates/ to sign up for security updates

Extra manual step:

1. Enter an email address with a script tag (e.g., <script>alert("XSS");</script>) and click on the subscribe button. The UI should throw error on email text box
