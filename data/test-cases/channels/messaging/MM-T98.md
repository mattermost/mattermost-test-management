---
# (Required) Ensure all values are filled up
name: "Typing should show up right away when editing a message using the up arrow"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership:
- Channels
priority_p1_to_p4: P4 - Low-Impact (Edge or unsuitable to repeat?)

# (Optional)
location: Messaging
component: null
tags: []
labels:
- TM4J-Key-Mapped-In-Cypress-Release
- cy-prod
- messaging
tested_by_contributor: ""

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
case_hashed: 02587b32f74efd52c91e67364d87dd33834547cd51815d32b70e319015ad7bc0770e2412a04668e996c690a38f66e39c
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
