---
name: "RN apps: iOS ONLY - If the keyboard is open, tapping outside the message input box should execute actions on other elements"
status: Active
priority: Low
team_ownership: "Channels"
---

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
