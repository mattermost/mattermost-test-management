---
# (Required) Ensure all values are filled up
name: "Join a call"
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

**Join a call from channel header button**

1. Login as admin in the first browser, go to town-square channel and start a call from the header.
  - Verify Calls widget becomes visible and message is posted in a channel that a call has started.
2. In a different browser (incognito), login as test user and go to the same town-square channel.
  - Verify seeing the same message that a call has started by the admin.
  - Verify no Calls widget is present.
3. Join a call from the header by clicking "Join call" button
  - Verify joining a call and Calls widget becomes visible.
4. Leave a call by clicking leave button in Calls widget.
  - Verify that the Calls widget disappeared.

**Step 2**

**Join a call from channel toast**

1. With admin in the first browser, start a call from the header and verify that a call has started.
2. In another browser with test user, join a call from toast by clicking "Join Call" message.
  - Verify joining a call and Calls widget becomes visible.
3. Leave a call by clicking leave button in Calls widget.
  - Verify that the Calls widget disappeared.

**Step 3**

**Join a call from center post**

1. With admin in the first browser, start a call from the header and verify that a call has started.
2. In another browser with test user, join a call from center post by clicking "Join call".
  - Verify joining a call and Calls widget becomes visible.
  - Verify the post has been updated that the test user has joined the call.
3. Leave a call by clicking "Leave call" from the center post.
  - Verify that the Calls widget disappeared.

**Step 4**

**Join a call from RHS post**

1. With admin in the first browser, start a call from the header and verify that a call has started.
2. In another browser with test user, click reply to the post with Calls started message and then join a call from RHS post by clicking "Join call".
  - Verify joining a call and Calls widget becomes visible.
  - Verify the post has been updated that the test user has joined the call.
3. Leave a call by clicking "Leave call" from the RHS post.
  - Verify that the Calls widget disappeared.
