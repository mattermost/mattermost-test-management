---
# (Required) Ensure all values are filled up
name: "Typing should show up right away when editing a message using the up arrow"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P4 - Low-Impact (Edge or unsuitable to repeat?)
location: Messaging
component: null
tags: []
labels: 
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging

# (Optional) Test type and tools
cypress: in Production
detox: null
mmctl: null
playwright: null
rainforest: []
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3741729
key: MM-T98
created_on: "2019-12-20T16:33:00Z"
last_updated: ""
case_hashed: 5e997c6f1c1bfc3c0936cd459274fd15ac9ba6476e67915084fd37e3dfb39800edf77ffd6385c59a4972554762102b97
steps_hashed: 29b86e50daf779c0c49abf78279258db9b596efca0b97d629228e329d490e200a46fbdeccdd42e88fcc8abfd5349047b
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
