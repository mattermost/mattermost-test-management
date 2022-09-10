---
# (Required) Ensure all values are filled up
name: "Typing should show up right away when editing a message using the up arrow"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: 
- Automated - No manual tests needed

# (Optional)
component: null
priority_p1_to_p4: P4 - Low-Impact (Edge or unsuitable to repeat?)
location: Messaging
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# Do not change
id: 3741729
key: MM-T98
folder_path: channels/messaging
created_on: "2019-12-20T16:33:00Z"
last_updated: ""
case_hashed: 9109bb8996ae475dc46e344b858f60caf89b3a3ddb61e7220be9f20c1a104a161d7662dc2a427814c0942ef55ff21855
steps_hashed: 29b86e50daf779c0c49abf78279258db9b596efca0b97d629228e329d490e200a46fbdeccdd42e88fcc8abfd5349047b
---

## MM-T98: Typing should show up right away when editing a message using the up arrow

---

**Step 1**

Typing should show up right away when editing a message using the up arrow\
\--------------------\
1\. Post a message\
2\. Hit the up arrow to open the "edit modal"\
3\. Begin typing straight away as quickly as you can

**Expected**

There is no delay in letters appearing in the edit modal, no text is lost, and no text appears in the center panel in the background
