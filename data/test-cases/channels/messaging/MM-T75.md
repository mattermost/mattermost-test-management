---
# (Required) Ensure all values are filled up
name: "RN apps: iOS ONLY - If the keyboard is open, swiping down past it should close it"
status: Active
priority: Low
folder: Messaging
authors: ""
team_ownership: 
- Channels

# (Optional)
priority_p1_to_p4: P2 - Core Functions (Do core functions work?)
location: Messaging
component: null
tags: 
- Never tested
labels: 
- ios-only
- messaging

# (Optional) Test type and tools
cypress: N/A
detox: N/A
mmctl: null
playwright: null
rainforest: 
- Mobile
manual_test_environments: []

# Do not change
id: 3736151
key: MM-T75
created_on: "2019-12-19T15:28:55Z"
last_updated: ""
case_hashed: df52988b17f35aaabee5d8302297522678424302f665c4c4b18b54cc09d2e473aa9c074d9d4776ff1b83227a3f3515c0
steps_hashed: c1fb8dcb45541915e151642115f41e187404ad9cdf79fe0e317a39684d4b12fa8b4eb9d85cac36e3fd20f576d2b3c137
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

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
