---
# (Required) Ensure all values are filled up
name: "RN apps: iOS ONLY - If the keyboard is open, swiping down past it should close it"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: null
playwright: null
rainforest: 
- Mobile
manual_test_environments: []

# (Optional)
component: null
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Messaging
tags: 
- Never tested
labels: 
- ios-only
- messaging

# Do not change
id: 3736151
key: MM-T75
folder_path: channels/messaging
created_on: "2019-12-19T15:28:55Z"
last_updated: ""
case_hashed: b8e3d6d0d0ed53504b5c91dd9376ce77dffaa7ba8d5b321b32bbf56facb2686173be9bdc4d12254cb17187c274767156
steps_hashed: b2132b55c7db3b27b3cebfa5591937dc1254487a7ccad9a8f68a2d913dc6fb080a90cc547b666f41ad9926f93cccb481
---

## MM-T75: RN apps: iOS ONLY - If the keyboard is open, swiping down past it should close it

---

**Step 1**

RN iOS only: If the keyboard is open, swiping down past it should close it\
\--------------------\
1\. Tap on the message input box to open the keyboard\
2\. Swipe down to scroll the channel, extending over top of the text input box

**Expected**

Keyboard should close if the swipe action goes overtop the text input box.\
\
The keyboard should NOT close if the swipe action is only on the channel, and not over the keyboard.
