---
# (Required) Ensure all values are filled up
name: "Call User - Call triggered on profile popover starts in the DM with the user"
status: Active
priority: Normal
folder: Calls 
authors: "@jgilliam17"
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

**Step 1**

Call User - Call should start in DM channel

1. Login as test user and go to Off-Topic
3. Send a message
4. Switch users, login as admin and visit Off Topic
5. Open Profile Popover of the test user
6. Click on Start a call button, phone icon 
7. Wait for the call to start
    1. Verify that the call did not start in the current channel
    2. Verify that DM channel with test user is created
    3. Verify that the call started in the DM channel 


**Expected**

When selecting Start a call from user profile popover, call starts in a DM with the user
