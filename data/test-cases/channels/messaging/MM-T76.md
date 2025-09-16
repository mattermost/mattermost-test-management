---
# (Required) Ensure all values are filled up
name: 'RN apps: iOS ONLY - If the keyboard is open, tapping outside the message input box should execute actions on other elements'
status: Active
priority: Low
folder: Messaging
authors: ''
team_ownership:
  - Channels
priority_p1_to_p4: P3 - Deep Functions (Do extensive scenarios work?)

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
id: 3736152
key: MM-T76
created_on: '2019-12-19T15:28:55Z'
last_updated: ''
case_hashed: b3538648df68c2695ec27b17ba008a19649edac2f944220a18611c056a48f8913e074d40e2a0f19964adf9b75f232596
steps_hashed: f8be2d63ac4c32186fbd83644dbdb52f9f737fd697cc2e2bed9953bf82e4c80cce7f31a237894f7a536f00dcaa9086a0
---

<!-- (Auto-generated) Based on frontmatter's "key" and "name" -->

## MM-T76: RN apps: iOS ONLY - If the keyboard is open, tapping outside the message input box should execute actions on other elements

---

**Step 1**

RN iOS only: if the keyboard is open, tapping outside the message input box should execute actions on other elements\
\--------------------\
1\. Tap on the message input box to open the keyboard\
2\. Long-press on a post and tap on "Add reaction"\
3\. Add a reaction\
4\. Tap on the message input box to open the keyboard\
5\. Long-press on a post and tap on "Flag"\
6\. Tap on the message input box to open the keyboard\
7\. Long-press on a post and tap on "Pin to Channel"\
8\. Tap on the message input box to open the keyboard\
9\. Tap on the 3-dot menu\
10\. Tap on the message input box to open the keyboard\
11\. Tap on the hamburger menu

**Expected**

After 3) the reaction is added to the post and the keyboard is closed on returning to channel view\
\
After 5) the post is flagged and the keyboard is closed on returning to channel view\
\
After 7) the post is pinned and the keyboard is closed on returning to channel view\
\
After 9) the menu modal opens and the keyboard closes\
\
After 11) the menu modal opens and the keyboard closes
