---
# (Required) Ensure all values are filled up
name: 'RN apps: iOS ONLY - If the keyboard is open, swiping down past it should close it'
status: Active
priority: Low
folder: Messaging
authors: ''
team_ownership:
  - Channels
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)

# (Optional)
location: Messaging
component: null
tags:
  - Never tested
labels:
  - ios-only
  - messaging
tested_by_contributor: ''

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: null
playwright: null
rainforest:
  - Mobile v1
  - Mobile V2 iOS
  - in Production
manual_test_environments: []

# Do not change
id: 3736151
key: MM-T75
created_on: '2019-12-19T15:28:55Z'
last_updated: ''
case_hashed: ac1f23f202ca7e1069c9957f73deac6cd49522f8d2dc55cbd17a92059f43cca0ad43ca341cf0de079ec9d33f546edc6a
steps_hashed: ebc82f560d93b1cdc8041a3242f0e73d511bb5a23436226fcf1b7e52e7bb69ec75044fa90938e9fadfbf88b24e7e2724
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T75: RN apps: iOS ONLY - If the keyboard is open, swiping down past it should close it

---

**Step 1**

RN iOS only: If the keyboard is open, swiping down past it should close it\
\--------------------\
1\. Tap on the message input box to open the keyboard\
2\. Swipe down as though you are dragging and dropping from well above the WRITE\_TO text field down into the middle of the keyboard

**Expected**

Keyboard should close if the swipe action goes overtop the text input box.\
\
The keyboard should NOT close if the swipe action is only on the channel, and not over the keyboard.
