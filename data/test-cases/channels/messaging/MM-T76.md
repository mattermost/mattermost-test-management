---
key: MM-T76
title: RN apps: iOS ONLY - If the keyboard is open, tapping outside the message input box should execute actions on other elements
---

## MM-T76: RN apps: iOS ONLY - If the keyboard is open, tapping outside the message input box should execute actions on other elements

### Details

| Name     | Value                |
| :------- | :------------------- |
| Priority | Low                  |
| Status   | Active               |
| Folder   | Channels / Messaging |
| Labels   | ios-only,messaging   |
| Created  | 2019-12-19T15:28:55Z |

### Steps

<hr/>

**Step 1**

> <article>RN iOS only: if the keyboard is open, tapping outside the message input box should execute actions on other elements<br />--------------------<br />1. Tap on the message input box to open the keyboard<br />2. Long-press on a post and tap on &quot;Add reaction&quot;<br />3. Add a reaction<br />4. Tap on the message input box to open the keyboard<br />5. Long-press on a post and tap on &quot;Flag&quot;<br />6. Tap on the message input box to open the keyboard<br />7. Long-press on a post and tap on &quot;Pin to Channel&quot;<br />8. Tap on the message input box to open the keyboard<br />9. Tap on the 3-dot menu<br />10. Tap on the message input box to open the keyboard<br />11. Tap on the hamburger menu</article>

**Expected**

> <article>After 3) the reaction is added to the post and the keyboard is closed on returning to channel view<br /><br />After 5) the post is flagged and the keyboard is closed on returning to channel view<br /><br />After 7) the post is pinned and the keyboard is closed on returning to channel view<br /><br />After 9) the menu modal opens and the keyboard closes<br /><br />After 11) the menu modal opens and the keyboard closes</article>

<hr/>

### More Info

| Name              | Value                                              |
| :---------------- | :------------------------------------------------- |
| Priority P1 to P4 | P3 - Deep Functions (Do extensive scenarios work?) |
| Rainforest        | Mobile                                             |
| Team Ownership    | Channels                                           |
| Detox             | N/A                                                |
| Cypress           | N/A                                                |
| Tags              | Never tested                                       |
| Location          | Messaging                                          |
