---
# (Required) Ensure all values are filled up
name: "Global Drafts > Global Drafts Onboarding Tour Point"
status: Active
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

Global Drafts Onboarding Tour Point shown for first draft

1. Open Town Square on Team1

2. Add some text to the text box e.g. pineapple

   1. Verify global Drafts item is added to LHS
   2. Verify Global Drafts Onboarding Tour Point is visible with "Not Now" and "View Drafts" buttons
   3. Verify text "With the new Drafts view, all of your unfinished messages are collected in one place. Return here to read, edit, or send draft messages."

3. Click on View Drafts

   1. Verify global draft inbox opens
   2. Verify draft created in step 2 is present
   
4. Open Off Topic on Team1

5. Start a new draft by adding some text to the text box

   1. Verify no tooltip on global draft item on the sidebar
   
**Expected**

- When user starts a draft for the first time, Global Draft LHS item is shown with the onboarding tooltip. Global Drafts Onboarding Tour Point is not shown on subsequent draft creation. 

---

**Step 2**

User can dismiss Global Drafts Onboarding Tour without viewing Global Drafts inbox

1. Open Town Square on Team1

2. Add some text to the text box e.g. pineapple

   1. Verify global Drafts item is added to LHS
   2. Verify Global Drafts Onboarding Tour Point is visible with "Not Now" and "View Drafts" buttons
   3. Verify text "With the new Drafts view, all of your unfinished messages are collected in one place. Return here to read, edit, or send draft messages."

3. Click on Not Now button on the tour

   1. Verify tour tip is dismissed
   2. Verify user remains on the current channel 

**Expected**

After dismissing Global Drafts Onboarding Tour user remains on the current channel. 
