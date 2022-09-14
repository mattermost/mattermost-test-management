---
# (Required) Ensure all values are filled up
name: "Autocomplete highlight should follow mouse hover"
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
- rf-cloud-webapp
- messaging
- fix-versions-not-empty-2022cleanup

# (Optional) Test type and tools
cypress: Ticket Open
detox: null
mmctl: null
playwright: null
rainforest: 
- Webapp
- in Production
manual_test_environments: 
- Automated - No manual tests needed

# Do not change
id: 3736147
key: MM-T71
created_on: "2019-12-19T15:28:54Z"
last_updated: ""
case_hashed: cfae9340cb68d03f831b79bf72cee1f861e80481dfa9da0451e4d22c15846572524dc576e4d8b4ccfd597a2fad7a062d
steps_hashed: a82df0528f936321cb4a7c31b75486a13c3469faf348c525646ff43978e8b65e6a0b1e69f0a055e4cf5d9c3bce3bef90
---

<!-- auto-generated based on "key" and "name" -->

## MM-T71: Autocomplete highlight should follow mouse hover

---

**Step 1**

Autocomplete highlight should follow mouse hover\
–––––––––––––––––––––––––

1. In both the center channel and RHS message input boxes, type `\~` and then `@`
2. Hover your mouse over the suggestions half-way down the list then use your up/down arrow to navigate

_Related ticket(s):_

[Improve autocomplete highlighting when using mouse and keyboard together — MM-11888](https://mattermost.atlassian.net/browse/MM-11888)

**Expected**

- After steps 2, 4, 6, 8 and 10 the highlight follows the mouse and there is no double highlight.
- If the mouse moves over the autocomplete, highlight follows the mouse as priority.

---

**Step 2**

3\. In the Search input box, type `in:` and then `from:`\
\
4\. Hover your mouse over the suggestions half-way down the list then use your up/down arrow to navigate

**Expected**

- After steps 2, 4, 6, 8 and 10 the highlight follows the mouse and there is no double highlight.
- If the mouse moves over the autocomplete, highlight follows the mouse as priority.

---

**Step 3**

5\. Press CTRL/CMD+K to open the channel switcher\
\
6\. Hover your mouse over the suggestions half-way down the list then use your up/down arrow to navigate

**Expected**

- After steps 2, 4, 6, 8 and 10 the highlight follows the mouse and there is no double highlight.
- If the mouse moves over the autocomplete, highlight follows the mouse as priority.

---

**Step 4**

7\. Click on "More..." below Direct Messages and type a name you know exists\
\
8\. Hover your mouse over the suggestions half-way down the list then use your up/down arrow to navigate

_Related ticket(s):_

(Open) [Webapp: Direct Messages (More/+) dialog: selected-item doesn’t scroll into view when using arrow-nav. — MM-27530](https://mattermost.atlassian.net/browse/MM-27530)

**Expected**

- After steps 2, 4, 6, 8 and 10 the highlight follows the mouse and there is no double highlight.
- If the mouse moves over the autocomplete, highlight follows the mouse as priority.

---

**Step 5**

9\. Click on the hamburger menu, select Invite People and in the "Add or Invite People" box type "@"\
\
10\. Hover your mouse over the suggestions half-way down the list then use your up/down arrow to navigate

**Expected**

- After steps 2, 4, 6, 8 and 10 the highlight follows the mouse and there is no double highlight.
- If the mouse moves over the autocomplete, highlight follows the mouse as priority.
