---
# (Required) Ensure all values are filled up
name: "Mobile view: Clicking on airplane icon does not open file attachment modal but sends the message"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Messaging
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# Do not change
id: 3736149
key: MM-T73
folder_path: channels/messaging
created_on: "2019-12-19T15:28:54Z"
last_updated: ""
case_hashed: 74dd5e8f106d34b8d10c05ffc3ff93f974e7158672776c93ee701f1867f9b0d29e542a5c6ec823319ce8331d15bd1a13
steps_hashed: 2372744cf1106002b5d412f715f6791f50962f0de180b46c08bdcac67ffc26ff041231499d5c576143d543faf6e9998b
---

## MM-T73: Mobile view: Clicking on airplane icon does not open file attachment modal but sends the message

---

**Step 1**

Mobile view: Clicking on airplane icon does not open file attachment modal but sends the message\
\--------------------\
1\. Log in on browser, narrow window to mobile view\
2\. Type some characters in the message box\
3\. Click the aeroplane Send icon

**Expected**

Message sends\
\
(File attachment modal does not open)
