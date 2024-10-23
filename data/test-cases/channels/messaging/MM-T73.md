---
# (Required) Ensure all values are filled up
name: "Mobile view: Clicking on airplane icon does not open file attachment modal but sends the message"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership:
- Channels
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
component: null
tags: []
labels:
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging
tested_by_contributor: ""

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
case_hashed: d35cce59815113395f5d28391d36b3bf2ce73aaae9f1b8b74a567ad240c8e1adf0aac2f9653ffc9ed353e48b6c5b6180
steps_hashed: d8b056eed3e0dcbef40fe2afcfdac63458504801f23080f9999734c0c885e603eccb67307a78104a8eb5252eb373abf9
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
