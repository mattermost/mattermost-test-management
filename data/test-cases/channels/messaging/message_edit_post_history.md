---
# (Required) Ensure all values are filled up
name: "Edit message - post history"
status: Active
priority: Normal
folder: Massaging 
authors: "@jgilliam17"
team_ownership: 
- Channels
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

Show and restore older versions of a message

1. Login as test user and visit off-topic
    1. Validate if the channel has been opened
2. Post a message "This is a sample message"
3. Edit message "This is an edited sample message"
4. Edit message again to "This is the final version of the sample message"
5. Open edit history by clicking "`<pencil icon>` Edited" button of the post
6. Check if the current version of the message is visible
7. Check if the previous versions of the message are visible and correct in the history
8. Click the restore button on the first version of the message
9. Confirm the restore
10. Wait for the message to be updated
11. Check if the message has been updated to the first version "This is an edited sample message"

**Expected**

User can restore previous version of the message from Edit History

---

**Step 2**

Show, restore older versions of a message and click undo in toast

1. Get the last post
2. Click the restore button on the first version of the message
3. Confirm the restore
4. Wait for the message to be updated 
5. Click the undo button on the toast
6. Wait for the message to be updated 
7. Check if the message has been updated to the correct version "This is the final version of the sample message"

**Expected**

User can cancel restore of the previous version of the message by clicking Undo on the toast.
