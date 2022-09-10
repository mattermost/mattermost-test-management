---
# (Required) Ensure all values are filled up
name: "MM-17515 — Mobile browser view: A long email address is not fully visible in Profile Settings"
status: Draft
priority: Normal
folder: Ticket coverage
authors: ""
team_ownership: 
- QA Platform

# (Optional) Test type and tools
cypress: null
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: []

# (Optional)
component: null
priority_p1_to_p4: null
location: Ticket coverage
tags: []
labels: []

# Do not change
id: 2760831
key: MM-T31
folder_path: ticket-coverage
created_on: "2019-08-28T10:40:52Z"
last_updated: ""
case_hashed: 02ef65d85b61fdf4b4f481eca41a06fc9ace99df1d1531dbe1a76a82aeebdbef5564c7fd16bd74eb514b3c44f4268632
steps_hashed: 231e1fc0252e4ecc27b2ce1edc5f37f2320e0f21f0cfdfb29b538ef831d36ed49471d9e2a31f3c46d5d4dc476c36c57d
---

## MM-T31: MM-17515 — Mobile browser view: A long email address is not fully visible in Profile Settings

---

**Step 1**

1. Register a new account using a long email address such as "my.name+somethingreallylong\@mattermost.com" (or similar)
2. Toggle Google Chrome Device Emulation
   \
   **Windows**:\
   CTRL+Shift+I\
   then\
   CTRL+Shift+M\
   **Mac**:\
   ⌘⌥I (Command+Option+I)\
   then\
   ⌘⇧M (Command+Shift+M)
3. Select "iPad" and "100%" zoom
4. Navigate to User menu > Profile > Profile Settings

**Expected**

- The email address is fully visible
- There is no period at the end of "Click to upload an image"

**Related bug**: [MM-17515](https://mattermost.atlassian.net/browse/MM-17515)
