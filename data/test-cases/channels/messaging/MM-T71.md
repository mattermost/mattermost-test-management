---
key: MM-T71
title: Autocomplete highlight should follow mouse hover
---

## MM-T71: Autocomplete highlight should follow mouse hover

### Details

| Name     | Value                     |
| :------- | :------------------------ |
| Priority | Low                       |
| Status   | Active                    |
| Folder   | Channels / Messaging      |
| Labels   | rf-cloud-webapp,messaging |
| Created  | 2019-12-19T15:28:54Z      |

### Steps

<hr/>

**Step 1**

> <article>Autocomplete highlight should follow mouse hover<br />–––––––––––––––––––––––––<ol><li>In both the center channel and RHS message input boxes, type `~` and then `@`</li><li>Hover your mouse over the suggestions half-way down the list then use your up/down arrow to navigate</li></ol></article>

**Expected**

> <article><ul><li>After steps 2, 4, 6, 8 and 10 the highlight follows the mouse and there is no double highlight.</li><li>If the mouse moves over the autocomplete, highlight follows the mouse as priority.</li></ul></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | v5.20 (Feb 2020) |
| Related ticket(s) | <a href="https://mattermost.atlassian.net/browse/MM-11888">Improve autocomplete highlighting when using mouse and keyboard together — MM-11888</a> |

<hr/>

**Step 2**

> <article>3. In the Search input box, type `in:` and then `from:`<br /><br />4. Hover your mouse over the suggestions half-way down the list then use your up/down arrow to navigate</article>

**Expected**

> <article><ul><li>After steps 2, 4, 6, 8 and 10 the highlight follows the mouse and there is no double highlight.</li><li>If the mouse moves over the autocomplete, highlight follows the mouse as priority.</li></ul></article>

<hr/>

**Step 3**

> <article>5. Press CTRL/CMD+K to open the channel switcher<br /><br />6. Hover your mouse over the suggestions half-way down the list then use your up/down arrow to navigate</article>

**Expected**

> <article><ul><li>After steps 2, 4, 6, 8 and 10 the highlight follows the mouse and there is no double highlight.</li><li>If the mouse moves over the autocomplete, highlight follows the mouse as priority.</li></ul></article>

<hr/>

**Step 4**

> <article>7. Click on "More..." below Direct Messages and type a name you know exists<br /><br />8. Hover your mouse over the suggestions half-way down the list then use your up/down arrow to navigate</article>

**Expected**

> <article><ul><li>After steps 2, 4, 6, 8 and 10 the highlight follows the mouse and there is no double highlight.</li><li>If the mouse moves over the autocomplete, highlight follows the mouse as priority.</li></ul></article>

**Step Info**
| Name | Value |
| :--- | :--- |
| Fix Versions | v5.27 (September 2020),Open |
| Related ticket(s) | (<span style="color:rgb(184, 49, 47)">Open</span>) <a href="https://mattermost.atlassian.net/browse/MM-27530">Webapp: Direct Messages (More/+) dialog: selected-item doesn’t scroll into view when using arrow-nav. — MM-27530</a> |

<hr/>

**Step 5**

> <article>9. Click on the hamburger menu, select Invite People and in the "Add or Invite People" box type "@"<br /><br />10. Hover your mouse over the suggestions half-way down the list then use your up/down arrow to navigate</article>

**Expected**

> <article><ul><li>After steps 2, 4, 6, 8 and 10 the highlight follows the mouse and there is no double highlight.</li><li>If the mouse moves over the autocomplete, highlight follows the mouse as priority.</li></ul></article>

<hr/>

### More Info

| Name                     | Value                                           |
| :----------------------- | :---------------------------------------------- |
| Fix Versions             | v5.20 (Feb 2020),v5.27 (September 2020),Open    |
| Priority P1 to P4        | P4 - Low-Impact (Edge or unsuitable to repeat?) |
| Rainforest               | Webapp,in Production                            |
| Team Ownership           | Channels                                        |
| Manual Test Environments | Automated - No manual tests needed              |
| Cypress                  | Ticket Open                                     |
| Location                 | Messaging                                       |
