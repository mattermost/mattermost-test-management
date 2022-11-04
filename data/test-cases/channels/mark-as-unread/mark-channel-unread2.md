---
# (Required) Ensure all values are filled up
name: "The latest post should appear unread after marking the channel as unread with alt-left-click on channel sidebar item"
status: Active
priority: Normal
folder: Mark as Unread
authors: "@jgilliam17"
team_ownership: 
- Channels

# (Optional)
component: null
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: null
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

## The latest post should appear unread after marking the channel as unread with alt-left-click on channel sidebar item

---

**Step 1**

1. Channel A starts as unread
2. Visit Channel A
    1. Verify channel A becomes read after you viewed it
3. Switch to channel B
    1. Verify Channel A remains read
4. Mark channel A as unread using alt-left-click on the sidebar channel name item
    1. Verify channel A shows as unread on the sidebar
5. Switch back to channel A
    1. Verify the New Messages line above the last post (post3)

**Expected**

When marking the channels as unread using alt+click, the channel should show as unread on the sidebar and the New Messages line should appear above the last post in the channel.
