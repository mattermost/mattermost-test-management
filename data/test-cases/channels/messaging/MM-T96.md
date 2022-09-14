---
# (Required) Ensure all values are filled up
name: "Trying to type in middle of text should not send the cursor to end of textbox"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)
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
rainforest: []
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3741727
key: MM-T96
created_on: "2019-12-20T16:33:00Z"
last_updated: ""
case_hashed: 6f90cb970b836ffdfe6766de9f59e015fa820cadd4cab24d0884c84df62897e824ca752635e9a604173fd13b10803e2c
steps_hashed: 16f6f98ee0fa5acefb8b8d5a1dfd4c813237e71d65aa9bf161c467066a46da34580f9f3848ad660c84fa0dba361b29fa
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T96: Trying to type in middle of text should not send the cursor to end of textbox

---

**Step 1**

Trying to type in middle of text should not send the cursor to end of textbox\
\--------------------\
1\. Start typing in the post textbox\
2\. Click in the middle of the text you started typing\
3\. Start typing again

**Expected**

Cursor stays where it is and it should not move to the end of text
