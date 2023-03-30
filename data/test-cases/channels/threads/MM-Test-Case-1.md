---
# (Required) Ensure all values are filled up
name: "should auto-scroll to bottom upon pasting long text in reply"
status: Active
priority: Normal
folder: Threads
authors: "furqanmlk"
team_ownership: 
- Channels
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

# (Optional)
location: Threads
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

1. Post a root post as current user
2. Post multiple replies as other user so that the new messages line is pushed up
3. Click root post
4. Wait for RHS to open and scroll to position
5. Close RHS
6. Click root post
7. Paste a multiline string in the RHS textbox.

**Expected**

4. RHS should open and the editor's actions should not be visible.
5. RHS should open and the editor should be visible and focused
