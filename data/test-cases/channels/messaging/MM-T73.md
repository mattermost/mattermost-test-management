---
# (Required) Ensure all values are filled up
name: "Mobile view: Clicking on airplane icon does not open file attachment modal but sends the message"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Messaging
component: null
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: 
- N/A
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3736149
key: MM-T73
created_on: "2019-12-19T15:28:54Z"
last_updated: ""
case_hashed: 9a779b089a84039335ef0b5f9a4933a64e0e61c8081b911ebb0d2c502243dcd1a47572a87b0def79047849b0e15f6f77
steps_hashed: d8b056eed3e0dcbef40fe2afcfdac63458504801f23080f9999734c0c885e603eccb67307a78104a8eb5252eb373abf9
---

<!-- auto-generated based on "key" and "name" -->

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
