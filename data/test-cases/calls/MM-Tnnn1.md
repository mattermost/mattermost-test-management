---
# (Required) Ensure all values are filled up
name: "Start and leave a call"
status: Active
priority: Normal
folder: Calls
authors: "@saturninoabril"
team_ownership: 
- Calls
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

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

---

**Precondition**

Requires Calls installed and enabled in the server.
Not applicable to small screen like mobile phone.

**Step 1**

1. Login as test user and go to town-square channel.
2. Start a call from the header by clicking "Start call".
  - Verify that Calls widget becomes visible and message is posted in a channel that a call has started.
3. Leave a call by clicking leave button in Calls widget.
  - Verify that the Calls widget has gone and message is updated that a call has ended.

**Expected**

When starting a call from channel header, Calls widget becomes visible and a message is posted in a channel that a call has started.
When leaving a call from Calls widget, Calls widget disappeared and message is updated that a call has ended.
