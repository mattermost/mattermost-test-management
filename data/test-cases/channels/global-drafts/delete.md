---
# (Required) Ensure all values are filled up
name: "Delete draft"
status: Draft
priority: Normal
folder: Global Drafts
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

Draft can be deleted

1. Open Town Square on Team1

2. Add some text to the text box e.g. pineapple

   1. Verify global Drafts item is added to LHS
   2. Verify Town Square shows pencil icon on the right hand side
   3. Verify draft count of 1

3. Open Global Drafts 

   1. Verify draft item is present, with text “pineapple”
   2. Verify Draft label and time stamp “now”

4. Click on Delete icon

   1. Verify delete modal opens

5. Click on "Yes, Delete"

   1. Verify draft is deleted, no longer present on global drafts list

**Expected**

- Draft can be deleted

**Step 2**

User can cancel draft deletion

1. Open Town Square on Team1

2. Add some text to the text box e.g. pineapple

   1. Verify global Drafts item is added to LHS
   2. Verify Town Square shows pencil icon on the right hand side
   3. Verify draft count of 1

3. Open Global Drafts 

   1. Verify draft item is present, with text “pineapple”
   2. Verify Draft label and time stamp “now”

4. Click on Delete icon

   1. Verify delete modal opens

5. Click on "Cancel"

   1. Verify modal closes, draft is not deleted

**Expected**

- Deletion can be canceled
